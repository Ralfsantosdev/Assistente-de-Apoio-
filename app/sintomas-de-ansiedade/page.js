import Link from "next/link"

export const metadata = {
  title: "Sintomas de Ansiedade: sinais físicos e emocionais explicados",
  description:
    "Entenda os principais sintomas de ansiedade, sinais físicos no corpo e quando procurar ajuda profissional.",
  keywords: [
    "sintomas de ansiedade",
    "ansiedade sintomas",
    "sintomas da ansiedade",
    "sintomas ansiedade"
  ],
  openGraph: {
    title: "Sintomas de Ansiedade",
    description:
      "Veja os sinais físicos e emocionais mais comuns da ansiedade."
  }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.6' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Sintomas de Ansiedade: Como o Corpo e a Mente Reagem</h1>

      <p>
        A ansiedade pode se manifestar de forma física e emocional.
        Em alguns casos, os sintomas são confundidos com problemas cardíacos
        ou neurológicos.
      </p>

      <h2 style={{ marginTop: '32px' }}>Sintomas físicos mais comuns</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Taquicardia (batimentos acelerados)</li>
        <li>Falta de ar ou respiração ofegante</li>
        <li>Tremores e espasmos musculares</li>
        <li>Formigamento nas mãos ou rosto</li>
        <li>Tensão muscular e dores no corpo</li>
        <li>Sudorese excessiva</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Sintomas emocionais</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Preocupação excessiva e pensamentos intrusivos</li>
        <li>Medo constante de algo ruim acontecer</li>
        <li>Irritabilidade e impaciência</li>
        <li>Dificuldade de concentração e "branco" na mente</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Quando procurar ajuda?</h2>
      <p>
        Se os sintomas forem frequentes, intensos ou estiverem afetando
        sua rotina, é importante buscar avaliação médica ou psicológica.
      </p>

      <div style={{marginTop:40, padding:32, background:"var(--bg-card)", border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center'}}>
        <h3 style={{ marginBottom: 16 }}>Precisa conversar agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          Converse com nosso assistente educacional especializado em ansiedade para acolhimento imediato.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>
          Conversar agora
        </Link>
      </div>

      <section style={{ marginTop: 48 }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: 24 }}>
          <h3>Ansiedade pode causar sintomas físicos?</h3>
          <p>Sim. O corpo ativa o sistema de alerta (luta ou fuga), gerando reações físicas reais e intensas.</p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3>Sintomas de ansiedade podem durar dias?</h3>
          <p>Podem durar horas ou dias, dependendo do nível de estresse e da persistência dos gatilhos emocionais.</p>
        </div>
      </section>
    </main>
  )
}
