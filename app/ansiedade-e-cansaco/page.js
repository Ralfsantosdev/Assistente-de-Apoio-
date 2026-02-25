import Link from "next/link"

export const metadata = {
  title: "Ansiedade e Cansaço: por que a ansiedade esgota o corpo",
  description: "Entenda a relação entre ansiedade e cansaço extremo: por que a fadiga é um dos sintomas mais comuns e como recuperar energia.",
  keywords: ["ansiedade e cansaço", "ansiedade cansaço", "fadiga ansiedade", "cansaço extremo ansiedade", "exaustão mental"],
  openGraph: { title: "Ansiedade e Cansaço", description: "Por que a ansiedade causa cansaço extremo." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade e Cansaço: A Exaustão Invisível</h1>

      <p>Você dorme, mas acorda cansado. Não fez esforço físico, mas sente o corpo esgotado. A fadiga crônica é um dos sintomas mais subestimados da ansiedade — e um dos mais incapacitantes.</p>

      <h2 style={{ marginTop: '32px' }}>Por que a ansiedade causa cansaço?</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Gasto energético mental:</strong> pensar excessivamente consome glicose e oxigênio como exercício físico</li>
        <li><strong>Cortisol crônico:</strong> a exposição prolongada ao cortisol causa fadiga adrenal</li>
        <li><strong>Tensão muscular:</strong> manter os músculos tensos 24h equivale a exercício constante</li>
        <li><strong>Sono não reparador:</strong> mesmo dormindo, o sistema nervoso permanece em alerta</li>
        <li><strong>Hipervigilância:</strong> estar sempre "ligado" drena as reservas de energia</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Diferença entre cansaço normal e fadiga de ansiedade</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
          <h3 style={{ fontSize: '14px', color: '#10b981', marginBottom: '8px' }}>Cansaço Normal</h3>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <li>Tem causa clara (exercício, trabalho)</li>
            <li>Melhora com descanso</li>
            <li>Previsível</li>
          </ul>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
          <h3 style={{ fontSize: '14px', color: '#ef4444', marginBottom: '8px' }}>Fadiga de Ansiedade</h3>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <li>Sem causa aparente</li>
            <li>Não melhora com sono</li>
            <li>Acompanhada de peso emocional</li>
          </ul>
        </div>
      </div>

      <h2 style={{ marginTop: '32px' }}>Como recuperar energia</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Trate a ansiedade na raiz (terapia + tratamento adequado)</li>
        <li>Priorize sono de qualidade (higiene do sono rigorosa)</li>
        <li>Exercício leve (caminhada, yoga — não se sobrecarregue)</li>
        <li>Pausas durante o dia (técnica Pomodoro)</li>
        <li>Hidratação e alimentação regular</li>
        <li>Reduza estimulantes (cafeína) que mascaram a fadiga</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Cansaço por ansiedade pode parecer depressão?</h3>
          <p>Sim. A fadiga é um sintoma compartilhado entre ansiedade e depressão, e as duas condições frequentemente coexistem. A avaliação profissional é importante para diferenciar.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/acordar-com-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Acordar com ansiedade</Link>
          <Link href="/ansiedade-e-problemas-gastricos" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade e problemas gástricos</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Esgotado emocionalmente?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar com técnicas de regulação e descanso mental.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação médica para cansaço persistente.</p>
    </main>
  )
}
