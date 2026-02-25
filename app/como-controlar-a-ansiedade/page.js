import Link from "next/link"

export const metadata = {
  title: "Como Controlar a Ansiedade: técnicas e estratégias eficazes",
  description:
    "Aprenda métodos práticos para controlar a ansiedade no dia a dia, desde mudanças de hábito até técnicas de respiração.",
  keywords: ["como controlar ansiedade", "controlar ansiedade", "técnicas ansiedade", "como diminuir ansiedade"],
  openGraph: { title: "Como Controlar a Ansiedade", description: "Técnicas práticas para controlar a ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Como Controlar a Ansiedade de Forma Prática</h1>

      <p>
        Gerenciar a ansiedade requer persistência e a adoção de estratégias que ajudem a mente a retornar ao estado de calma. 
        Aqui estão algumas das técnicas mais eficazes:
      </p>

      <h2 style={{ marginTop: '32px' }}>1. Técnicas de Respiração</h2>
      <p>
        A respiração diafragmática (pela barriga) ajuda a sinalizar ao cérebro que você está seguro. 
        Tente inspirar lentamente e expirar em um tempo maior que a inspiração.
      </p>

      <h2 style={{ marginTop: '32px' }}>2. Exercício Físico Regular</h2>
      <p>
        A atividade física libera endorfinas e ajuda a "queimar" o cortisol excedente produzido pelo estresse.
      </p>

      <h2 style={{ marginTop: '32px' }}>3. Higiene do Sono</h2>
      <p>
        Evite telas antes de dormir e mantenha horários regulares. Um corpo descansado tem mais recursos para lidar com a ansiedade. 
        Saiba mais em <Link href="/ansiedade-antes-de-dormir" style={{ color: 'var(--primary)', textDecoration: 'none' }}>ansiedade antes de dormir</Link>.
      </p>

      <h2 style={{ marginTop: '32px' }}>4. Atenção Plena (Mindfulness)</h2>
      <p>
        Treinar a mente para focar no "aqui e agora" reduz a ruminação sobre o futuro.
      </p>

      <h2 style={{ marginTop: '32px' }}>5. Opções Complementares</h2>
      <p>
        <Link href="/cha-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Chás naturais</Link> como camomila e passiflora podem ser aliados no relaxamento. 
        Para casos mais persistentes, a <Link href="/terapia-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none' }}>terapia</Link> é fundamental.
      </p>

      <div style={{marginTop:40, padding:32, background:"var(--bg-card)", border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center'}}>
        <h3 style={{ marginBottom: 16 }}>Quer praticar uma dessas técnicas agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          Nosso assistente ProAssistant pode conduzir sessões rápidas de mindfulness com você.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>
          Começar Prática
        </Link>
      </div>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/tratamento-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Tratamento para ansiedade</Link>
          <Link href="/terapia-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Terapia para ansiedade</Link>
        </div>
      </nav>
    </main>
  )
}
