'use client'
import { useState, useEffect } from 'react'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [loadingPayment, setLoadingPayment] = useState(false)
  const [credits, setCredits] = useState(null)
  
  const demoUserId = "demo-user" // Altere para pegar do sistema de auth na versão final

  // Busca os créditos do usuário ao carregar a página
  useEffect(() => {
    async function fetchCredits() {
      try {
        const res = await fetch(`/api/user/credits?userId=${demoUserId}`);
        const data = await res.json();
        if (data.credits !== undefined) {
          setCredits(data.credits);
        }
      } catch (err) {
        console.error("Erro ao buscar créditos", err);
      }
    }
    fetchCredits();
  }, []);

  async function send() {
    if (credits <= 0) return; // Segurança extra no front
    
    setReply("Pensando...");
    const res = await fetch('/api/chat', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({ message, userId: demoUserId })
    })
    const data = await res.json()
    setReply(data.reply || data.error)
    
    // Desconta o crédito no frontend para manter sincronizado sem precisar dar reload
    if (res.ok && !data.error) {
      setCredits(prev => prev - 1);
    }
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Assistente Emocional</h2>
        <span style={{ background: '#eee', padding: '5px 10px', borderRadius: 20 }}>
          Créditos: {credits !== null ? credits : '...'}
        </span>
      </div>
      
      {/* SE O USUÁRIO NÃO TIVER CRÉDITOS -> MOSTRA TELA DE COMPRA E OCULTA O CHAT */}
      {credits !== null && credits <= 0 ? (
        <div style={{ marginTop: 20, padding: 25, border: '1px solid #ccc', borderRadius: 8, textAlign: 'center' }}>
          <h3 style={{ color: '#d32f2f' }}>Seus créditos acabaram</h3>
          <p>Para continuar conversando com o assistente, escolha um pacote abaixo:</p>
          <div style={{ marginTop: 20, display: 'flex', gap: 10, justifyContent: 'center' }}>
            <button 
              onClick={() => buyCredits('basic')} 
              disabled={loadingPayment}
              style={{ padding: '10px 20px', cursor: 'pointer', background: '#009ee3', color: '#fff', border: 'none', borderRadius: 5 }}
            >
              {loadingPayment ? 'Carregando...' : 'Pacote Básico (R$19.90)'}
            </button>
            <button 
              onClick={() => buyCredits('pro')} 
              disabled={loadingPayment}
              style={{ padding: '10px 20px', cursor: 'pointer', background: '#333', color: '#fff', border: 'none', borderRadius: 5 }}
            >
              {loadingPayment ? 'Carregando...' : 'Pacote Pro (R$39.90)'}
            </button>
          </div>
        </div>
      ) : (
        /* SE O USUÁRIO TIVER CRÉDITOS -> MOSTRA APENAS O CHAT */
        <div style={{ marginTop: 20 }}>
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
      )}
    </div>
  )
}
