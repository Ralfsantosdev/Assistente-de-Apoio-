import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Assistente de Apoio Emocional | Clareza para Quem Já Tentou de Tudo",
  description:
    "Assistente educacional para organizar emoções, reduzir ansiedade e ganhar clareza mental. Sem promessas irreais. Comece gratuitamente.",
  keywords: [
    "apoio emocional",
    "ansiedade",
    "organizar emoções",
    "clareza mental",
    "assistente emocional",
    "saúde mental digital",
  ],
  openGraph: {
    title: "Assistente de Apoio Emocional",
    description:
      "Ferramenta estruturada para quem já tentou de tudo e quer clareza emocional sem promessas vazias.",
    url: "https://assistente-de-apoio.vercel.app",
    siteName: "Assistente de Apoio Emocional",
    type: "website",
  },
};

export default function Home() {
  const sectionStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '80px 24px',
  };

  const cardStyle = {
    background: 'var(--bg-card)',
    backdropFilter: 'blur(12px)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-lg)',
    padding: '40px',
    marginBottom: '32px'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '18px 36px',
    background: 'var(--primary)',
    color: '#fff',
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.2rem',
    transition: 'transform 0.2s ease, filter 0.2s ease',
    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)'
  };

  const h2Style = {
    fontFamily: 'var(--font-outfit)',
    fontSize: '2.25rem',
    marginBottom: '24px',
    color: '#fff',
    letterSpacing: '-0.02em'
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark)', color: 'var(--text-main)', fontFamily: 'var(--font-inter)' }}>
      {/* Schema.org Structured Data */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Assistente de Apoio Emocional",
            applicationCategory: "HealthApplication",
            operatingSystem: "Web",
            description:
              "Assistente educacional digital para organizar emoções, entender padrões e ganhar clareza mental.",
            url: "https://assistente-de-apoio.vercel.app",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{ ...sectionStyle, textAlign: 'center', paddingTop: '120px' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
          fontFamily: 'var(--font-outfit)',
          fontWeight: 800, 
          lineHeight: 1.1, 
          marginBottom: '24px',
          letterSpacing: '-0.04em',
          background: 'linear-gradient(to right, #fff, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Para Quem Já Tentou de Tudo…  
          <span style={{ display: 'block', color: 'var(--primary)', WebkitTextFillColor: 'var(--primary)' }}>
            E Está Cansado de Promessas
          </span>
        </h1>

        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '48px', maxWidth: '720px', margin: '0 auto 48px', lineHeight: 1.6 }}>
          Um assistente estruturado para ajudar você a organizar emoções,
          entender padrões e recuperar clareza mental — sem exageros,
          sem promessas irreais.
        </p>

        <Link href="/chat" style={buttonStyle}>
          Iniciar Conversa Gratuita
        </Link>
      </section>

      {/* Problema */}
      <section style={{ background: 'rgba(255,255,255,0.02)', padding: '80px 0' }}>
        <div style={sectionStyle}>
          <h2 style={h2Style}>
            Você Não Precisa de Mais Motivação.
          </h2>

          <div style={{ fontSize: '1.125rem', color: 'var(--text-muted)', display: 'grid', gap: '20px', maxWidth: '800px' }}>
            <p>Você já leu conteúdos, viu vídeos, testou métodos. Mesmo assim, a ansiedade volta.</p>
            <p>O problema não é falta de esforço. É <strong>falta de estrutura</strong>.</p>
            <p>Informação isolada não cria clareza. Organização cria.</p>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          O Que É — E O Que Não É
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '20px', color: 'var(--primary)' }}>
              O Que É
            </h3>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
              <li style={{ color: 'var(--text-main)' }}>• Assistente educacional estruturado</li>
              <li style={{ color: 'var(--text-main)' }}>• Organização de emoções</li>
              <li style={{ color: 'var(--text-main)' }}>• Identificação de padrões</li>
              <li style={{ color: 'var(--text-main)' }}>• Clareza antes de decisões</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '20px', color: '#ef4444' }}>
              O Que Não É
            </h3>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
              <li style={{ color: 'var(--text-main)' }}>• Não substitui terapia</li>
              <li style={{ color: 'var(--text-main)' }}>• Não faz diagnóstico</li>
              <li style={{ color: 'var(--text-main)' }}>• Não promete cura</li>
              <li style={{ color: 'var(--text-main)' }}>• Não é aconselhamento médico</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section style={{ background: 'rgba(255,255,255,0.02)', padding: '80px 0' }}>
        <div style={sectionStyle}>
          <h2 style={h2Style}>
            Por Que Funciona Para Quem Está Cético
          </h2>

          <div style={{ fontSize: '1.125rem', color: 'var(--text-muted)', display: 'grid', gap: '20px', maxWidth: '800px' }}>
            <p>Because it doesn't start by trying to convince you.</p>
            <p>Porque não começa tentando convencer você.</p>
            <p>Começa organizando o que está confuso.</p>
            <p>Quando você entende o padrão, o medo diminui.</p>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          Como Funciona
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {[
            { step: '1', title: 'Inicie a conversa', text: 'Abra o chat e sinta-se seguro para falar.' },
            { step: '2', title: 'Descreva o momento', text: 'Conte o que está sentindo ou pensando agora.' },
            { step: '3', title: 'Receba Estrutura', text: 'A IA ajuda a organizar e categorizar suas emoções.' },
            { step: '4', title: 'Ganhe Clareza', text: 'Visualize seus padrões e decida os próximos passos.' }
          ].map((item, i) => (
            <div key={i} style={cardStyle}>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px', opacity: 0.6 }}>PASSO {item.step}</div>
              <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/chat" style={buttonStyle}>
            Testar Gratuitamente
          </Link>
        </div>
      </section>

      {/* Segurança */}
      <section style={{ borderTop: '1px solid var(--border-light)', padding: '60px 0' }}>
        <div style={{ ...sectionStyle, padding: '0 24px' }}>
          <div style={{ ...cardStyle, background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.1)' }}>
            <p style={{ marginBottom: '16px', color: '#ef4444', fontWeight: 600 }}>Aviso Importante</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Este sistema é complementar e educacional. Não substitui atendimento psicológico ou médico.
              Em caso de emergência emocional no Brasil, ligue 188 (CVV).
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 24px', textAlign: 'center', borderTop: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} Assistente de Apoio Emocional.  
        Todos os direitos reservados.
      </footer>
    </main>
  );
}
