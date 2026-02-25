import Link from "next/link"

export const metadata = {
  title: "Sensação de Morte Iminente: por que ansiedade causa esse medo",
  description: "Entenda a sensação de morte iminente na ansiedade: por que acontece, o que o corpo faz e como lidar com esse sintoma aterrorizante.",
  keywords: ["sensação de morte iminente", "medo de morrer ansiedade", "sensação de morte", "ansiedade morte iminente"],
  openGraph: { title: "Sensação de Morte Iminente", description: "Por que a ansiedade causa sensação de morte iminente." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Sensação de Morte Iminente e Ansiedade</h1>

      <p>A sensação de que você vai morrer — agora, neste momento — é um dos sintomas mais aterrorizantes da ansiedade. É tão real e avassaladora que faz milhares de pessoas irem ao pronto-socorro todos os dias acreditando estar tendo um infarto.</p>

      <h2 style={{ marginTop: '32px' }}>Por que isso acontece?</h2>
      <p>A amígdala cerebral (centro do medo) envia sinais de emergência ao corpo. A liberação maciça de adrenalina causa taquicardia, falta de ar e dor no peito. O cérebro interpreta esses sinais como evidência de morte, criando um loop: medo → sintomas → mais medo.</p>

      <h2 style={{ marginTop: '32px' }}>O que a ciência diz</h2>
      <p>A sensação de morte iminente é um sintoma reconhecido nos critérios diagnósticos do DSM-5 para ataques de pânico. É uma consequência fisiológica, não uma previsão. Seu corpo está em modo de sobrevivência, não em perigo real.</p>

      <h2 style={{ marginTop: '32px' }}>Como atravessar o momento</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Lembre-se:</strong> "Isso é adrenalina. Não vou morrer. Isso já aconteceu antes e passou."</li>
        <li><strong>Respire:</strong> Inspirar 4s, segurar 4s, expirar 6s</li>
        <li><strong>Ancore-se:</strong> Olhe ao redor, nomeie o que vê</li>
        <li><strong>Não lute:</strong> Observe o medo sem resistir — a resistência amplifica</li>
        <li><strong>Tempo:</strong> O pico máximo dura de 5 a 15 minutos</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Posso realmente morrer de medo?</h3>
          <p>É extremamente raro e ocorreria apenas em pessoas com condições cardíacas pré-existentes graves. A crise de ansiedade em si não mata. Mas sempre descarte causas cardíacas com um médico.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/crise-de-ansiedade-pode-matar" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Crise de ansiedade pode matar?</Link>
          <Link href="/ansiedade-e-medo-constante" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade e medo constante</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Está com medo agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te guiar por exercícios de respiração e oferecer acolhimento.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Em caso de risco real, ligue 188 (CVV) ou 192 (SAMU).</p>
    </main>
  )
}
