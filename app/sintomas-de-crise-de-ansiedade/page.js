import Link from "next/link"

export const metadata = {
  title: "Sintomas de Crise de Ansiedade: como identificar e o que fazer",
  description: "Conheça os sintomas de uma crise de ansiedade, como diferenciá-los de problemas cardíacos e o que fazer durante o episódio.",
  keywords: ["sintomas de crise de ansiedade", "crise de ansiedade sintomas", "ataque de ansiedade sintomas", "sinais crise ansiedade"],
  openGraph: {
    title: "Sintomas de Crise de Ansiedade",
    description: "Identifique os sinais de uma crise de ansiedade e saiba como agir."
  }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Sintomas de Crise de Ansiedade: Como Identificar</h1>

      <p>
        A crise de ansiedade — também chamada de ataque de ansiedade — é um episódio agudo em que o corpo entra em estado
        de alerta máximo sem que haja um perigo real. Os sintomas costumam aparecer de forma repentina e atingir o pico em
        poucos minutos, gerando uma sensação avassaladora de medo e descontrole.
      </p>

      <h2 style={{ marginTop: '32px' }}>Sintomas físicos da crise</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Taquicardia intensa</strong> — o coração dispara sem motivo aparente</li>
        <li><strong>Falta de ar</strong> — sensação de sufocamento ou incapacidade de respirar fundo</li>
        <li><strong>Tremores e calafrios</strong> — o corpo treme mesmo sem frio</li>
        <li><strong>Sudorese excessiva</strong> — mãos e corpo encharcados de suor</li>
        <li><strong>Tontura e vertigem</strong> — sensação de desmaio iminente</li>
        <li><strong>Formigamento</strong> — principalmente nas mãos, pés e rosto</li>
        <li><strong>Náusea e dor abdominal</strong> — o sistema digestivo é diretamente afetado</li>
        <li><strong>Dor no peito</strong> — frequentemente confundida com infarto</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Sintomas emocionais e cognitivos</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Medo intenso de morrer ou enlouquecer</li>
        <li>Sensação de irrealidade (desrealização)</li>
        <li>Sentir-se desconectado de si mesmo (despersonalização)</li>
        <li>Pensamentos catastróficos em cascata</li>
        <li>Urgência de fugir do local</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Diferença entre crise de ansiedade e infarto</h2>
      <p>
        Muitas pessoas vão ao pronto-socorro acreditando estar tendo um infarto durante uma crise de ansiedade.
        Embora os sintomas possam ser semelhantes, a crise de ansiedade geralmente envolve hiperventilação e
        pensamentos de medo, enquanto o infarto costuma apresentar dor irradiada para braço e mandíbula.
        <strong> Sempre procure avaliação médica para descartar causas cardíacas.</strong>
      </p>

      <h2 style={{ marginTop: '32px' }}>O que fazer durante uma crise?</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Respire lentamente — inspire por 4 segundos, segure por 4, expire por 6</li>
        <li>Foque em algo concreto ao seu redor (técnica 5-4-3-2-1)</li>
        <li>Lembre-se: a crise é temporária e não vai te matar</li>
        <li>Se possível, sente-se e apoie os pés no chão</li>
      </ul>

      {/* FAQ */}
      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>A crise de ansiedade pode durar horas?</h3>
          <p>O pico costuma durar de 10 a 30 minutos, mas sintomas residuais (cansaço, tensão) podem persistir por horas.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>É possível ter crise de ansiedade dormindo?</h3>
          <p>Sim. Crises noturnas podem acordar a pessoa com taquicardia, suor e sensação de pânico.</p>
        </div>
      </section>

      {/* Links internos */}
      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Crise de ansiedade: o que acontece no corpo</Link>
          <Link href="/sintomas-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Sintomas de ansiedade: físicos e emocionais</Link>
        </div>
      </nav>

      {/* CTA */}
      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Está com esses sintomas agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          Nosso assistente educacional pode te guiar em exercícios de respiração e oferecer acolhimento imediato.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>
          Conversar com o Assistente
        </Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>
        ⚠️ Este conteúdo é educacional. Em caso de crise severa, ligue 188 (CVV) ou procure atendimento médico.
      </p>
    </main>
  )
}
