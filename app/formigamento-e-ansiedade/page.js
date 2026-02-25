import Link from "next/link"

export const metadata = {
  title: "Formigamento e Ansiedade: causas, sintomas e como aliviar",
  description: "Entenda por que a ansiedade causa formigamento nas mãos, pés e rosto. Saiba a causa fisiológica e como aliviar o sintoma.",
  keywords: ["formigamento e ansiedade", "ansiedade formigamento", "formigamento nas mãos ansiedade", "parestesia ansiedade"],
  openGraph: { title: "Formigamento e Ansiedade", description: "Por que a ansiedade causa formigamento e como aliviar." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Formigamento e Ansiedade: Por Que Acontece</h1>

      <p>
        Sentir formigamento nas mãos, pés, rosto ou couro cabeludo durante momentos de ansiedade é extremamente comum.
        Esse sintoma, chamado parestesia, é causado por alterações fisiológicas que ocorrem quando o corpo entra em
        estado de alerta.
      </p>

      <h2 style={{ marginTop: '32px' }}>Causa fisiológica do formigamento</h2>
      <p>
        A hiperventilação (respiração rápida e superficial) reduz os níveis de dióxido de carbono (CO₂) no sangue,
        provocando alcalose respiratória. Essa mudança no pH sanguíneo afeta o cálcio disponível para os nervos,
        gerando as sensações de formigamento, dormência e "agulhadas".
      </p>

      <h2 style={{ marginTop: '32px' }}>Onde o formigamento aparece com mais frequência</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Mãos e dedos</strong> — o local mais comum</li>
        <li><strong>Pés</strong> — especialmente as pontas dos dedos</li>
        <li><strong>Rosto e lábios</strong> — ao redor da boca</li>
        <li><strong>Couro cabeludo</strong> — sensação de "pressão" na cabeça</li>
        <li><strong>Braços e pernas</strong> — sensação de fraqueza associada</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Outras causas que a ansiedade agrava</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Tensão muscular comprimindo nervos (especialmente no pescoço e ombros)</li>
        <li>Vasoconstrição periférica (redução do fluxo sanguíneo nas extremidades)</li>
        <li>Hiperativação do sistema nervoso simpático</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Como aliviar o formigamento</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Corrija a respiração (respiração lenta e diafragmática)</li>
        <li>Movimente os dedos e as mãos para estimular a circulação</li>
        <li>Beba água — a desidratação pode agravar o sintoma</li>
        <li>Faça alongamentos suaves no pescoço e ombros</li>
        <li>Use a técnica de grounding para desviar o foco</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Formigamento por ansiedade é perigoso?</h3>
          <p>O formigamento causado por ansiedade não é perigoso e passa quando a respiração normaliza. Porém, se for persistente ou unilateral, procure avaliação médica para descartar causas neurológicas.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>O formigamento pode ser sinal de AVC?</h3>
          <p>O formigamento do AVC costuma ser unilateral (apenas um lado do corpo), súbito e acompanhado de fraqueza, dificuldade de fala ou visão. Na ansiedade, tende a ser bilateral e associado a hiperventilação.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/falta-de-ar-e-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Falta de ar e ansiedade</Link>
          <Link href="/sintomas-de-ansiedade-no-corpo" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Sintomas de ansiedade no corpo</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Precisa de ajuda agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para aprender técnicas de respiração e relaxamento.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Consulte um neurologista para formigamento persistente ou unilateral.</p>
    </main>
  )
}
