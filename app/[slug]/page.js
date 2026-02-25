import { pages } from "../content"
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

  const related = (page.related || []).map(slug => pages.find(p => p.slug === slug)).filter(Boolean)

  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
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

      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>{page.h1}</h1>

      {page.callout && (
        <div style={{ background: page.callout.bg || 'rgba(59,130,246,0.1)', borderLeft: `4px solid ${page.callout.color || 'var(--primary)'}`, padding: '16px', marginBottom: '32px' }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>{page.callout.text}</p>
        </div>
      )}

      <p>{page.intro}</p>

      {page.sections.map((section, i) => (
        <section key={i}>
          <h2 style={{ marginTop: '32px' }}>{section.title}</h2>
          {section.content && <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>}
          {section.items && (
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              {section.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
          )}
        </section>
      ))}

      {page.faq && page.faq.length > 0 && (
        <section style={{ marginTop: '48px' }}>
          <h2>Perguntas Frequentes</h2>
          {page.faq.map((item, i) => (
            <div key={i} style={{ marginBottom: '24px' }}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      )}

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          {related.map((r, i) => (
            <Link key={i} href={`/${r.slug}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ {r.h1}</Link>
          ))}
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>{page.cta?.title || 'Precisa de acolhimento?'}</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>{page.cta?.text || 'Converse com nosso assistente para acolhimento e orientação.'}</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação profissional para diagnóstico e tratamento.</p>
    </main>
  )
}
