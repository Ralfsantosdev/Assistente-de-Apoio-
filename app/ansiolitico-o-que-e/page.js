import Link from "next/link"

export const metadata = {
  title: "Ansiolítico: O Que É, Como Funciona e Riscos",
  description: "Entenda o que são ansiolíticos, como atuam no cérebro, indicações, riscos de dependência e alternativas ao uso prolongado.",
  keywords: ["ansiolítico o que é", "ansiolítico", "calmante para ansiedade", "benzodiazepínico", "rivotril"],
  openGraph: { title: "Ansiolítico: O Que É", description: "Tudo sobre ansiolíticos: como funcionam e seus riscos." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiolítico: O Que É e Como Funciona</h1>

      <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Ansiolíticos são medicamentos controlados. Uso apenas com prescrição médica.</p>
      </div>

      <p>Ansiolítico é qualquer medicamento que reduz a ansiedade. O termo é amplo, mas na prática é mais associado aos benzodiazepínicos — uma classe de medicamentos de ação rápida que atua potencializando o GABA, o principal neurotransmissor inibitório do cérebro.</p>

      <h2 style={{ marginTop: '32px' }}>Como o ansiolítico atua no cérebro?</h2>
      <p>Os benzodiazepínicos se ligam aos receptores GABA-A, amplificando o efeito inibitório do GABA. Isso reduz a excitabilidade neuronal, gerando relaxamento muscular, sedação e redução da ansiedade em minutos.</p>

      <h2 style={{ marginTop: '32px' }}>Indicações legítimas</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Crises agudas de ansiedade ou pânico</li>
        <li>Insônia pontual</li>
        <li>Pré-operatório</li>
        <li>Convulsões (alguns tipos)</li>
        <li>Ponte terapêutica enquanto antidepressivo faz efeito</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Riscos do uso prolongado</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Dependência:</strong> pode se desenvolver em semanas</li>
        <li><strong>Tolerância:</strong> o corpo precisa de doses maiores para o mesmo efeito</li>
        <li><strong>Síndrome de abstinência:</strong> insônia, tremores, convulsões</li>
        <li><strong>Prejuízo cognitivo:</strong> memória e concentração afetadas</li>
        <li><strong>Quedas em idosos:</strong> risco aumentado de fraturas</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Alternativas ao ansiolítico</h2>
      <p>Para tratamento contínuo da ansiedade, as opções mais seguras incluem ISRS (antidepressivos), buspirona, TCC (terapia), exercício físico e técnicas de relaxamento.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Posso tomar ansiolítico todo dia?</h3>
          <p>Não é recomendado a longo prazo. O uso contínuo de benzodiazepínicos leva a tolerância e dependência. O tratamento prolongado deve ser feito com antidepressivos e terapia.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/remedio-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Remédio para ansiedade</Link>
          <Link href="/antidepressivo-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Antidepressivo para ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer entender melhor suas opções?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode ajudar a organizar suas dúvidas para levar ao médico.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Consulte um psiquiatra para prescrição.</p>
    </main>
  )
}
