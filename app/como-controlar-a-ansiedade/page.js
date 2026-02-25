import Link from "next/link"

export const metadata = {
  title: "Como Controlar a Ansiedade: técnicas e estratégias eficazes",
  description:
    "Aprenda métodos práticos para controlar a ansiedade no dia a dia, desde mudanças de hábito até técnicas de respiração."
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.6' }}>
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
      </p>

      <h2 style={{ marginTop: '32px' }}>4. Atenção Plena (Mindfulness)</h2>
      <p>
        Treinar a mente para focar no "aqui e agora" reduz a ruminação sobre o futuro.
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
    </main>
  )
}
