import Link from "next/link"

export const metadata = {
  title: "Taquicardia e Ansiedade: por que o coração acelera e quando se preocupar",
  description: "Entenda a relação entre taquicardia e ansiedade, por que o coração acelera durante crises e como diferenciar de problemas cardíacos.",
  keywords: ["taquicardia e ansiedade", "ansiedade coração acelerado", "palpitação ansiedade", "coração disparado ansiedade"],
  openGraph: { title: "Taquicardia e Ansiedade", description: "Por que a ansiedade faz o coração acelerar." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Taquicardia e Ansiedade: Entenda a Conexão</h1>

      <p>
        Sentir o coração acelerado é um dos sintomas mais assustadores da ansiedade. A taquicardia causada pela ansiedade
        é resultado direto da liberação de adrenalina — o hormônio de "luta ou fuga" — e, embora muito desconfortável,
        geralmente não representa risco cardíaco.
      </p>

      <h2 style={{ marginTop: '32px' }}>Por que o coração acelera na ansiedade?</h2>
      <p>Quando o cérebro percebe uma ameaça (real ou imaginária), o sistema nervoso simpático é ativado. A adrenalina é liberada na corrente sanguínea, fazendo o coração bater mais rápido e com mais força para preparar o corpo para reagir.</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>A frequência cardíaca pode subir de 60-80 bpm para 120-180 bpm</li>
        <li>A pessoa sente "batidas no peito" ou "coração saltando"</li>
        <li>Pode haver arritmia sinusal (variação no ritmo), que é benigna</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Taquicardia por ansiedade vs. problema cardíaco</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
          <h3 style={{ fontSize: '15px', marginBottom: '8px', color: 'var(--primary)' }}>Ansiedade</h3>
          <ul style={{ paddingLeft: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <li>Associada a medo/estresse</li>
            <li>Melhora com respiração</li>
            <li>Acompanhada de hiperventilação</li>
            <li>Passa em minutos</li>
          </ul>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
          <h3 style={{ fontSize: '15px', marginBottom: '8px', color: '#ef4444' }}>Cardíaco</h3>
          <ul style={{ paddingLeft: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <li>Pode ocorrer em repouso</li>
            <li>Dor irradiada para braço/mandíbula</li>
            <li>Piora com esforço físico</li>
            <li>Histórico familiar cardíaco</li>
          </ul>
        </div>
      </div>

      <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Sempre consulte um cardiologista para descartar causas cardíacas antes de atribuir a taquicardia à ansiedade.</p>
      </div>

      <h2 style={{ marginTop: '32px' }}>Como aliviar a taquicardia por ansiedade</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Respiração 4-7-8:</strong> Inspire por 4s, segure por 7s, expire por 8s</li>
        <li><strong>Manobra vagal:</strong> Coloque água gelada no rosto ou assopre com a boca fechada</li>
        <li><strong>Grounding:</strong> Foque em sensações físicas do momento (pés no chão, mãos na mesa)</li>
        <li><strong>Evite cafeína</strong> e estimulantes em períodos de maior ansiedade</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Taquicardia por ansiedade é perigosa?</h3>
          <p>Na maioria dos casos, não. A taquicardia sinusal causada pela ansiedade é desconfortável mas não oferece risco cardíaco em pessoas saudáveis.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>A ansiedade pode causar arritmia?</h3>
          <p>Pode causar extrassístoles (batimentos extras) que são geralmente benignas, mas devem ser avaliadas por um cardiologista.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/ansiedade-sintomas-fisicos" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade: sintomas físicos</Link>
          <Link href="/falta-de-ar-e-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Falta de ar e ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Coração acelerado agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te guiar em exercícios de respiração para ajudar a acalmar o corpo.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Consulte um cardiologista para sintomas persistentes.</p>
    </main>
  )
}
