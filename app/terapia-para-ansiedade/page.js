import Link from "next/link"

export const metadata = {
  title: "Terapia para Ansiedade: tipos de terapia e qual escolher",
  description: "Conheça as terapias mais eficazes para ansiedade: TCC, ACT, EMDR, psicodinâmica. Saiba qual abordagem é indicada para cada caso.",
  keywords: ["terapia para ansiedade", "psicoterapia ansiedade", "TCC ansiedade", "terapia cognitivo comportamental ansiedade"],
  openGraph: { title: "Terapia para Ansiedade", description: "Tipos de terapia e qual escolher para ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Terapia para Ansiedade: Qual Escolher?</h1>

      <p>A psicoterapia é considerada primeira linha no tratamento da ansiedade. Existem diversas abordagens, cada uma com foco e metodologia distintos. A escolha depende do tipo de ansiedade, da personalidade e das preferências do paciente.</p>

      <h2 style={{ marginTop: '32px' }}>Terapia Cognitivo-Comportamental (TCC)</h2>
      <p>A TCC é a abordagem com maior evidência para transtornos de ansiedade. Foca em identificar e reestruturar pensamentos distorcidos que alimentam a ansiedade, além de utilizar técnicas de exposição gradual para reduzir a evitação.</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Indicada para: TAG, pânico, fobia social, fobias específicas</li>
        <li>Duração típica: 12-20 sessões</li>
        <li>Formato: estruturado, com "lição de casa"</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Terapia de Aceitação e Compromisso (ACT)</h2>
      <p>Em vez de eliminar pensamentos ansiosos, a ACT ensina a aceitá-los sem reagir. O foco está em agir de acordo com valores pessoais, mesmo na presença da ansiedade.</p>

      <h2 style={{ marginTop: '32px' }}>Terapia Psicodinâmica</h2>
      <p>Explora conflitos inconscientes e padrões emocionais que alimentam a ansiedade. É uma abordagem mais profunda e de longo prazo, indicada quando a ansiedade está ligada a questões de personalidade ou trauma.</p>

      <h2 style={{ marginTop: '32px' }}>EMDR</h2>
      <p>Originalmente para TEPT, o EMDR tem mostrado eficácia para ansiedade relacionada a traumas e memórias emocionais perturbadoras.</p>

      <h2 style={{ marginTop: '32px' }}>Como escolher?</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Para resultados rápidos e estruturados → TCC</li>
        <li>Para autoconhecimento profundo → Psicodinâmica</li>
        <li>Para aceitar a ansiedade sem se paralisar → ACT</li>
        <li>Para ansiedade ligada a trauma → EMDR</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Terapia online funciona para ansiedade?</h3>
          <p>Sim. Estudos mostram que TCC online tem eficácia equivalente à presencial para a maioria dos transtornos de ansiedade.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/tratamento-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Tratamento para ansiedade</Link>
          <Link href="/como-controlar-a-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Como controlar a ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer começar a se entender melhor?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar a organizar pensamentos e praticar técnicas de TCC.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure um psicólogo ou psiquiatra.</p>
    </main>
  )
}
