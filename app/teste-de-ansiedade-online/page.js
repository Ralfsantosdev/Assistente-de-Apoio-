import Link from "next/link"

export const metadata = {
  title: "Teste de Ansiedade Online: avalie seus sintomas (rastreio GAD-7)",
  description: "Faça um teste de rastreio de ansiedade baseado na escala GAD-7. Importante: este teste não substitui avaliação profissional.",
  keywords: ["teste de ansiedade online", "teste ansiedade", "gad-7", "escala ansiedade", "questionário ansiedade"],
  openGraph: { title: "Teste de Ansiedade Online", description: "Avalie seus sintomas de ansiedade com a escala GAD-7." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Teste de Ansiedade Online (Rastreio)</h1>

      <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Este é um instrumento de rastreio educacional. NÃO constitui diagnóstico. Procure avaliação profissional.</p>
      </div>

      <p>A escala GAD-7 (Generalized Anxiety Disorder 7-item) é um instrumento validado cientificamente e utilizado mundialmente por profissionais de saúde para rastreio de ansiedade. Abaixo, apresentamos as perguntas para sua autoavaliação.</p>

      <h2 style={{ marginTop: '32px' }}>GAD-7: Nas últimas 2 semanas, com que frequência você foi incomodado(a) por:</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>Para cada item, considere: 0 = Nenhuma vez | 1 = Vários dias | 2 = Mais da metade dos dias | 3 = Quase todos os dias</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {[
          "Sentir-se nervoso(a), ansioso(a) ou no limite",
          "Não ser capaz de impedir ou de controlar as preocupações",
          "Preocupar-se muito com diversas coisas",
          "Dificuldade para relaxar",
          "Ficar tão inquieto(a) que é difícil ficar sentado(a) quieto(a)",
          "Ficar facilmente aborrecido(a) ou irritado(a)",
          "Sentir medo como se algo horrível pudesse acontecer"
        ].map((q, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '16px' }}>
            <p style={{ margin: 0, fontSize: '15px' }}><strong>{i + 1}.</strong> {q}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '32px' }}>Interpretação da pontuação</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ background: '#10b981', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '13px', fontWeight: 600, minWidth: '50px', textAlign: 'center' }}>0-4</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Ansiedade mínima</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ background: '#f59e0b', color: '#000', padding: '4px 12px', borderRadius: '12px', fontSize: '13px', fontWeight: 600, minWidth: '50px', textAlign: 'center' }}>5-9</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Ansiedade leve</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ background: '#f97316', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '13px', fontWeight: 600, minWidth: '50px', textAlign: 'center' }}>10-14</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Ansiedade moderada — considere avaliação profissional</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ background: '#ef4444', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '13px', fontWeight: 600, minWidth: '50px', textAlign: 'center' }}>15-21</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Ansiedade severa — procure ajuda profissional</span>
        </div>
      </div>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Esse teste substitui uma consulta?</h3>
          <p>Não. O GAD-7 é um instrumento de rastreio. O diagnóstico requer avaliação clínica completa por psicólogo ou psiquiatra.</p>
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
        <h3 style={{ marginBottom: 16 }}>Quer conversar sobre seus resultados?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar a entender seus sintomas e preparar uma conversa com um profissional.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Este teste é educacional. Procure avaliação profissional para diagnóstico.</p>
    </main>
  )
}
