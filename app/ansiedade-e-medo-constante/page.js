import Link from "next/link"

export const metadata = {
  title: "Ansiedade e Medo Constante: por que isso acontece e como lidar",
  description: "Entenda por que a ansiedade causa medo constante, a sensação de que algo ruim vai acontecer e como quebrar esse ciclo de apreensão.",
  keywords: ["ansiedade e medo constante", "medo constante", "sensação de perigo", "apreensão ansiedade", "medo sem motivo"],
  openGraph: { title: "Ansiedade e Medo Constante", description: "Por que a ansiedade causa medo constante." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade e Medo Constante: Por Que Isso Acontece</h1>

      <p>Muitas pessoas com ansiedade descrevem uma sensação permanente de ameaça — como se algo terrível estivesse prestes a acontecer, sem saber exatamente o quê. Esse medo difuso e constante é uma das experiências mais desgastantes dos transtornos de ansiedade.</p>

      <h2 style={{ marginTop: '32px' }}>O que é o medo difuso?</h2>
      <p>Diferente do medo específico (fobia), o medo na ansiedade é generalizado. A amígdala cerebral — responsável por detectar ameaças — fica hiperativa, interpretando situações neutras como perigosas. É como um alarme de incêndio que dispara sem fogo.</p>

      <h2 style={{ marginTop: '32px' }}>Manifestações comuns</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>"Algo ruim vai acontecer" sem saber o quê</li>
        <li>Hipervigilância — estar sempre alerta e atento a perigos</li>
        <li>Dificuldade de relaxar mesmo em ambientes seguros</li>
        <li>Checagem compulsiva (portas, celular, notícias)</li>
        <li>Evitação de novas situações por medo do desconhecido</li>
        <li>Pesadelos recorrentes sobre perigo ou perdas</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Como quebrar o ciclo</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Reconheça o padrão:</strong> "Esse medo é a ansiedade falando, não a realidade"</li>
        <li><strong>Técnica de teste de realidade:</strong> Pergunte-se: "Qual a evidência concreta de perigo?"</li>
        <li><strong>Limite o consumo de notícias</strong> negativas e redes sociais</li>
        <li><strong>Pratique mindfulness</strong> para treinar o foco no presente</li>
        <li><strong>Busque terapia:</strong> A TCC é altamente eficaz para reestruturar pensamentos de medo</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Esse medo constante pode desaparecer?</h3>
          <p>Sim. Com tratamento adequado, o cérebro pode ser "recalibrado" para interpretar ameaças de forma mais proporcional. A neuroplasticidade permite essa mudança.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/sensacao-de-morte-iminente" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Sensação de morte iminente</Link>
          <Link href="/ansiedade-sintomas-emocionais" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade: sintomas emocionais</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Vivendo com medo?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para aprender técnicas de regulação emocional.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação profissional.</p>
    </main>
  )
}
