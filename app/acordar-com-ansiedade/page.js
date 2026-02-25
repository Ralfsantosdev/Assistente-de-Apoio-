import Link from "next/link"

export const metadata = {
  title: "Acordar com Ansiedade: por que acontece e o que fazer pela manhã",
  description: "Entenda por que você acorda com ansiedade, o pico matinal de cortisol e técnicas para começar o dia com mais calma.",
  keywords: ["acordar com ansiedade", "ansiedade matinal", "ansiedade ao acordar", "ansiedade de manhã", "cortisol manhã"],
  openGraph: { title: "Acordar com Ansiedade", description: "Por que a ansiedade ataca logo ao acordar." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Acordar com Ansiedade: Por Que Acontece</h1>

      <p>Abrir os olhos e já sentir o coração acelerado, a mente cheia de preocupações e uma angústia sem nome. A ansiedade matinal é real, tem explicação fisiológica e pode ser gerenciada.</p>

      <h2 style={{ marginTop: '32px' }}>O cortisol e a resposta de despertar</h2>
      <p>O cortisol — hormônio do estresse — tem um pico natural entre 6h e 8h da manhã, chamado CAR (Cortisol Awakening Response). Em pessoas ansiosas, esse pico é exagerado, fazendo com que o despertar seja acompanhado por sintomas de ansiedade intensa.</p>

      <h2 style={{ marginTop: '32px' }}>Outros fatores que contribuem</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Sono ruim ou insuficiente na noite anterior</li>
        <li>Problemas não resolvidos que a mente "retoma" ao acordar</li>
        <li>Glicemia baixa (jejum prolongado)</li>
        <li>Efeito de abstinência de medicamentos (ex.: benzodiazepínicos)</li>
        <li>Antecipação de eventos estressantes do dia</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Rotina matinal anti-ansiedade</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Não pegue o celular imediatamente</strong> — dê 15-30 min antes de verificar mensagens e notícias</li>
        <li><strong>Respire:</strong> 5 ciclos de respiração lenta antes de levantar</li>
        <li><strong>Tome água e coma algo leve</strong> — estabilize a glicemia</li>
        <li><strong>Movimente o corpo:</strong> mesmo uma caminhada de 10 min ajuda</li>
        <li><strong>Luz natural:</strong> exponha-se à luz do sol nos primeiros 30 min</li>
        <li><strong>Gratidão:</strong> nomeie 3 coisas boas, mesmo pequenas</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Acordar com taquicardia é perigoso?</h3>
          <p>Geralmente não. A combinação de cortisol matinal com sono de má qualidade pode causar taquicardia ao acordar. Mas se for recorrente, consulte um cardiologista.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/ansiedade-antes-de-dormir" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade antes de dormir</Link>
          <Link href="/ansiedade-e-cansaco" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade e cansaço</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Manhã difícil?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Comece o dia conversando com nosso assistente para exercícios de respiração e organização mental.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação profissional.</p>
    </main>
  )
}
