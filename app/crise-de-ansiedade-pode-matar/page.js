import Link from "next/link"

export const metadata = {
  title: "Crise de Ansiedade Pode Matar? A verdade sobre o risco",
  description: "Crise de ansiedade pode matar? Entenda a verdade médica sobre o risco das crises, o que acontece no corpo e quando se preocupar.",
  keywords: ["crise de ansiedade pode matar", "ansiedade mata", "crise ansiedade perigosa", "ataque ansiedade risco"],
  openGraph: { title: "Crise de Ansiedade Pode Matar?", description: "A verdade médica sobre o risco de morte por crise de ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Crise de Ansiedade Pode Matar?</h1>

      <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>✅ Resposta direta: Não. Uma crise de ansiedade, por si só, não é capaz de causar morte. Embora os sintomas sejam aterrorizantes, eles são temporários e não representam risco vital.</p>
      </div>

      <p>Este é um dos maiores medos de quem vive com ansiedade: "E se eu morrer durante uma crise?". Essa pergunta é extremamente comum nos consultórios psiquiátricos e nos pronto-socorros. Vamos desmistificá-la com base em evidências médicas.</p>

      <h2 style={{ marginTop: '32px' }}>O que acontece no corpo durante a crise?</h2>
      <p>A crise de ansiedade ativa o sistema nervoso simpático, liberando adrenalina e cortisol. Isso causa:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Taquicardia — o coração acelera, mas mantém o ritmo</li>
        <li>Hiperventilação — respira mais, mas há oxigênio de sobra</li>
        <li>Tensão muscular — desconfortável, mas inofensiva</li>
        <li>Sensação de morte iminente — um sintoma do pânico, não uma realidade</li>
      </ul>
      <p>Todos esses sintomas são mecanismos de proteção. O corpo está se preparando para reagir a uma ameaça que, na verdade, não existe.</p>

      <h2 style={{ marginTop: '32px' }}>Por que sentimos que vamos morrer?</h2>
      <p>A amígdala cerebral — centro do medo — envia um falso alarme. O cérebro interpreta os sintomas físicos como evidência de perigo real, criando um ciclo: medo → sintomas → mais medo → mais sintomas. Esse loop se desfaz naturalmente quando a adrenalina é metabolizada (15-30 minutos).</p>

      <h2 style={{ marginTop: '32px' }}>Quando é preciso atenção médica?</h2>
      <p>Embora a crise de ansiedade em si não mate, é importante buscar avaliação médica para:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Descartar problemas cardíacos (especialmente na primeira crise)</li>
        <li>Avaliar se há outra condição médica subjacente</li>
        <li>Receber orientação sobre tratamento adequado</li>
        <li>Prevenir o desenvolvimento de transtorno do pânico</li>
      </ul>

      <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Atenção: Se houver pensamentos suicidas, autolesão ou ideação de causar dano a si ou a outros, ligue imediatamente para o CVV (188) ou vá ao pronto-socorro. Isso não é uma crise de ansiedade comum.</p>
      </div>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Posso desmaiar durante uma crise?</h3>
          <p>É muito raro. A taquicardia e a pressão elevada durante a crise dificultam o desmaio. A sensação de que "vai desmaiar" é causada pela hiperventilação e geralmente não se concretiza.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>Ansiedade crônica pode afetar a saúde a longo prazo?</h3>
          <p>Sim. Embora crises isoladas não sejam perigosas, a ansiedade crônica não tratada pode contribuir para hipertensão, problemas cardíacos e metabólicos ao longo dos anos. O tratamento é essencial.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Crise de ansiedade: o que acontece no corpo</Link>
          <Link href="/sensacao-de-morte-iminente" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Sensação de morte iminente</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Está com medo agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para receber acolhimento e orientação educacional.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Em caso de risco imediato ou ideação suicida, ligue 188 (CVV).</p>
    </main>
  )
}
