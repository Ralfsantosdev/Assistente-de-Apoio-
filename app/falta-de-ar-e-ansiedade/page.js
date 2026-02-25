import Link from "next/link"

export const metadata = {
  title: "Falta de Ar e Ansiedade: por que acontece e como aliviar",
  description: "Entenda por que a ansiedade causa falta de ar, como diferenciar de problemas pulmonares e técnicas de respiração para alívio.",
  keywords: ["falta de ar e ansiedade", "ansiedade falta de ar", "dispneia ansiedade", "dificuldade respirar ansiedade"],
  openGraph: { title: "Falta de Ar e Ansiedade", description: "Por que a ansiedade dificulta a respiração." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Falta de Ar e Ansiedade: Entenda e Aprenda a Aliviar</h1>

      <p>
        A sensação de não conseguir respirar é um dos sintomas mais aterrorizantes da ansiedade. Muitas pessoas acreditam
        estar tendo um problema pulmonar grave quando, na verdade, a hiperventilação causada pela resposta de estresse
        é a responsável.
      </p>

      <h2 style={{ marginTop: '32px' }}>Por que a ansiedade causa falta de ar?</h2>
      <p>
        Quando a ansiedade é ativada, o corpo aumenta a frequência respiratória para fornecer mais oxigênio aos
        músculos. Paradoxalmente, essa respiração rápida e superficial (hiperventilação) expulsa CO₂ do sangue mais
        rápido do que o necessário, causando alcalose respiratória — que gera tontura, formigamento e a própria
        sensação de "não estar recebendo ar suficiente".
      </p>

      <h2 style={{ marginTop: '32px' }}>Sintomas associados</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Sensação de sufocamento ou "nó na garganta"</li>
        <li>Necessidade de respirar mais fundo constantemente</li>
        <li>Bocejos frequentes (tentativa do corpo de regular O₂/CO₂)</li>
        <li>Tontura e cabeça leve</li>
        <li>Formigamento nos lábios e dedos</li>
        <li>Sensação de "não conseguir encher o pulmão"</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Técnicas de respiração para alívio</h2>
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '12px' }}>🫁 Respiração diafragmática</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Coloque uma mão no peito e outra na barriga</li>
          <li>Inspire pelo nariz por 4 segundos — a barriga deve subir</li>
          <li>Expire pela boca por 6 segundos — a barriga deve descer</li>
          <li>A mão no peito deve se mover o mínimo possível</li>
          <li>Repita por 5-10 ciclos</li>
        </ol>
      </div>
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '12px' }}>🧘 Respiração com lábios cerrados</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Inspire pelo nariz por 2 segundos</li>
          <li>Expire lentamente pela boca com lábios semi-fechados por 4 segundos</li>
          <li>Isso ajuda a reter CO₂ e reverter a hiperventilação</li>
        </ol>
      </div>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>A ansiedade pode causar falta de ar constante?</h3>
          <p>Sim. Pessoas com ansiedade crônica podem sentir dispneia persistente, especialmente em períodos de maior estresse. O tratamento da ansiedade costuma resolver o sintoma.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>Como saber se é falta de ar por ansiedade ou por problema pulmonar?</h3>
          <p>Na ansiedade, a falta de ar costuma piorar em repouso e em momentos de estresse. Já problemas pulmonares tendem a piorar com esforço físico. Um pneumologista pode diferenciar.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/taquicardia-e-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Taquicardia e ansiedade</Link>
          <Link href="/formigamento-e-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Formigamento e ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Sentindo falta de ar agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te guiar em exercícios de respiração para alívio imediato.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação médica para sintomas respiratórios persistentes.</p>
    </main>
  )
}
