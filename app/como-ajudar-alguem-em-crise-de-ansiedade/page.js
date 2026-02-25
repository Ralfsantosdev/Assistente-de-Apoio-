import Link from "next/link"

export const metadata = {
  title: "Como Ajudar Alguém em Crise de Ansiedade: guia para acompanhantes",
  description: "Aprenda como ajudar alguém durante uma crise de ansiedade: o que dizer, o que evitar e técnicas de apoio prático.",
  keywords: ["como ajudar crise de ansiedade", "ajudar pessoa ansiedade", "crise ansiedade como ajudar", "apoio crise ansiedade"],
  openGraph: { title: "Como Ajudar Alguém em Crise de Ansiedade", description: "Guia prático para acompanhantes durante crises de ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Como Ajudar Alguém em Crise de Ansiedade</h1>

      <p>Ver alguém que você ama em crise de ansiedade pode ser assustador. Mas sua presença calma e acolhedora pode fazer toda a diferença. Este guia ensina o que fazer e o que evitar.</p>

      <h2 style={{ marginTop: '32px' }}>O que fazer</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Mantenha a calma:</strong> Sua tranquilidade transmite segurança. Fale devagar e em tom baixo.</li>
        <li><strong>Valide os sentimentos:</strong> Diga "Eu estou aqui com você. Isso vai passar." Não minimize o que a pessoa sente.</li>
        <li><strong>Guie a respiração:</strong> Respire junto com a pessoa. "Vamos respirar juntos: inspira... segura... solta..."</li>
        <li><strong>Ofereça grounding:</strong> "Olha pra mim. Me diz 5 coisas que você está vendo agora."</li>
        <li><strong>Pergunte antes de tocar:</strong> Algumas pessoas se sentem melhor com um abraço, outras precisam de espaço.</li>
        <li><strong>Fique presente:</strong> Não saia correndo buscar coisas. Sua presença física é o mais importante.</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>O que NÃO fazer</h2>
      <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 'var(--radius-md)', padding: '20px', marginBottom: '24px' }}>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>❌ "Calma, não é nada" — invalida o sofrimento</li>
          <li>❌ "Para de frescura" — gera vergonha e piora a crise</li>
          <li>❌ "Respira fundo" (sem demonstrar) — pode confundir</li>
          <li>❌ Sacudir a pessoa ou gritar com ela</li>
          <li>❌ Forçar a pessoa a se levantar ou sair andando</li>
          <li>❌ Deixar a pessoa sozinha sem avisar</li>
        </ul>
      </div>

      <h2 style={{ marginTop: '32px' }}>Frases que ajudam</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>"Eu estou aqui com você. Não vou sair."</li>
        <li>"Isso é uma crise de ansiedade. Vai passar."</li>
        <li>"Vamos respirar juntos, devagar."</li>
        <li>"Você está seguro/segura."</li>
        <li>"Não precisa explicar nada agora."</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Depois da crise</h2>
      <p>Após a crise, ofereça água, um ambiente calmo e não force conversas sobre o episódio. Nos dias seguintes, pergunte como a pessoa está e sugira, com carinho, a busca por ajuda profissional.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Devo levar a pessoa ao hospital?</h3>
          <p>Se for a primeira crise or se os sintomas não melhorarem em 30 minutos, sim. Também vá ao hospital se houver desmaio, dor intensa no peito ou pensamentos suicidas.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>Uma crise de ansiedade pode ser contagiosa?</h3>
          <p>Não literalmente, mas ver alguém em crise pode ativar ansiedade em quem já tem predisposição. Cuide de você também.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/o-que-fazer-em-uma-crise-de-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ O que fazer em uma crise de ansiedade</Link>
          <Link href="/crise-de-ansiedade-pode-matar" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Crise de ansiedade pode matar?</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer conversar sobre isso?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode orientar sobre técnicas de apoio e autocuidado para cuidadores.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Em caso de risco imediato, ligue 188 (CVV) ou 192 (SAMU).</p>
    </main>
  )
}
