import OpenAI from 'openai'
import { supabase } from '../../../lib/supabase'
import { checkCrisis } from '../../../lib/crisis'
import { agents } from '../../../lib/agents'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

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

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: agent.systemPrompt },
      ...formattedHistory,
      { role: "user", content: message }
    ]
  })

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
      content: completion.choices[0].message.content,
      tokens_used: completion.usage.total_tokens
    }
  ])

  return Response.json({
    reply: completion.choices[0].message.content
  })
}
