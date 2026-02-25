import Link from "next/link"

export const metadata = {
  title: "Critérios para Transtorno de Ansiedade: DSM-5 e CID-11",
  description: "Conheça os critérios diagnósticos para transtornos de ansiedade segundo o DSM-5 e CID-11: TAG, pânico, fobia social e mais.",
  keywords: ["critérios transtorno ansiedade", "dsm-5 ansiedade", "critérios tag", "critérios diagnósticos ansiedade"],
  openGraph: { title: "Critérios para Transtorno de Ansiedade", description: "Critérios diagnósticos do DSM-5 e CID-11." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Critérios para Transtorno de Ansiedade</h1>

      <p>Os critérios diagnósticos são diretrizes usadas por profissionais de saúde mental para identificar transtornos de forma padronizada. Os dois principais sistemas são o DSM-5 (APA) e o CID-11 (OMS).</p>

      <h2 style={{ marginTop: '32px' }}>Critérios do DSM-5 para TAG (F41.1)</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>A.</strong> Ansiedade e preocupação excessivas sobre diversos eventos por pelo menos 6 meses</li>
        <li><strong>B.</strong> Dificuldade de controlar a preocupação</li>
        <li><strong>C.</strong> Pelo menos 3 dos seguintes (em adultos): inquietação, fadiga, dificuldade de concentração, irritabilidade, tensão muscular, perturbação do sono</li>
        <li><strong>D.</strong> Causa sofrimento clinicamente significativo ou prejuízo funcional</li>
        <li><strong>E.</strong> Não atribuível a substâncias ou condição médica</li>
        <li><strong>F.</strong> Não explicado por outro transtorno mental</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Critérios para Transtorno do Pânico (F41.0)</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Ataques de pânico recorrentes e inesperados</li>
        <li>Pelo menos 1 ataque seguido de 1 mês de preocupação persistente sobre novos ataques ou mudanças comportamentais</li>
        <li>Não atribuível a substâncias ou condição médica</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Critérios para Fobia Social (F40.1)</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Medo ou ansiedade acentuados sobre situações sociais de exposição</li>
        <li>Medo de agir de forma humilhante ou embaraçosa</li>
        <li>As situações são evitadas ou enfrentadas com ansiedade intensa</li>
        <li>Desproporcional à ameaça real</li>
        <li>Persistente (6+ meses) e causa prejuízo significativo</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Preciso preencher TODOS os critérios?</h3>
          <p>Depende do transtorno. Para TAG, são necessários 3 de 6 sintomas complementares. O diagnóstico é feito considerando o quadro completo, não apenas checklist.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/cid-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ CID da ansiedade</Link>
          <Link href="/diagnostico-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Diagnóstico de ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer entender seus sintomas?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar a mapear o que você sente.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. O diagnóstico requer avaliação profissional.</p>
    </main>
  )
}
