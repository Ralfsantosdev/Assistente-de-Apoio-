import sql from '../../../lib/db'
import { checkCrisis } from '../../../lib/crisis'
import { agents } from '../../../lib/agents'

export async function POST(req) {
  const { message, userId, agentId = 'ansiedade' } = await req.json()

  if (checkCrisis(message)) {
    await sql`
      INSERT INTO audit_events (user_id, event_type, metadata)
      VALUES (${userId}, 'crisis_detected', ${JSON.stringify({ message })})
    `;

    return Response.json({
      reply: "Se você estiver em risco imediato, ligue 188 (CVV - Brasil). Procure ajuda profissional imediatamente."
    })
  }

  const users = await sql`
    SELECT credits FROM users WHERE id = ${userId}
  `;
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

  const messages = [
    { role: "system", content: agent.systemPrompt },
    ...formattedHistory,
    { role: "user", content: message }
  ];

  // Chamada ao Orquestrador
  const orchestratorResponse = await fetch(`${process.env.ORCHESTRATOR_URL}/v1/process`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ORCHESTRATOR_API_KEY}`
    },
    body: JSON.stringify({
      messages: messages,
      model: "gpt-4o-mini",
      temperature: 0.7,
      domain: "assistente-emocional"
    })
  });

  if (!orchestratorResponse.ok) {
    console.error("Erro no orquestrador:", await orchestratorResponse.text());
    return Response.json({ error: "Erro ao processar mensagem com o Orquestrador." }, { status: 500 });
  }

  const orchestratorData = await orchestratorResponse.json();
  const replyContent = orchestratorData.reply || orchestratorData.choices?.[0]?.message?.content || "Desculpe, ocorreu um erro de comunicação.";
  const tokensUsed = orchestratorData.usage?.total_tokens || 0;

  await sql`
    UPDATE users SET credits = credits - 1 WHERE id = ${userId}
  `;

  await sql`
    INSERT INTO messages (user_id, agent_id, role, content)
    VALUES (${userId}, ${agentId}, 'user', ${message})
  `;

  await sql`
    INSERT INTO messages (user_id, agent_id, role, content, tokens_used)
    VALUES (${userId}, ${agentId}, 'assistant', ${replyContent}, ${tokensUsed})
  `;

  return Response.json({
    reply: replyContent
  })
}
