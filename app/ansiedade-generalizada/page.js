import Link from "next/link"

export const metadata = {
  title: "Ansiedade Generalizada: o que é, sintomas e como tratar",
  description: "Saiba o que é ansiedade generalizada, seus sintomas, causas e tratamentos. Entenda a diferença entre preocupação normal e TAG.",
  keywords: ["ansiedade generalizada", "o que é ansiedade generalizada", "ansiedade generalizada sintomas", "tag ansiedade"],
  openGraph: { title: "Ansiedade Generalizada", description: "Tudo sobre ansiedade generalizada: sintomas, causas e tratamento." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade Generalizada: O Que É e Como Tratar</h1>

      <p>A ansiedade generalizada é uma condição em que a pessoa experimenta preocupação excessiva e persistente sobre diversos aspectos da vida — trabalho, saúde, família, dinheiro — de forma desproporcional às circunstâncias reais. Quando esse padrão persiste por mais de 6 meses e interfere na rotina, pode ser diagnosticado como Transtorno de Ansiedade Generalizada (TAG).</p>

      <h2 style={{ marginTop: '32px' }}>Diferença entre preocupação e TAG</h2>
      <p>Todos nos preocupamos. A diferença é que na ansiedade generalizada, a preocupação é incontrolável, migra de um tema para outro sem pausa, e vem acompanhada de sintomas físicos como tensão muscular, insônia e fadiga.</p>

      <h2 style={{ marginTop: '32px' }}>Sintomas mais comuns</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Preocupação excessiva e difícil de controlar</li>
        <li>Inquietação ou sensação de "nervos à flor da pele"</li>
        <li>Fadiga fácil, mesmo sem esforço</li>
        <li>Dificuldade de concentração ou "mente em branco"</li>
        <li>Irritabilidade</li>
        <li>Tensão muscular persistente (pescoço, ombros, mandíbula)</li>
        <li>Alterações do sono (insônia ou sono não reparador)</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Causas e fatores de risco</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Predisposição genética</li>
        <li>Experiências traumáticas na infância</li>
        <li>Estresse crônico (trabalho, relações, finanças)</li>
        <li>Desequilíbrio de serotonina e GABA no cérebro</li>
        <li>Personalidade perfeccionista ou com forte necessidade de controle</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Tratamento</h2>
      <p>O tratamento mais eficaz combina terapia e, quando necessário, medicação:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Terapia Cognitivo-Comportamental (TCC):</strong> considerada padrão-ouro para TAG</li>
        <li><strong>ISRS (antidepressivos):</strong> primeira linha farmacológica</li>
        <li><strong>Exercício físico:</strong> evidência forte na redução da ansiedade</li>
        <li><strong>Mindfulness e meditação:</strong> ajudam a interromper ruminação</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Ansiedade generalizada tem cura?</h3>
          <p>O TAG é crônico mas altamente tratável. Com acompanhamento adequado, a maioria das pessoas alcança melhora significativa e mantém qualidade de vida.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/transtorno-de-ansiedade-generalizada" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ TAG: critérios e tratamento</Link>
          <Link href="/tratamento-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Tratamento para ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Precisa de acolhimento?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar a organizar pensamentos e oferecer técnicas de relaxamento.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação psiquiátrica para diagnóstico.</p>
    </main>
  )
}
