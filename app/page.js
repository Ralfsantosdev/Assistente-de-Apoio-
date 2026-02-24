'use client'
import { useState } from 'react'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [loadingPayment, setLoadingPayment] = useState(false)
  
  const demoUserId = "demo-user" // Altere para pegar do sistema de auth na versão final

  async function send() {
    setReply("Pensando...");
    const res = await fetch('/api/chat', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({ message, userId: demoUserId })
    })
    const data = await res.json()
    setReply(data.reply || data.error)
  }

  async function buyCredits(planOption) {
    setLoadingPayment(true);
    try {
      const res = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: demoUserId, planOption })
      });
      const data = await res.json();
      
      if (data.init_point) {
        window.location.href = data.init_point; // Redireciona para o checkout do MP
      } else {
        alert(data.error || "Erro ao gerar pagamento.");
      }
    } catch (err) {
      alert("Erro de conexão.");
    } finally {
      setLoadingPayment(false);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h2>Assistente Emocional</h2>
      
      <div style={{ marginBottom: 20, padding: 15, border: '1px solid #ccc', borderRadius: 8 }}>
        <h3>Comprar Créditos (Mercado Pago)</h3>
        <button 
          onClick={() => buyCredits('basic')} 
          disabled={loadingPayment}
          style={{ marginRight: 10, padding: '8px 16px', cursor: 'pointer' }}
        >
          Pacote Básico (R$19.90)
        </button>
        <button 
          onClick={() => buyCredits('pro')} 
          disabled={loadingPayment}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Pacote Pro (R$39.90)
        </button>
      </div>

      <textarea
        rows="4"
        style={{width:"100%", padding: 10}}
        placeholder="Digite sua dúvida..."
        value={message}
        onChange={e=>setMessage(e.target.value)}
      />
      <button onClick={send} style={{marginTop:10, padding: '10px 20px', cursor: 'pointer'}}>Enviar</button>
      <hr style={{ margin: '20px 0' }}/>
      
      <div style={{ backgroundColor: '#f5f5f5', padding: 15, borderRadius: 8, whiteSpace: 'pre-wrap' }}>
        {reply || "A resposta aparecerá aqui."}
      </div>
    </div>
  )
}
