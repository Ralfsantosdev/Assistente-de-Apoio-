import { pages } from "@/lib/pages-data"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }) {
  const page = pages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: { title: page.title, description: page.description }
  }
}

export default function Page({ params }) {
  const page = pages.find(p => p.slug === params.slug)
  if (!page) return notFound()

  const relatedPages = (page.related || []).map(slug => pages.find(p => p.slug === slug)).filter(Boolean)

  const cardStyle = {
    background: 'var(--bg-card)',
    backdropFilter: 'blur(12px)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-lg)',
    padding: '32px',
    marginBottom: '40px'
  }

  const ctaButtonStyle = {
    display: 'inline-block',
    padding: '16px 32px',
    background: 'var(--primary)',
    color: '#fff',
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.1rem',
    transition: 'transform 0.2s ease, filter 0.2s ease'
  }

  return (
    <main style={{ padding: '60px 20px', maxWidth: '850px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      {/* Schema Dinâmico */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": page.title,
            "description": page.description,
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://assistente-de-apoio.vercel.app/${page.slug}` }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": page.title,
            "description": page.description,
            "author": { "@type": "Organization", "name": "Assistente de Apoio Emocional" }
          })
        }}
      />

      {page.faq && page.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": page.faq.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
              }))
            })
          }}
        />
      )}

      {/* Hero Section */}
      <section style={{ marginBottom: '60px' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-outfit)', 
          fontSize: '3rem', 
          marginBottom: '24px', 
          letterSpacing: '-0.03em', 
          lineHeight: 1.1,
          background: 'linear-gradient(to right, #fff, #999)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {page.h1}
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '650px' }}>
          {page.intro}
        </p>

        <div style={cardStyle}>
          <h3 style={{ marginBottom: '16px', color: '#fff' }}>Precisa de ajuda agora?</h3>
          <p style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
            Nossa IA especializada pode guiar você em exercícios de respiração e organização mental imediatamente.
          </p>
          <Link href="/chat" style={ctaButtonStyle}>
            Iniciar Conversa Gratuita
          </Link>
        </div>
      </section>

      {page.callout && (
        <div style={{ ...cardStyle, background: page.callout.bg, borderLeft: `4px solid ${page.callout.color}` }}>
          <p style={{ margin: 0, fontWeight: 600 }}>{page.callout.text}</p>
        </div>
      )}

      {/* Problema vs Solução (Conversion Layout) */}
      <div style={{ display: 'grid', gap: '40px', marginBottom: '60px' }}>
        <section style={cardStyle}>
          <h2 style={{ fontFamily: 'var(--font-outfit)', color: '#fff', fontSize: '1.5rem', marginBottom: '16px' }}>
            Por Que Isso Acontece
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>{page.problem}</p>
        </section>

        <section style={{ ...cardStyle, border: '1px solid var(--primary-light)', background: 'rgba(59,130,246,0.05)' }}>
          <h2 style={{ fontFamily: 'var(--font-outfit)', color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '16px' }}>
            O Que Pode Mudar
          </h2>
          <p style={{ color: '#eee', marginBottom: '24px' }}>{page.solution}</p>
          <Link href="/chat" style={{ ...ctaButtonStyle, padding: '12px 24px', fontSize: '1rem' }}>
            Testar Agora Gratuitamente
          </Link>
        </section>
      </div>

      {/* Seções de Conteúdo Extra */}
      {page.sections && page.sections.length > 0 && page.sections.map((section, i) => (
        <section key={i} style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.75rem', marginBottom: '20px', color: '#fff' }}>
            {section.title}
          </h2>
          {section.content && <p style={{ whiteSpace: 'pre-line', marginBottom: '20px' }}>{section.content}</p>}
          {section.items && (
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', display: 'grid', gap: '12px' }}>
              {section.items.map((item, j) => (
                <li key={j} style={{ color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* FAQ Section */}
      {page.faq && page.faq.length > 0 && (
        <section style={{ marginTop: '60px', borderTop: '1px solid var(--border-light)', paddingTop: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.75rem', marginBottom: '32px', color: '#fff' }}> Perguntas Frequentes</h2>
          <div style={{ display: 'grid', gap: '32px' }}>
            {page.faq.map((item, i) => (
              <div key={i}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '12px' }}>{item.question}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Navegação Relacionada */}
      <nav style={{ marginTop: '60px', padding: '32px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', color: '#fff' }}>Continue Lendo</h3>
        <div style={{ display: 'grid', gap: '12px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>
            ← Guia Completo sobre Ansiedade
          </Link>
          {relatedPages.map((r, i) => (
            <Link key={i} href={`/${r.slug}`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>
              → {r.h1}
            </Link>
          ))}
        </div>
      </nav>

      {/* Footer Disclaimer */}
      <p style={{ marginTop: '60px', fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', opacity: 0.7 }}>
        ⚠️ Este conteúdo é educacional e não substitui atendimento médico ou psicológico. Em emergência no Brasil, ligue 188 (CVV).
      </p>
    </main>
  )
}
