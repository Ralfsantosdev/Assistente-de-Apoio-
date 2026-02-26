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
      } else if (data.outOfCredits) {
        setChatHistory(prev => [...prev, { role: 'assistant', content: data.error, outOfCredits: true }])
        setCredits(0)
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
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-inter)' }}>
        <p className="animate-fade-in" style={{ color: 'var(--text-muted)' }}>Conectando...</p>
      </div>
    )
  }

  // Não autenticado → tela de login premium
  if (status === 'unauthenticated') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', padding: 24, fontFamily: 'var(--font-inter)' }}>
        <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: 420, padding: 40, borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 20, animation: 'pulse-subtle 3s infinite' }}>🌌</div>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 28, fontWeight: 700, margin: '0 0 12px', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
            Assistente PRO
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 40, lineHeight: 1.6 }}>
            Seu espaço seguro de apoio emocional guiado por inteligência artificial avançada.
          </p>
          <button
            onClick={() => signIn('google')}
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px', background: 'var(--text-main)', color: '#000', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, fontSize: 15, width: '100%', justifyContent: 'center', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(255,255,255,0.1)' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.62 1.22 9.08 3.22l6.77-6.77C35.85 2.36 30.28 0 24 0 14.7 0 6.71 5.48 2.69 13.44l7.9 6.13C12.6 13.14 17.85 9.5 24 9.5z"/><path fill="#4285F4" d="M46.52 24.55c0-1.64-.15-3.22-.42-4.73H24v8.96h12.68c-.55 2.94-2.22 5.44-4.72 7.11l7.4 5.75C43.73 37.55 46.52 31.48 46.52 24.55z"/><path fill="#FBBC05" d="M10.59 28.43A14.4 14.4 0 0 1 9.5 24c0-1.55.27-3.04.75-4.43l-7.9-6.13A23.93 23.93 0 0 0 0 24c0 3.86.93 7.5 2.55 10.74l8.04-6.31z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.15 15.9-5.83l-7.4-5.75c-2.17 1.46-4.96 2.33-8.5 2.33-6.15 0-11.4-3.64-13.41-8.82l-8.04 6.31C6.71 42.52 14.7 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
            Entrar com Google
          </button>
        </div>
      </div>
    )
  }

  // Aguardando verificação local do aceite dos termos
  if (termsAccepted === null) {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-inter)' }}>
        <p className="animate-fade-in" style={{ color: 'var(--text-muted)' }}>Verificando credenciais...</p>
      </div>
    )
  }

  // Autenticado mas ainda não aceitou os termos
  if (termsAccepted === false) {
    return (
      <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 680, margin: '0 auto', fontFamily: 'var(--font-inter)', padding: '20px 16px' }}>
        <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong style={{ fontFamily: 'var(--font-outfit)', fontSize: 20 }}>Diretrizes de Uso</strong>
          <button onClick={() => signOut()} style={{ background: 'var(--bg-input)', border: '1px solid var(--border-light)', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 13, padding: '6px 12px', borderRadius: 'var(--radius-sm)' }}>Sair da conta</button>
        </div>
        <div className="glass-panel" style={{ flex: 1, overflowY: 'auto', padding: 32, borderRadius: 'var(--radius-md)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 30, lineHeight: 1.6 }}>Para mantermos um ambiente seguro, produtivo e ético, por favor leia atentamente as instruções abaixo antes de iniciar.</p>
          {[
            { id: 1, title: 'Fins Educacionais', text: 'Este assistente oferece acolhimento baseado em padrões generativos. Não realiza diagnóstico clínico e não substitui tratamento médico, psicológico ou psiquiátrico.' },
            { id: 2, title: 'Busque a Rede de Apoio', text: 'Em caso de sintomas severos ou angústia persistente, não hesite em procurar atendimento humano qualificado presencial ou telemedicina.' },
            { id: 3, title: 'Canal de Emergência', text: 'Se você estiver em risco iminente ou lidando com pensamentos autolesivos, ligue agora para o CVV (188) ou procure o pronto-socorro mais próximo.' },
            { id: 4, title: 'Sigilo e Privacidade', text: 'Embora as conversas sejam criptografadas, evite compartilhar dados bancários, senhas, CPFs ou detalhes sensíveis de terceiros no chat.' }
          ].map((item) => (
            <div key={item.id} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 16, background: 'var(--border-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 14 }}>
                {item.id}
              </div>
              <div>
                <strong style={{ fontSize: 16, display: 'block', marginBottom: 6, color: 'var(--text-main)', letterSpacing: '0.01em' }}>{item.title}</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '24px 0 10px', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={acceptTerms} style={{ padding: '16px 32px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary-hover)'} onMouseOut={e => e.currentTarget.style.background = 'var(--primary)'}>
            Li, compreendi e aceito os termos
          </button>
        </div>
      </div>
    )
  }

  // Chat principal
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 800, margin: '0 auto', fontFamily: 'var(--font-inter)', position: 'relative' }}>
      
      {/* Header Glassmorphism */}
      <div className="glass-panel" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 20px 0', borderRadius: 'var(--radius-lg)', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
          <strong style={{ fontFamily: 'var(--font-outfit)', fontSize: 18, letterSpacing: '0.01em' }}>ProAssistant</strong>
          <span style={{ fontSize: 14, color: 'var(--border-strong)' }}>|</span>
          <span style={{ fontSize: 14, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>
            {session?.user?.name || session?.user?.email}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--bg-input)', padding: '6px 12px', borderRadius: 20, border: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: 16 }}>✨</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: credits <= 5 ? '#ef4444' : 'var(--text-main)' }}>
              {credits !== null ? credits : '...'}
            </span>
            {credits !== null && credits > 0 && credits <= 5 && (
              <span style={{ fontSize: 10, color: '#ef4444', marginLeft: 4, fontWeight: 700 }}>ACABANDO</span>
            )}
          </div>
          {credits !== null && credits <= 5 && (
            <button 
              onClick={() => buyCredits('pro')} 
              style={{ background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 20, padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)' }}
            >
              Adicionar Créditos
            </button>
          )}
          <button onClick={() => signOut()} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 13, padding: '4px 8px' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>Sair</button>
        </div>
      </div>

      {/* Área de mensagens */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {credits !== null && credits <= 0 && (
           <div className="glass-panel" style={{ padding: 40, textAlign: 'center', borderRadius: 'var(--radius-lg)', marginTop: 'auto', marginBottom: 'auto' }}>
           <div style={{ fontSize: 48, marginBottom: 20 }}>⚡</div>
           <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-outfit)', fontSize: 24 }}>Seu plano acabou</h3>
           <p style={{ color: 'var(--text-muted)', marginBottom: 32, lineHeight: 1.6, maxWidth: 400, margin: '0 auto 32px' }}>Faça um upgrade para continuar sua jornada de autoconhecimento e apoio emocional constante.</p>
           <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
             <button onClick={() => buyCredits('basic')} disabled={loadingPayment} style={{ padding: '14px 28px', background: 'var(--bg-input)', border: '1px solid var(--border-strong)', color: 'var(--text-main)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s' }}>{loadingPayment ? 'Processando...' : 'Plano Básico — R$19,90'}</button>
             <button onClick={() => buyCredits('pro')} disabled={loadingPayment} style={{ padding: '14px 28px', background: 'var(--text-main)', color: 'var(--bg-dark)', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(255,255,255,0.15)' }}>{loadingPayment ? 'Processando...' : 'Plano Pro — R$39,90'}</button>
           </div>
         </div>
        )}

        {credits !== null && credits > 0 && chatHistory.length === 0 && (
          <div className="animate-fade-in" style={{ margin: 'auto', textAlign: 'center', maxWidth: 400 }}>
             <div style={{ fontSize: 40, marginBottom: 20, opacity: 0.8 }}>🌿</div>
             <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.6 }}>Estou aqui para ouvir e te apoiar.<br/>Compartilhe o que está sentindo hoje.</p>
          </div>
        )}

        {credits !== null && credits > 0 && chatHistory.map((msg, i) => (
          <div key={i} className="animate-fade-in" style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
            {msg.role === 'assistant' && (
              <div style={{ width: 32, height: 32, borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, marginRight: 12, flexShrink: 0 }}>🌌</div>
            )}
            <div style={{ maxWidth: '80%', padding: '14px 18px', borderRadius: msg.role === 'user' ? '20px 20px 4px 20px' : '4px 20px 20px 20px', background: msg.role === 'user' ? 'var(--primary)' : 'var(--bg-card)', color: 'var(--text-main)', fontSize: 15, lineHeight: 1.6, whiteSpace: 'pre-wrap', border: msg.role === 'assistant' ? '1px solid var(--border-light)' : 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              {msg.content}
              {msg.outOfCredits && (
                <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <button onClick={() => buyCredits('basic')} style={{ padding: '8px 16px', background: 'var(--bg-input)', border: '1px solid var(--border-strong)', color: 'var(--text-main)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>Plano Básico</button>
                  <button onClick={() => buyCredits('pro')} style={{ padding: '8px 16px', background: 'var(--text-main)', color: 'var(--bg-dark)', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>Plano Pro</button>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="animate-fade-in" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div style={{ width: 32, height: 32, borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, marginRight: 12, flexShrink: 0 }}>🌌</div>
            <div style={{ padding: '14px 20px', borderRadius: '4px 20px 20px 20px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', display: 'flex', gap: 6 }}>
              <span className="typing-dot"></span><span className="typing-dot"></span><span className="typing-dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} style={{ height: 20 }} />
      </div>

      {/* Floating Input */}
      {credits !== null && credits > 0 && (
        <div style={{ padding: '0 20px 24px' }}>
          <div className="glass-panel" style={{ display: 'flex', gap: 12, alignItems: 'flex-end', padding: '10px 10px 10px 16px', borderRadius: 'var(--radius-lg)' }}>
            <textarea
              rows={1}
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem de forma livre..."
              style={{ flex: 1, resize: 'none', border: 'none', background: 'transparent', color: 'var(--text-main)', fontSize: 15, outline: 'none', fontFamily: 'inherit', maxHeight: 150, padding: '12px 0' }}
            />
            <button
              onClick={send}
              disabled={loading || !message.trim()}
              style={{
                background: loading || !message.trim() ? 'var(--border-strong)' : 'var(--text-main)',
                color: loading || !message.trim() ? 'var(--text-muted)' : 'var(--bg-dark)', 
                border: 'none', borderRadius: 20, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: loading || !message.trim() ? 'not-allowed' : 'pointer', transition: 'all 0.2s', flexShrink: 0
              }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


