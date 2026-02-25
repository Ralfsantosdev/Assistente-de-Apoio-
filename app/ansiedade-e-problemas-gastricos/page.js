import Link from "next/link"

export const metadata = {
  title: "Ansiedade e Problemas Gástricos: a relação intestino-cérebro",
  description: "Entenda como a ansiedade causa náusea, dor de estômago, diarreia, refluxo e síndrome do intestino irritável.",
  keywords: ["ansiedade e problemas gástricos", "ansiedade estômago", "ansiedade e náusea", "ansiedade intestino", "ansiedade e refluxo"],
  openGraph: { title: "Ansiedade e Problemas Gástricos", description: "A relação entre ansiedade e o sistema digestivo." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade e Problemas Gástricos: O Eixo Intestino-Cérebro</h1>

      <p>Você sabia que o intestino tem mais de 100 milhões de neurônios? Ele é chamado de "segundo cérebro" porque se comunica diretamente com o sistema nervoso central. Por isso, a ansiedade afeta o sistema digestivo de forma tão profunda.</p>

      <h2 style={{ marginTop: '32px' }}>A conexão intestino-cérebro</h2>
      <p>O nervo vago conecta o cérebro ao intestino. Quando a ansiedade é ativada, sinais de estresse são transmitidos ao sistema digestivo, alterando a motilidade intestinal, a produção de ácido gástrico e a flora bacteriana.</p>

      <h2 style={{ marginTop: '32px' }}>Sintomas digestivos causados pela ansiedade</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Náusea:</strong> muito comum em momentos de estresse agudo</li>
        <li><strong>"Embrulho" no estômago:</strong> sensação de borboletas ou nó</li>
        <li><strong>Diarreia:</strong> o intestino acelera por estímulo nervoso</li>
        <li><strong>Constipação:</strong> em ansiedade crônica, pode haver lentidão intestinal</li>
        <li><strong>Refluxo gastroesofágico:</strong> aumento da produção de ácido</li>
        <li><strong>Gases e distensão:</strong> alteração da flora intestinal</li>
        <li><strong>Perda de apetite:</strong> o corpo prioriza "sobrevivência" sobre digestão</li>
        <li><strong>Síndrome do Intestino Irritável (SII):</strong> forte correlação com ansiedade</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>O que ajuda</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Tratar a ansiedade na raiz (terapia, medicação se indicada)</li>
        <li>Alimentação regular em horários fixos</li>
        <li>Evitar refeições pesadas em momentos de estresse</li>
        <li>Probióticos (evidência crescente para eixo intestino-cérebro)</li>
        <li>Reduzir cafeína, álcool e alimentos industrializados</li>
        <li>Respiração diafragmática antes das refeições</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>A ansiedade pode causar gastrite?</h3>
          <p>A ansiedade pode aumentar a produção de ácido gástrico e enfraquecer a barreira protetora do estômago, contribuindo para gastrite nervosa. O tratamento deve ser feito com gastroenterologista e abordagem da ansiedade.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/sintomas-de-ansiedade-no-corpo" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Sintomas de ansiedade no corpo</Link>
          <Link href="/ansiedade-e-cansaco" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade e cansaço</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Problemas digestivos recorrentes?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para entender a relação com a ansiedade e aprender técnicas de alívio.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Consulte gastroenterologista para sintomas persistentes.</p>
    </main>
  )
}
