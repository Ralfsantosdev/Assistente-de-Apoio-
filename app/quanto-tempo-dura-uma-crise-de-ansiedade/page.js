import Link from "next/link"

export const metadata = {
  title: "Quanto Tempo Dura Uma Crise de Ansiedade? Duração e fases",
  description: "Saiba quanto tempo dura uma crise de ansiedade, quais são as fases do episódio e o que esperar durante e depois da crise.",
  keywords: ["quanto tempo dura crise de ansiedade", "duração crise ansiedade", "crise ansiedade duração", "tempo crise panico"],
  openGraph: { title: "Quanto Tempo Dura Uma Crise de Ansiedade?", description: "Entenda a duração e fases de uma crise de ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Quanto Tempo Dura Uma Crise de Ansiedade?</h1>

      <p>Uma das perguntas mais comuns de quem já viveu uma crise de ansiedade é: "quando isso vai acabar?". A boa notícia é que as crises têm tempo limitado, mesmo que pareçam eternas no momento.</p>

      <h2 style={{ marginTop: '32px' }}>Duração típica</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Pico da crise:</strong> 5 a 20 minutos — este é o momento mais intenso</li>
        <li><strong>Fase de resolução:</strong> 20 a 60 minutos — os sintomas começam a diminuir gradualmente</li>
        <li><strong>Sintomas residuais:</strong> podem durar de 1 a 24 horas — cansaço, tensão, sensibilidade</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>As três fases de uma crise</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
          <h3 style={{ color: '#f59e0b', marginBottom: '8px' }}>⚡ Fase 1: Escalada (0-5 min)</h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px' }}>Os sintomas surgem rapidamente: coração acelera, respiração fica difícil, mãos formigam, medo intenso aparece.</p>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
          <h3 style={{ color: '#ef4444', marginBottom: '8px' }}>🔥 Fase 2: Pico (5-20 min)</h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px' }}>O momento mais intenso. A pessoa pode sentir que vai morrer, desmaiar ou enlouquecer. É o auge da adrenalina no corpo.</p>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
          <h3 style={{ color: '#10b981', marginBottom: '8px' }}>🌿 Fase 3: Resolução (20-60 min)</h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px' }}>O corpo começa a se acalmar. Os sintomas perdem intensidade progressivamente. Fadiga e sensibilidade emocional são comuns.</p>
        </div>
      </div>

      <h2 style={{ marginTop: '32px' }}>Por que parece durar uma eternidade?</h2>
      <p>A percepção de tempo durante a ansiedade é distorcida. A hipervigilância e o medo fazem com que cada segundo pareça muito mais longo. Além disso, o medo de ter outra crise pode prolongar os sintomas residuais.</p>

      <h2 style={{ marginTop: '32px' }}>O que pode prolongar a crise?</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Lutar contra os sintomas aumenta a adrenalina</li>
        <li>Hiperventilação contínua mantém os sintomas ativos</li>
        <li>Catastrofizar ("estou tendo um infarto") alimenta o ciclo</li>
        <li>Ambientes muito estimulantes (barulho, multidão)</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Uma crise pode durar horas?</h3>
          <p>O pico não dura horas, mas sintomas residuais como tensão, cansaço e sensibilidade podem persistir por várias horas após o episódio.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>É possível ter várias crises no mesmo dia?</h3>
          <p>Sim. Em períodos de estresse intenso, é possível ter crises recorrentes. Isso reforça a importância de buscar tratamento profissional.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Crise de ansiedade: o que acontece no corpo</Link>
          <Link href="/o-que-fazer-em-uma-crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ O que fazer em uma crise de ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Passando por uma crise agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te guiar em exercícios que ajudam a reduzir a duração da crise.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Em caso de crise severa, ligue 188 (CVV).</p>
    </main>
  )
}
