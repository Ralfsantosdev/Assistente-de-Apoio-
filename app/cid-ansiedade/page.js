import Link from "next/link"

export const metadata = {
  title: "CID Ansiedade: código, classificação e o que significa",
  description: "Entenda os códigos CID da ansiedade: F41.0, F41.1, F40.1 e outros. Saiba como a classificação internacional categoriza os transtornos.",
  keywords: ["cid ansiedade", "cid f41", "cid transtorno ansiedade", "código ansiedade", "cid 10 ansiedade"],
  openGraph: { title: "CID da Ansiedade", description: "Códigos CID para transtornos de ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>CID da Ansiedade: Códigos e Classificação</h1>

      <p>A Classificação Internacional de Doenças (CID) é o sistema usado mundialmente para codificar condições de saúde. Os transtornos de ansiedade estão classificados no grupo F40-F48 (Transtornos neuróticos, relacionados ao estresse e somatoformes).</p>

      <h2 style={{ marginTop: '32px' }}>Principais códigos CID-10</h2>
      <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-strong)' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>CID</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Transtorno</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}><td style={{ padding: '12px', fontWeight: 600, color: 'var(--primary)' }}>F40.0</td><td style={{ padding: '12px', color: 'var(--text-muted)' }}>Agorafobia</td></tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}><td style={{ padding: '12px', fontWeight: 600, color: 'var(--primary)' }}>F40.1</td><td style={{ padding: '12px', color: 'var(--text-muted)' }}>Fobias sociais (Ansiedade social)</td></tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}><td style={{ padding: '12px', fontWeight: 600, color: 'var(--primary)' }}>F40.2</td><td style={{ padding: '12px', color: 'var(--text-muted)' }}>Fobias específicas</td></tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}><td style={{ padding: '12px', fontWeight: 600, color: 'var(--primary)' }}>F41.0</td><td style={{ padding: '12px', color: 'var(--text-muted)' }}>Transtorno do pânico</td></tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}><td style={{ padding: '12px', fontWeight: 600, color: 'var(--primary)' }}>F41.1</td><td style={{ padding: '12px', color: 'var(--text-muted)' }}>Transtorno de Ansiedade Generalizada (TAG)</td></tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}><td style={{ padding: '12px', fontWeight: 600, color: 'var(--primary)' }}>F41.2</td><td style={{ padding: '12px', color: 'var(--text-muted)' }}>Transtorno misto ansioso e depressivo</td></tr>
            <tr><td style={{ padding: '12px', fontWeight: 600, color: 'var(--primary)' }}>F93.0</td><td style={{ padding: '12px', color: 'var(--text-muted)' }}>Transtorno de ansiedade de separação na infância</td></tr>
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: '32px' }}>Para que serve o CID?</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Padronizar diagnósticos internacionalmente</li>
        <li>Permitir comunicação entre profissionais de saúde</li>
        <li>Base para estatísticas epidemiológicas</li>
        <li>Necessário para planos de saúde e atestados médicos</li>
        <li>Fundamentar laudos e perícias</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>CID-11 (nova versão)</h2>
      <p>O CID-11, publicado pela OMS em 2022, traz uma reorganização dos transtornos de ansiedade com classificações mais modernas e alinhadas ao DSM-5.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Qual o CID mais comum para ansiedade?</h3>
          <p>O F41.1 (Transtorno de Ansiedade Generalizada) é o código mais frequentemente utilizado em atestados e relatórios médicos relacionados à ansiedade.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/diagnostico-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Diagnóstico de ansiedade</Link>
          <Link href="/criterios-para-transtorno-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Critérios para transtorno de ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer entender melhor seu caso?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar a organizar informações para sua consulta.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. O diagnóstico deve ser feito por médico ou psicólogo.</p>
    </main>
  )
}
