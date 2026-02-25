'use client'
import { useState, useEffect, useRef } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Chat() {
  const { data: session, status } = useSession()
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingPayment, setLoadingPayment] = useState(false)
  const [credits, setCredits] = useState(null)
  const [termsAccepted, setTermsAccepted] = useState(null)
  const messagesEndRef = useRef(null)

  const userId = session?.user?.id

  useEffect(() => {
    if (status === 'authenticated') {
      const accepted = localStorage.getItem('terms_accepted') === 'true'
      setTermsAccepted(accepted)
    }
  }, [status])

  useEffect(() => {
    if (userId) {
      fetch('/api/user/credits')
        .then(r => r.json())
        .then(d => { if (d.credits !== undefined) setCredits(d.credits) })
        .catch(console.error)
    }
  }, [userId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatHistory, loading])

  function acceptTerms() {
    localStorage.setItem('terms_accepted', 'true')
    setTermsAccepted(true)
  }

  async function send() {
    if (!message.trim() || loading || credits <= 0) return
    const userMsg = message.trim()
    setMessage('')
    setLoading(true)
    setChatHistory(prev => [...prev, { role: 'user', content: userMsg }])
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, agentId: 'ansiedade' })
      })
      const data = await res.json()
      if (data.reply) {
        setChatHistory(prev => [...prev, { role: 'assistant', content: data.reply }])
        setCredits(prev => prev - 1)
      } else {
        setChatHistory(prev => [...prev, { role: 'assistant', content: `⚠️ ${data.error || 'Erro desconhecido'}` }])
      }
    } catch {
      setChatHistory(prev => [...prev, { role: 'assistant', content: '⚠️ Erro de conexão.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  async function buyCredits(planOption) {
    setLoadingPayment(true)
    try {
      const res = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planOption })
      })
      const data = await res.json()
      if (data.init_point) window.location.href = data.init_point
      else alert(data.error || "Erro ao gerar pagamento.")
    } catch { alert("Erro de conexão.") }
    finally { setLoadingPayment(false) }
  }

  // Carregando sessão
  if (status === 'loading') {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <p style={{ color: '#6b7280' }}>Carregando...</p>
      </div>
    )
  }

  // Não autenticado → tela de login
  if (status === 'unauthenticated') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 480, margin: '0 auto', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: 'system-ui' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🧠</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px', textAlign: 'center' }}>Assistente Emocional</h1>
        <p style={{ color: '#6b7280', fontSize: 14, textAlign: 'center', marginBottom: 32, lineHeight: 1.6 }}>
          Apoio educativo em saúde mental com IA.<br/>Não substitui atendimento profissional.
        </p>
        <button
          onClick={() => signIn('google')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '13px 24px', background: '#fff', border: '1px solid #d1d5db', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 15, width: '100%', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.62 1.22 9.08 3.22l6.77-6.77C35.85 2.36 30.28 0 24 0 14.7 0 6.71 5.48 2.69 13.44l7.9 6.13C12.6 13.14 17.85 9.5 24 9.5z"/><path fill="#4285F4" d="M46.52 24.55c0-1.64-.15-3.22-.42-4.73H24v8.96h12.68c-.55 2.94-2.22 5.44-4.72 7.11l7.4 5.75C43.73 37.55 46.52 31.48 46.52 24.55z"/><path fill="#FBBC05" d="M10.59 28.43A14.4 14.4 0 0 1 9.5 24c0-1.55.27-3.04.75-4.43l-7.9-6.13A23.93 23.93 0 0 0 0 24c0 3.86.93 7.5 2.55 10.74l8.04-6.31z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.15 15.9-5.83l-7.4-5.75c-2.17 1.46-4.96 2.33-8.5 2.33-6.15 0-11.4-3.64-13.41-8.82l-8.04 6.31C6.71 42.52 14.7 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
          Entrar com Google
        </button>
        <p style={{ color: '#9ca3af', fontSize: 12, marginTop: 20, textAlign: 'center' }}>
          Ao entrar você concorda com os termos de uso do serviço.
        </p>
      </div>
    )
  }

  // Aguardando verificação local do aceite dos termos
  if (termsAccepted === null) {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <p style={{ color: '#6b7280' }}>Carregando preferências...</p>
      </div>
    )
  }

  // Autenticado mas ainda não aceitou os termos
  if (termsAccepted === false) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 720, margin: '0 auto', fontFamily: 'system-ui' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong>🧠 Assistente Emocional</strong>
          <button onClick={() => signOut()} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 13 }}>Sair</button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }}>
          <h2 style={{ fontSize: 18, marginBottom: 6 }}>Termos de Uso e Responsabilidade</h2>
          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 20 }}>Leia com atenção antes de continuar.</p>
          {[
            { emoji: '🎓', title: 'Fins Educacionais', text: 'Este assistente oferece informações educativas sobre saúde mental. Não realiza diagnóstico clínico, não prescreve medicamentos e não substitui atendimento psicológico ou psiquiátrico.' },
            { emoji: '👩‍⚕️', title: 'Procure Ajuda Profissional', text: 'Se você apresenta sintomas persistentes, busque um profissional de saúde mental licenciado.' },
            { emoji: '🆘', title: 'Crise ou Emergência', text: 'Se estiver em risco imediato, ligue 188 (CVV — 24h, gratuito) ou vá ao pronto-socorro mais próximo.' },
            { emoji: '🔒', title: 'Privacidade', text: 'Suas mensagens são processadas para gerar respostas. Não compartilhe dados sensíveis como CPF ou dados bancários.' },
            { emoji: '⚖️', title: 'Limitação de Responsabilidade', text: 'Os operadores não se responsabilizam por decisões tomadas com base nas respostas. Use com senso crítico.' }
          ].map((item, i) => (
            <div key={i} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', marginBottom: 12 }}>
              <strong style={{ fontSize: 14 }}>{item.emoji} {item.title}</strong>
              <p style={{ margin: '6px 0 0', color: '#374151', fontSize: 13, lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '16px 20px', borderTop: '1px solid #e5e7eb', background: '#fff' }}>
          <button onClick={acceptTerms} style={{ width: '100%', padding: 14, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
            Li e aceito os termos — Iniciar conversa
          </button>
        </div>
      </div>
    )
  }

  // Chat principal
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 720, margin: '0 auto', fontFamily: 'system-ui' }}>
      {/* Header */}
      <div style={{ padding: '12px 20px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <strong>🧠 Assistente Emocional</strong>
          {session?.user?.name && <span style={{ fontSize: 13, color: '#6b7280' }}>— {session.user.name}</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 13, background: credits === 0 ? '#fee2e2' : '#f3f4f6', padding: '4px 10px', borderRadius: 20, color: credits === 0 ? '#ef4444' : '#374151' }}>
            {credits !== null ? `${credits} créditos` : '...'}
          </span>
          <button onClick={() => signOut()} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 12 }}>Sair</button>
        </div>
      </div>

      {/* Sem créditos */}
      {credits !== null && credits <= 0 ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 30, textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💳</div>
          <h3 style={{ margin: '0 0 8px', color: '#111' }}>Seus créditos acabaram</h3>
          <p style={{ color: '#6b7280', marginBottom: 24 }}>Escolha um pacote para continuar conversando</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => buyCredits('basic')} disabled={loadingPayment} style={{ padding: '12px 24px', background: '#009ee3', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>{loadingPayment ? '...' : 'Básico — R$19,90'}</button>
            <button onClick={() => buyCredits('pro')} disabled={loadingPayment} style={{ padding: '12px 24px', background: '#111', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>{loadingPayment ? '...' : 'Pro — R$39,90'}</button>
          </div>
        </div>
      ) : (
        <>
          {/* Mensagens */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {chatHistory.length === 0 && (
              <div style={{ textAlign: 'center', color: '#9ca3af', marginTop: 60, fontSize: 15 }}>
                👋 Olá{session?.user?.name ? `, ${session.user.name.split(' ')[0]}` : ''}! Como você está se sentindo hoje?
              </div>
            )}
            {chatHistory.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '75%', padding: '10px 14px', borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px', background: msg.role === 'user' ? '#2563eb' : '#f3f4f6', color: msg.role === 'user' ? '#fff' : '#111', fontSize: 14, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: '#f3f4f6', padding: '10px 14px', borderRadius: '18px 18px 18px 4px', color: '#6b7280', fontSize: 14 }}>Digitando...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ borderTop: '1px solid #e5e7eb', padding: '12px 16px', background: '#fff', display: 'flex', gap: 10, alignItems: 'flex-end' }}>
            <textarea rows={1} value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleKeyDown} placeholder="Digite uma mensagem… (Enter para enviar)" style={{ flex: 1, resize: 'none', border: '1px solid #d1d5db', borderRadius: 12, padding: '10px 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit', maxHeight: 120, overflowY: 'auto' }} />
            <button onClick={send} disabled={loading || !message.trim()} style={{ background: loading || !message.trim() ? '#d1d5db' : '#2563eb', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', cursor: loading || !message.trim() ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: 14, height: 42 }}>
              {loading ? '...' : '→'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}


