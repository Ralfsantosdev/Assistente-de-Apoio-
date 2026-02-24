import { supabase } from '../../../lib/supabase'
import { checkCrisis } from '../../../lib/crisis'
import { agents } from '../../../lib/agents'

export async function POST(req) {
  const { message, userId, agentId = 'ansiedade' } = await req.json()

  if (checkCrisis(message)) {
    await supabase.from('audit_events').insert({
      user_id: userId,
      event_type: 'crisis_detected',
      metadata: { message }
    })

    return Response.json({
      reply: "Se você estiver em risco imediato, ligue 188 (CVV - Brasil). Procure ajuda profissional imediatamente."
    })
  }

  const { data: user } = await supabase
    .from('users')
    .select('credits')
    .eq('id', userId)
    .single()

  if (!user || user.credits <= 0) {
    return Response.json({ error: "Créditos insuficientes." })
  }

  const agent = agents[agentId] || agents['ansiedade']

  const { data: history } = await supabase
    .from('messages')
    .select('role, content')
    .eq('user_id', userId)
    .eq('agent_id', agentId)
    .order('created_at', { ascending: false })
    .limit(20)
  
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

  await supabase
    .from('users')
    .update({ credits: user.credits - 1 })
    .eq('id', userId)

  await supabase.from('messages').insert([
    {
      user_id: userId,
      agent_id: agentId,
      role: "user",
      content: message
    },
    {
      user_id: userId,
      agent_id: agentId,
      role: "assistant",
      content: replyContent,
      tokens_used: tokensUsed
    }
  ])

  return Response.json({
    reply: replyContent
  })
}
