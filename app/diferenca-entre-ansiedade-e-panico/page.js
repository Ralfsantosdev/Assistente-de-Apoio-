import Link from "next/link"

export const metadata = {
  title: "Diferença entre Ansiedade e Pânico: como distinguir",
  description: "Entenda a diferença entre ansiedade e pânico: critérios, sintomas, duração e abordagens terapêuticas de cada condição.",
  keywords: ["diferença ansiedade e pânico", "ansiedade vs pânico", "ansiedade ou panico", "crise ansiedade vs panico"],
  openGraph: { title: "Diferença entre Ansiedade e Pânico", description: "Como distinguir ansiedade de pânico." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Diferença entre Ansiedade e Pânico</h1>

      <p>Embora ansiedade e pânico compartilhem sintomas, são condições distintas com diferenças importantes em duração, intensidade e tratamento. Entender essas diferenças é fundamental para buscar a ajuda correta.</p>

      <h2 style={{ marginTop: '32px' }}>Comparação direta</h2>
      <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-strong)' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Característica</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Ansiedade</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Pânico</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
              <td style={{ padding: '12px', fontWeight: 600 }}>Início</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Gradual</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Abrupto (segundos)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
              <td style={{ padding: '12px', fontWeight: 600 }}>Duração</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Horas a dias</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>5-30 minutos (pico)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
              <td style={{ padding: '12px', fontWeight: 600 }}>Intensidade</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Moderada a alta</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Extrema</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
              <td style={{ padding: '12px', fontWeight: 600 }}>Gatilho</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Geralmente identificável</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Pode ser espontâneo</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
              <td style={{ padding: '12px', fontWeight: 600 }}>Medo principal</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Preocupação futura</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Medo de morrer/enlouquecer</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', fontWeight: 600 }}>Sintomas físicos</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Tensão, inquietação</td>
              <td style={{ padding: '12px', color: 'var(--text-muted)' }}>Taquicardia, falta de ar, despersonalização</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: '32px' }}>Podem coexistir?</h2>
      <p>Sim. Muitas pessoas com TAG também têm ataques de pânico. A ansiedade crônica pode ser o "combustível" que eventualmente desencadeia ataques de pânico em momentos de estresse acumulado.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Se tenho crises intensas, é pânico?</h3>
          <p>Não necessariamente. Crises de ansiedade podem ser intensas sem preencher os critérios de ataque de pânico. O diagnóstico diferencial deve ser feito por um profissional.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/transtorno-do-panico" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Transtorno do pânico</Link>
          <Link href="/crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Crise de ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer entender melhor o que sente?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para explorar seus sintomas de forma segura.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. O diagnóstico deve ser feito por profissional qualificado.</p>
    </main>
  )
}
