import { pages } from "@/lib/pages-data"
import Link from "next/link"

export const metadata = {
  title: "Explorar Tópicos | Assistente de Apoio Emocional",
  description: "Navegue por todos os nossos guias sobre ansiedade, crises, sintomas e tratamentos.",
}

export default function Explorar() {
  // Organizar páginas por categorias simples baseadas em palavras-chave no slug ou título
  const categories = [
    { name: "Sintomas e Sinais", keywords: ["sintomas", "taquicardia", "falta-de-ar", "formigamento"] },
    { name: "Crises e Urgência", keywords: ["crise", "panico", "pode-matar", "o-que-fazer"] },
    { name: "Tratamentos e Terapia", keywords: ["tratamento", "terapia", "remedio", "remedios", "antidepressivo", "ansiolitico", "cha"] },
    { name: "Diagnóstico e Ciência", keywords: ["diagnostico", "cid", "teste", "criterios"] },
    { name: "Padrões Mentais", keywords: ["mente-acelerada", "ansiedade-constante", "medo-constante", "separacao", "dormir", "acordar", "cansaco", "gastricos"] },
  ]

  const categorized = categories.map(cat => ({
    ...cat,
    items: pages.filter(p => cat.keywords.some(k => p.slug.includes(k)))
  }))

  const uncategorized = pages.filter(p => !categories.some(cat => cat.keywords.some(k => p.slug.includes(k))))

  const sectionStyle = {
    marginBottom: '48px'
  }

  const h2Style = {
    fontFamily: 'var(--font-outfit)',
    fontSize: '1.75rem',
    marginBottom: '24px',
    color: '#fff',
    borderBottom: '1px solid var(--border-light)',
    paddingBottom: '12px'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px'
  }

  const linkCardStyle = {
    display: 'block',
    padding: '20px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
  }

  return (
    <main style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh', backgroundColor: 'var(--bg-dark)', color: 'var(--text-main)', fontFamily: 'var(--font-inter)' }}>
      <header style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '3rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02e' }}>
          Explorar Conteúdo
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Encontre guias detalhados para ajudar você a entender seus padrões e recuperar a clareza mental.
        </p>
      </header>

      {categorized.map((cat, i) => cat.items.length > 0 && (
        <section key={i} style={sectionStyle}>
          <h2 style={h2Style}>{cat.name}</h2>
          <div style={gridStyle}>
            {cat.items.map((page, j) => (
              <Link key={j} href={`/${page.slug}`} style={linkCardStyle} className="glass-panel">
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '8px' }}>{page.h1}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{page.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {uncategorized.length > 0 && (
        <section style={sectionStyle}>
          <h2 style={h2Style}>Outros Temas</h2>
          <div style={gridStyle}>
            {uncategorized.map((page, j) => (
              <Link key={j} href={`/${page.slug}`} style={linkCardStyle} className="glass-panel">
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '8px' }}>{page.h1}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{page.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer style={{ marginTop: '80px', textAlign: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '40px' }}>
        <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
          ← Voltar para a Início
        </Link>
      </footer>
    </main>
  )
}
