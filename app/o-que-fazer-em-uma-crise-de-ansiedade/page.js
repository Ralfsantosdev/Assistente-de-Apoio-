import Link from "next/link"

export const metadata = {
  title: "O Que Fazer em Uma Crise de Ansiedade: guia prático passo a passo",
  description: "Aprenda o que fazer durante uma crise de ansiedade: técnicas de respiração, grounding, manobras vagais e quando buscar ajuda.",
  keywords: ["o que fazer crise de ansiedade", "como parar crise ansiedade", "crise ansiedade o que fazer", "técnicas crise ansiedade"],
  openGraph: { title: "O Que Fazer em Uma Crise de Ansiedade", description: "Guia prático para atravessar uma crise de ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>O Que Fazer em Uma Crise de Ansiedade: Guia Prático</h1>

      <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--primary)', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>🫁 Se você está em crise agora: respire devagar. Inspire por 4 segundos, segure 4, expire por 6. Você está seguro.</p>
      </div>

      <p>Quando uma crise de ansiedade chega, a sensação de perda de controle é avassaladora. Mas existem estratégias baseadas em evidências que podem encurtar a crise e reduzir significativamente o sofrimento.</p>

      <h2 style={{ marginTop: '32px' }}>Passo 1: Reconheça a crise</h2>
      <p>Diga para si mesmo: "Isso é uma crise de ansiedade. Não é um infarto. Não vou morrer. Isso vai passar." O simples reconhecimento reduz a cascata de pensamentos catastróficos.</p>

      <h2 style={{ marginTop: '32px' }}>Passo 2: Corrija a respiração</h2>
      <p>A hiperventilação é o motor da crise. Corrigi-la é a ação mais eficaz:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Respiração 4-4-6:</strong> Inspire 4s pelo nariz → Segure 4s → Expire 6s pela boca</li>
        <li><strong>Respiração com lábios cerrados:</strong> Expire como se estivesse apagando uma vela</li>
        <li>Coloque a mão na barriga — ela deve subir na inspiração</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Passo 3: Técnica de grounding 5-4-3-2-1</h2>
      <p>Ancorie-se no presente identificando:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>5</strong> coisas que você pode VER</li>
        <li><strong>4</strong> coisas que pode TOCAR</li>
        <li><strong>3</strong> coisas que pode OUVIR</li>
        <li><strong>2</strong> coisas que pode CHEIRAR</li>
        <li><strong>1</strong> coisa que pode SABOREAR</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Passo 4: Manobra vagal</h2>
      <p>Estimular o nervo vago ativa o sistema parassimpático (modo "descansar"):</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Coloque água gelada no rosto ou segure gelo nas mãos</li>
        <li>Assopre com a boca fechada (como se tentasse estalar os ouvidos)</li>
        <li>Massageie suavemente o pescoço, atrás das orelhas</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Passo 5: Não lute contra a crise</h2>
      <p>Resistir aos sintomas aumenta a adrenalina. Em vez disso, observe os sintomas com curiosidade: "meu coração está acelerado, isso é a adrenalina, vai passar". A aceitação paradoxalmente reduz a intensidade.</p>

      <h2 style={{ marginTop: '32px' }}>Quando buscar ajuda médica</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Se os sintomas não melhorarem após 30 minutos</li>
        <li>Se houver dor intensa no peito irradiando para braço</li>
        <li>Se houver perda de consciência</li>
        <li>Se houver pensamentos de autolesão</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Devo ir ao pronto-socorro durante uma crise?</h3>
          <p>Se for sua primeira crise ou se os sintomas forem incomuns, sim. É importante descartar causas cardíacas e receber orientação adequada.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Crise de ansiedade: o que acontece no corpo</Link>
          <Link href="/como-ajudar-alguem-em-crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Como ajudar alguém em crise</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Precisa de apoio agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te guiar por exercícios de respiração e relaxamento em tempo real.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Em caso de risco imediato, ligue 188 (CVV) ou 192 (SAMU).</p>
    </main>
  )
}
