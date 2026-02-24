'use client'
import { useState } from 'react'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')

  async function send() {
    const res = await fetch('/api/chat', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({ message, userId: "demo-user" })
    })
    const data = await res.json()
    setReply(data.reply || data.error)
  }

  return (
    <div>
      <textarea
        rows="4"
        style={{width:"100%"}}
        placeholder="Digite sua dúvida..."
        value={message}
        onChange={e=>setMessage(e.target.value)}
      />
      <button onClick={send} style={{marginTop:10}}>Enviar</button>
      <hr/>
      <p>{reply}</p>
    </div>
  )
}
