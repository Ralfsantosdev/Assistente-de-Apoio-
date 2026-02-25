'use client'
import { useState, useEffect, useRef } from 'react'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingPayment, setLoadingPayment] = useState(false)
  const [credits, setCredits] = useState(null)
  const [termsAccepted, setTermsAccepted] = useState(null) // null = carregando
  const messagesEndRef = useRef(null)

  const demoUserId = "demo-user"

  // Verificar se já aceitou os termos
  useEffect(() => {
    const accepted = localStorage.getItem('terms_accepted') === 'true'
    setTermsAccepted(accepted)
  }, [])

  useEffect(() => {
    async function fetchCredits() {
      try {
        const res = await fetch(`/api/user/credits?userId=${demoUserId}`)
        const data = await res.json()
        if (data.credits !== undefined) setCredits(data.credits)
      } catch (err) {
        console.error("Erro ao buscar créditos", err)
      }
    }
    fetchCredits()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatHistory, loading])

  async function send() {
    if (!message.trim() || loading || credits <= 0) return

    const userMsg = message.trim()
    setMessage('') // Limpa o input
    setLoading(true)

    setChatHistory(prev => [...prev, { role: 'user', content: userMsg }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, userId: demoUserId })
      })
      const data = await res.json()

      if (data.reply) {
        setChatHistory(prev => [...prev, { role: 'assistant', content: data.reply }])
        setCredits(prev => prev - 1)
      } else {
        setChatHistory(prev => [...prev, { role: 'assistant', content: `⚠️ ${data.error || 'Erro desconhecido'}` }])
      }
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'assistant', content: '⚠️ Erro de conexão.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  async function buyCredits(planOption) {
    setLoadingPayment(true)
    try {
      const res = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: demoUserId, planOption })
      })
      const data = await res.json()
      if (data.init_point) window.location.href = data.init_point
      else alert(data.error || "Erro ao gerar pagamento.")
    } catch {
      alert("Erro de conexão.")
    } finally {
      setLoadingPayment(false)
    }
  }

  function acceptTerms() {
    localStorage.setItem('terms_accepted', 'true')
    setTermsAccepted(true)
  }

  // Aguardando verificação do localStorage
  if (termsAccepted === null) return null

  // Tela de Termos de Responsabilidade
  if (!termsAccepted) return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 720, margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '20px 20px 12px', borderBottom: '1px solid #e5e7eb' }}>
        <strong style={{ fontSize: 17 }}>🧠 Assistente Emocional</strong>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }}>
        <h2 style={{ fontSize: 18, marginBottom: 6 }}>Termos de Uso e Responsabilidade</h2>
        <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 20 }}>Leia com atenção antes de continuar.</p>

        {[
          {
            emoji: '🎓', title: 'Fins Educacionais',
            text: 'Este assistente oferece informações educativas sobre saúde mental. Não realiza diagnóstico clínico, não prescreve medicamentos e não substitui atendimento psicológico ou psiquiátrico.'
          },
          {
            emoji: '👩‍⚕️', title: 'Procure Ajuda Profissional',
            text: 'Se você apresenta sintomas persistentes, busque um profissional de saúde mental licenciado. Este assistente não pode avaliar, tratar ou acompanhar seu estado clínico.'
          },
          {
            emoji: '🆘', title: 'Crise ou Emergência',
            text: 'Se você estiver em crise, com pensamentos de se machucar ou em risco imediato, ligue agora para o CVV: 188 (24h, gratuito) ou vá ao pronto-socorro mais próximo.'
          },
          {
            emoji: '🔒', title: 'Privacidade',
            text: 'Suas mensagens são processadas para gerar respostas. Não compartilhe informações sensíveis como CPF, dados bancários ou de terceiros.'
          },
          {
            emoji: '⚖️', title: 'Limitação de Responsabilidade',
            text: 'Os operadores deste serviço não se responsabilizam por decisões tomadas com base nas respostas do assistente. Use sempre com senso crítico e em complemento a orientação profissional.'
          }
        ].map((item, i) => (
          <div key={i} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', marginBottom: 12 }}>
            <strong style={{ fontSize: 14 }}>{item.emoji} {item.title}</strong>
            <p style={{ margin: '6px 0 0', color: '#374151', fontSize: 13, lineHeight: 1.6 }}>{item.text}</p>
          </div>
        ))}
      </div>
      <div style={{ padding: '16px 20px', borderTop: '1px solid #e5e7eb', background: '#fff' }}>
        <button
          onClick={acceptTerms}
          style={{ width: '100%', padding: '14px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
          Li e aceito os termos — Iniciar conversa
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 720, margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Header */}
      <div style={{ padding: '12px 20px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
        <strong style={{ fontSize: 16 }}>🧠 Assistente Emocional</strong>
        <span style={{ fontSize: 13, background: '#f3f4f6', padding: '4px 10px', borderRadius: 20, color: credits === 0 ? '#ef4444' : '#374151' }}>
          {credits !== null ? `${credits} créditos` : '...'}
        </span>
      </div>

      {/* Sem créditos → tela de compra */}
      {credits !== null && credits <= 0 ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 30, textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💳</div>
          <h3 style={{ margin: '0 0 8px', color: '#111' }}>Seus créditos acabaram</h3>
          <p style={{ color: '#6b7280', marginBottom: 24 }}>Escolha um pacote para continuar conversando</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => buyCredits('basic')} disabled={loadingPayment}
              style={{ padding: '12px 24px', background: '#009ee3', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
              {loadingPayment ? '...' : 'Básico — R$19,90'}
            </button>
            <button onClick={() => buyCredits('pro')} disabled={loadingPayment}
              style={{ padding: '12px 24px', background: '#111', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
              {loadingPayment ? '...' : 'Pro — R$39,90'}
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Área de mensagens */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {chatHistory.length === 0 && (
              <div style={{ textAlign: 'center', color: '#9ca3af', marginTop: 60, fontSize: 15 }}>
                👋 Olá! Como você está se sentindo hoje?
              </div>
            )}
            {chatHistory.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth: '75%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user' ? '#2563eb' : '#f3f4f6',
                  color: msg.role === 'user' ? '#fff' : '#111',
                  fontSize: 14,
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: '#f3f4f6', padding: '10px 14px', borderRadius: '18px 18px 18px 4px', color: '#6b7280', fontSize: 14 }}>
                  Digitando...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input fixo no rodapé */}
          <div style={{ borderTop: '1px solid #e5e7eb', padding: '12px 16px', background: '#fff', display: 'flex', gap: 10, alignItems: 'flex-end' }}>
            <textarea
              rows={1}
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite uma mensagem… (Enter para enviar)"
              style={{
                flex: 1, resize: 'none', border: '1px solid #d1d5db', borderRadius: 12,
                padding: '10px 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit',
                maxHeight: 120, overflowY: 'auto'
              }}
            />
            <button
              onClick={send}
              disabled={loading || !message.trim()}
              style={{
                background: loading || !message.trim() ? '#d1d5db' : '#2563eb',
                color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px',
                cursor: loading || !message.trim() ? 'not-allowed' : 'pointer',
                fontWeight: 600, fontSize: 14, height: 42
              }}>
              {loading ? '...' : '→'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
