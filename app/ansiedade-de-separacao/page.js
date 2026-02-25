import Link from "next/link"

export const metadata = {
  title: "Ansiedade de Separação: sintomas em crianças e adultos",
  description: "Entenda a ansiedade de separação em crianças e adultos: sintomas, causas, quando é normal e quando buscar tratamento.",
  keywords: ["ansiedade de separação", "ansiedade separação adulto", "ansiedade separação criança", "medo de separação"],
  openGraph: { title: "Ansiedade de Separação", description: "Sintomas e tratamento da ansiedade de separação." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade de Separação: Em Crianças e Adultos</h1>

      <p>A ansiedade de separação é um medo intenso e desproporcional de se afastar de figuras de apego — pais, parceiros, filhos. Embora seja mais conhecida em crianças, pode afetar adultos de forma significativa.</p>

      <h2 style={{ marginTop: '32px' }}>Em crianças</h2>
      <p>É normal até certa idade (6 meses a 3 anos). Torna-se preocupante quando persiste além da idade esperada ou causa sofrimento intenso:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Choro inconsolável ao se separar dos pais</li>
        <li>Recusa em ir à escola</li>
        <li>Pesadelos sobre separação</li>
        <li>Sintomas físicos (dor de barriga, cefaleia) antes de separações</li>
        <li>Medo de que algo ruim aconteça aos pais</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Em adultos</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Angústia intensa quando o parceiro viaja ou se ausenta</li>
        <li>Necessidade constante de saber onde estão as figuras de apego</li>
        <li>Dificuldade de ficar sozinho em casa</li>
        <li>Ciúme excessivo e medo de abandono</li>
        <li>Verificação compulsiva de mensagens e localização</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Tratamento</h2>
      <p>A TCC é eficaz tanto para crianças quanto para adultos. Em crianças, o envolvimento dos pais no processo terapêutico é fundamental. Para adultos, terapia de esquemas e trabalho com apego podem ser indicados.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Adultos podem ter ansiedade de separação?</h3>
          <p>Sim. O DSM-5 reconhece o Transtorno de Ansiedade de Separação em adultos. É mais comum do que se imagina e pode ser tratado.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/ansiedade-generalizada" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade generalizada</Link>
          <Link href="/ansiedade-e-medo-constante" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade e medo constante</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Precisa de apoio?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para entender melhor seus padrões emocionais.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação profissional.</p>
    </main>
  )
}
