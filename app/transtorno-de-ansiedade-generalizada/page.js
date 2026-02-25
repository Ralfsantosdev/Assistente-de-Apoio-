import Link from "next/link"

export const metadata = {
  title: "TAG - Transtorno de Ansiedade Generalizada: o que é e tratamento",
  description:
    "Saiba o que é o TAG, como identificar a preocupação excessiva e quais são as abordagens terapêuticas mais eficazes."
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.6' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Transtorno de Ansiedade Generalizada (TAG)</h1>

      <p>
        O Transtorno de Ansiedade Generalizada (TAG) é caracterizado por uma preocupação excessiva e persistente 
        sobre diversos aspectos da vida, como saúde, trabalho ou relacionamentos, por pelo menos seis meses.
      </p>

      <h2 style={{ marginTop: '32px' }}>Critérios Comuns para Identificação</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Dificuldade em controlar a preocupação.</li>
        <li>Sensação de "nervos à flor da pele" ou inquietação.</li>
        <li>Cansaço fácil (fadiga).</li>
        <li>Tensão muscular persistente.</li>
        <li>Alterações no sono (dificuldade para adormecer ou sono picado).</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Tratamento e Manejo</h2>
      <p>
        As abordagens mais comuns incluem a Terapia Cognitivo-Comportamental (TCC), 
        que ajuda a reestruturar pensamentos disfuncionais, e em alguns casos, o uso de medicamentos prescritos.
      </p>

      <div style={{marginTop:40, padding:32, background:"var(--bg-card)", border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center'}}>
        <h3 style={{ marginBottom: 16 }}>Você se sente preocupado o tempo todo?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          O assistente ProAssistant pode te ajudar a organizar seus pensamentos e oferecer técnicas de relaxamento.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>
          Conversar Agora
        </Link>
      </div>
    </main>
  )
}
