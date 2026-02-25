import Link from "next/link"

export const metadata = {
  title: "Ansiedade Social (Fobia Social): sintomas, causas e tratamento",
  description: "Entenda a ansiedade social: medo intenso de julgamento, sintomas, causas e como a TCC pode ajudar no tratamento.",
  keywords: ["ansiedade social", "fobia social", "medo de julgamento", "ansiedade social sintomas", "transtorno ansiedade social"],
  openGraph: { title: "Ansiedade Social", description: "O que é fobia social e como tratar." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade Social: Muito Mais do Que Timidez</h1>

      <p>A ansiedade social — ou fobia social — vai muito além da timidez. É um medo intenso e persistente de ser observado, julgado ou humilhado em situações sociais. Pode limitar severamente a vida profissional, acadêmica e pessoal.</p>

      <h2 style={{ marginTop: '32px' }}>Situações comuns que geram medo</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Falar em público ou fazer apresentações</li>
        <li>Comer ou beber na frente de outros</li>
        <li>Iniciar ou manter conversas</li>
        <li>Ser o centro das atenções</li>
        <li>Fazer ligações telefônicas</li>
        <li>Usar banheiros públicos</li>
        <li>Entrar em ambientes com pessoas desconhecidas</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Sintomas</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Rubor facial (ficar vermelho)</li>
        <li>Sudorese intensa</li>
        <li>Tremor na voz ou nas mãos</li>
        <li>Náusea e desconforto gástrico</li>
        <li>Mente em branco durante interações</li>
        <li>Evitação de situações sociais</li>
        <li>Autocrítica intensa após interações</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Tratamento</h2>
      <p>A TCC com exposição gradual é o tratamento mais eficaz. A pessoa aprende a enfrentar situações temidas de forma progressiva, reestruturando crenças disfuncionais sobre julgamento social.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Ansiedade social é a mesma coisa que timidez?</h3>
          <p>Não. A timidez é um traço de personalidade que não causa sofrimento significativo. A ansiedade social é um transtorno que limita a vida e requer tratamento.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/transtorno-de-ansiedade-generalizada" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Transtorno de Ansiedade Generalizada</Link>
          <Link href="/terapia-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Terapia para ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Se identifica com esses sintomas?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente em um espaço seguro e sem julgamento.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação profissional para diagnóstico.</p>
    </main>
  )
}
