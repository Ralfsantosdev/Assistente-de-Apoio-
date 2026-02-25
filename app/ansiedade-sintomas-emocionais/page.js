import Link from "next/link"

export const metadata = {
  title: "Ansiedade Sintomas Emocionais: medo, preocupação e angústia constante",
  description: "Entenda os sintomas emocionais da ansiedade: medo irracional, preocupação excessiva, irritabilidade, angústia e dificuldade de concentração.",
  keywords: ["ansiedade sintomas emocionais", "sintomas emocionais da ansiedade", "ansiedade e medo", "ansiedade e preocupação"],
  openGraph: { title: "Ansiedade: Sintomas Emocionais", description: "Os sintomas emocionais e psicológicos da ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade: Sintomas Emocionais e Psicológicos</h1>

      <p>
        Enquanto os sintomas físicos da ansiedade são mais fáceis de identificar, os sintomas emocionais costumam ser
        normalizados ou confundidos com traços de personalidade. Muitas pessoas vivem anos com ansiedade crônica sem
        perceber que o que sentem tem nome e tratamento.
      </p>

      <h2 style={{ marginTop: '32px' }}>Preocupação excessiva e incontrolável</h2>
      <p>A marca registrada do transtorno de ansiedade é a preocupação desproporcional. A mente cria cenários catastróficos sobre saúde, finanças, relacionamentos ou trabalho — mesmo sem evidências concretas de problema.</p>

      <h2 style={{ marginTop: '32px' }}>Medo constante e irracional</h2>
      <p>A sensação de que algo ruim vai acontecer está sempre presente. Não é um medo específico (como fobia), mas uma apreensão difusa e persistente que consome energia mental.</p>

      <h2 style={{ marginTop: '32px' }}>Irritabilidade e impaciência</h2>
      <p>O estado constante de alerta esgota os recursos emocionais. Pequenas frustrações geram reações desproporcionais. A pessoa pode se sentir "no limite" o tempo todo.</p>

      <h2 style={{ marginTop: '32px' }}>Dificuldade de concentração</h2>
      <p>A mente ansiosa está sempre "ocupada" com preocupações, tornando difícil focar em tarefas, leituras ou conversas. "Brancos" mentais são frequentes.</p>

      <h2 style={{ marginTop: '32px' }}>Sensação de catástrofe iminente</h2>
      <p>Mesmo em momentos de tranquilidade, surge a sensação de que algo terrível está prestes a acontecer. Essa hipervigilância emocional é exaustiva e impede o relaxamento.</p>

      <h2 style={{ marginTop: '32px' }}>Ruminação mental</h2>
      <p>Pensamentos repetitivos sobre erros passados ou preocupações futuras em ciclos que parecem impossíveis de interromper. A mente "não desliga", especialmente à noite.</p>

      <h2 style={{ marginTop: '32px' }}>Evitação e isolamento</h2>
      <p>Para evitar gatilhos de ansiedade, muitas pessoas se afastam de situações sociais, compromissos e até de entes queridos, restringindo progressivamente sua vida.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>É normal se preocupar o tempo todo?</h3>
          <p>Preocupação ocasional é normal. Quando ela é constante, desproporcional e interfere na rotina, pode indicar um transtorno de ansiedade que merece avaliação profissional.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>Ansiedade pode causar perda de memória?</h3>
          <p>Sim. O excesso de cortisol pode afetar o hipocampo, região do cérebro ligada à memória, causando esquecimentos e dificuldade de recordação.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/ansiedade-sintomas-fisicos" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade: sintomas físicos</Link>
          <Link href="/ansiedade-e-medo-constante" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade e medo constante</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Se identificou com esses sintomas?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar a organizar pensamentos e oferecer técnicas de regulação emocional.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação psicológica ou psiquiátrica para diagnóstico.</p>
    </main>
  )
}
