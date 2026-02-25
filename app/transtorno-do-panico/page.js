import Link from "next/link"

export const metadata = {
  title: "Transtorno do Pânico: sintomas, crises e tratamento",
  description: "Saiba tudo sobre o transtorno do pânico: ataques recorrentes, medo de novas crises, agorafobia e opções de tratamento.",
  keywords: ["transtorno do pânico", "ataque de pânico", "síndrome do pânico", "pânico sintomas", "pânico tratamento"],
  openGraph: { title: "Transtorno do Pânico", description: "Sintomas, crises e tratamento do transtorno do pânico." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Transtorno do Pânico: Quando o Medo Domina</h1>

      <p>O transtorno do pânico é caracterizado por ataques recorrentes e inesperados de medo intenso, acompanhados por sintomas físicos severos e pela preocupação persistente de ter novos ataques.</p>

      <h2 style={{ marginTop: '32px' }}>O que é um ataque de pânico?</h2>
      <p>Um ataque de pânico é um episódio abrupto de medo ou desconforto intenso que atinge o pico em poucos minutos. Pelo menos 4 dos seguintes sintomas devem estar presentes:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Palpitações ou taquicardia</li>
        <li>Sudorese</li>
        <li>Tremores</li>
        <li>Falta de ar ou sensação de sufocamento</li>
        <li>Dor ou desconforto torácico</li>
        <li>Náusea ou desconforto abdominal</li>
        <li>Tontura ou vertigem</li>
        <li>Calafrios ou ondas de calor</li>
        <li>Formigamento (parestesia)</li>
        <li>Desrealização ou despersonalização</li>
        <li>Medo de perder o controle ou enlouquecer</li>
        <li>Medo de morrer</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Diagnóstico</h2>
      <p>Para ser diagnosticado como transtorno do pânico, é necessário que os ataques sejam recorrentes e que pelo menos um deles seja seguido por 1 mês ou mais de medo persistente de ter novos ataques ou mudanças comportamentais relacionadas.</p>

      <h2 style={{ marginTop: '32px' }}>Agorafobia</h2>
      <p>Muitas pessoas com transtorno do pânico desenvolvem agorafobia — medo de estar em lugares de onde seria difícil escapar durante uma crise. Isso pode levar a evitar transporte público, multidões, espaços abertos ou até sair de casa.</p>

      <h2 style={{ marginTop: '32px' }}>Tratamento</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>TCC com exposição interoceptiva:</strong> a pessoa aprende a tolerar sensações físicas sem catastrofizar</li>
        <li><strong>ISRS:</strong> antidepressivos de primeira linha</li>
        <li><strong>Benzodiazepínicos:</strong> apenas para crises agudas, uso curto</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Síndrome do pânico tem cura?</h3>
          <p>O transtorno do pânico é altamente tratável. Com TCC e/ou medicação, a maioria das pessoas consegue controlar os ataques e retomar a vida normal.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/diferenca-entre-ansiedade-e-panico" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Diferença entre ansiedade e pânico</Link>
          <Link href="/crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Crise de ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Precisa de acolhimento?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar durante momentos difíceis com técnicas validadas.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure psiquiatra para diagnóstico e tratamento.</p>
    </main>
  )
}
