import sql from '@/lib/db'
import { checkCrisis } from '@/lib/crisis'
import { agents } from '@/lib/agents'
import { rateLimit } from '@/lib/rateLimit'

const MAX_MESSAGE_LENGTH = 2000
const MAX_USERID_LENGTH = 256

export async function POST(req) {
  try {
    // Rate limiting: 15 mensagens por minuto por IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anonymous'
    const rl = rateLimit(`chat:${ip}`, 15, 60_000)
    if (!rl.ok) {
      return Response.json(
        { error: `Muitas requisições. Tente novamente em ${rl.retryAfter}s.` },
        { status: 429, headers: { 'Retry-After': String(rl.retryAfter) } }
      )
    }

    const { message, userId, agentId = 'ansiedade' } = await req.json()

    // Validação de inputs
    if (!message || !userId) {
      return Response.json({ error: "Mensagem e userId são obrigatórios." }, { status: 400 })
    }
    if (typeof message !== 'string' || message.length > MAX_MESSAGE_LENGTH) {
      return Response.json({ error: `Mensagem deve ter no máximo ${MAX_MESSAGE_LENGTH} caracteres.` }, { status: 400 })
    }
    if (typeof userId !== 'string' || userId.length > MAX_USERID_LENGTH) {
      return Response.json({ error: "userId inválido." }, { status: 400 })
    }

    if (checkCrisis(message)) {
      await sql`
        INSERT INTO audit_events (user_id, event_type, metadata)
        VALUES (${userId}, 'crisis_detected', ${JSON.stringify({ message })})
      `;
      return Response.json({
        reply: "Se você estiver em risco imediato, ligue 188 (CVV - Brasil). Procure ajuda profissional imediatamente."
      })
    }

    // Auto-cria o usuário se for a primeira vez
    await sql`
      INSERT INTO users (id, credits) VALUES (${userId}, 20)
      ON CONFLICT (id) DO NOTHING
    `;

    const users = await sql`SELECT credits FROM users WHERE id = ${userId}`;
    const user = users[0];

    if (!user || user.credits <= 0) {
      return Response.json({ error: "Créditos insuficientes." })
    }

    const agent = agents[agentId] || agents['ansiedade']

    const history = await sql`
      SELECT role, content FROM messages
      WHERE user_id = ${userId} AND agent_id = ${agentId}
      ORDER BY created_at DESC LIMIT 20
    `;

    const formattedHistory = (history || []).reverse().map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    const messagesPayload = [
      { role: "system", content: agent.systemPrompt },
      ...formattedHistory,
      { role: "user", content: message }
    ];

    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-nano",
        messages: messagesPayload,
        temperature: 0.7
      })
    });

    if (!openaiResponse.ok) {
      console.error("[chat] OpenAI erro:", openaiResponse.status, await openaiResponse.text());
      return Response.json({ error: "Erro ao processar mensagem. Tente novamente." }, { status: 500 });
    }

    const openaiData = await openaiResponse.json();
    const replyContent = openaiData.choices?.[0]?.message?.content || "Não consegui processar sua mensagem.";
    const tokensUsed = openaiData.usage?.total_tokens || 0;

    await sql`UPDATE users SET credits = credits - 1 WHERE id = ${userId}`;
    await sql`INSERT INTO messages (user_id, agent_id, role, content) VALUES (${userId}, ${agentId}, 'user', ${message})`;
    await sql`INSERT INTO messages (user_id, agent_id, role, content, tokens_used) VALUES (${userId}, ${agentId}, 'assistant', ${replyContent}, ${tokensUsed})`;

    return Response.json({ reply: replyContent })

  } catch (error) {
    console.error("[chat] Erro interno:", error.message, error.stack)
    return Response.json({ error: "Erro interno. Tente novamente." }, { status: 500 })
  }
}
