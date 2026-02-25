import Link from "next/link"

export const metadata = {
  title: "Ansiedade Sintomas Físicos: taquicardia, falta de ar, tremor e mais",
  description: "Conheça os principais sintomas físicos da ansiedade: taquicardia, falta de ar, tontura, tremores, formigamento e dor no peito.",
  keywords: ["ansiedade sintomas fisicos", "sintomas fisicos da ansiedade", "ansiedade e sintomas no corpo", "ansiedade taquicardia"],
  openGraph: { title: "Ansiedade: Sintomas Físicos", description: "Os principais sintomas físicos causados pela ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade: Sintomas Físicos Detalhados</h1>

      <p>
        Os sintomas físicos da ansiedade são causados pela ativação do sistema nervoso simpático — a resposta de
        "luta ou fuga" do organismo. Quando o cérebro interpreta algo como ameaça (mesmo sem perigo real),
        o corpo se prepara para reagir, gerando desconfortos reais e intensos.
      </p>

      <h2 style={{ marginTop: '32px' }}>1. Taquicardia e palpitações</h2>
      <p>O coração acelera para enviar mais sangue aos músculos. A pessoa pode sentir o coração "pulando", batendo fora do ritmo ou extremamente rápido. Embora assustador, geralmente é benigno na ansiedade.</p>

      <h2 style={{ marginTop: '32px' }}>2. Falta de ar e hiperventilação</h2>
      <p>A respiração se torna rápida e superficial. Isso reduz o CO₂ no sangue, causando tontura, formigamento e sensação de desmaio. A respiração diafragmática é a técnica mais eficaz para reverter esse quadro.</p>

      <h2 style={{ marginTop: '32px' }}>3. Tremores e espasmos</h2>
      <p>O excesso de adrenalina causa tremores nas mãos, pernas e corpo inteiro. Espasmos musculares involuntários também são comuns, especialmente nos olhos e na região do pescoço.</p>

      <h2 style={{ marginTop: '32px' }}>4. Tontura e vertigem</h2>
      <p>A hiperventilação e a tensão nos músculos do pescoço podem alterar o fluxo sanguíneo cerebral, causando tontura, sensação de "cabeça leve" ou instabilidade ao caminhar.</p>

      <h2 style={{ marginTop: '32px' }}>5. Dor no peito e aperto torácico</h2>
      <p>A tensão nos músculos intercostais e a hiperventilação podem gerar dor ou pressão no peito. Muitas pessoas confundem com infarto. <strong>Sempre busque avaliação médica para descartar causas cardíacas.</strong></p>

      <h2 style={{ marginTop: '32px' }}>6. Formigamento e dormência</h2>
      <p>O formigamento nas mãos, pés, rosto e couro cabeludo é causado pela alcalose respiratória (redução de CO₂). Normaliza-se quando a respiração é corrigida.</p>

      <h2 style={{ marginTop: '32px' }}>7. Sudorese e calafrios</h2>
      <p>O corpo alterna entre ondas de calor e frio à medida que o sistema autonômico se desregula. Suor nas mãos e axilas é especialmente comum.</p>

      <h2 style={{ marginTop: '32px' }}>8. Problemas digestivos</h2>
      <p>Náusea, diarreia, "embrulho" no estômago e perda de apetite são frequentes. O eixo intestino-cérebro é profundamente afetado pelo estresse crônico.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Esses sintomas são perigosos?</h3>
          <p>Na maioria dos casos, os sintomas físicos da ansiedade não representam risco vital. Porém, sempre consulte um médico para descartar outras condições.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>É possível eliminar os sintomas físicos?</h3>
          <p>Com tratamento adequado (terapia, técnicas de relaxamento e, se necessário, medicação), os sintomas tendem a diminuir significativamente.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/sintomas-de-ansiedade-no-corpo" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Sintomas de ansiedade no corpo</Link>
          <Link href="/falta-de-ar-e-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Falta de ar e ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Reconheceu algum desses sintomas?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para entender melhor e aprender técnicas de alívio.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação médica para sintomas persistentes.</p>
    </main>
  )
}
