import Link from "next/link"

export const metadata = {
  title: "Crise de Ansiedade: sintomas, causas e o que fazer",
  description:
    "Entenda os sintomas de uma crise de ansiedade e como agir em momentos de pico emocional. Orientações práticas para lidar com o pânico."
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.6' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Crise de Ansiedade: O Que Acontece no Corpo</h1>

      <p>
        A crise de ansiedade é um episódio intenso de medo ou desconforto
        que pode surgir de forma repentina, muitas vezes sem um gatilho óbvio.
      </p>

      <h2 style={{ marginTop: '32px' }}>Sintomas de crise de ansiedade</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Batimentos cardíacos muito acelerados</li>
        <li>Sensação de morte iminente ou perda de controle</li>
        <li>Falta de ar ou sensação de sufocamento</li>
        <li>Tontura, náusea ou instabilidade</li>
        <li>Desrealização (sentir que o ambiente não é real)</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>O que fazer durante uma crise?</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Respiração lenta:</strong> Inspire pelo nariz em 4 segundos e solte pela boca em 6.</li>
        <li><strong>Foco no presente:</strong> Identifique 5 coisas que você pode ver e 4 que pode tocar.</li>
        <li><strong>Evite pensamentos catastróficos:</strong> Lembre-se que a crise é passageira e não oferece risco vital imediato.</li>
      </ul>

      <div style={{marginTop:40, padding:32, background:"var(--bg-card)", border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center'}}>
        <h3 style={{ marginBottom: 16 }}>Está passando por isso agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          Nosso assistente educativo pode te guiar em exercícios de respiração e oferecer suporte emocional.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>
          Conversar com o assistente
        </Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '14px', color: 'var(--text-muted)' }}>
        Nota: Se os sintomas persistirem ou forem severos, busque ajuda médica imediatamente ou ligue 188.
      </p>
    </main>
  )
}
