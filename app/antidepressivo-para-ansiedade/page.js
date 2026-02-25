import Link from "next/link"

export const metadata = {
  title: "Antidepressivo para Ansiedade: como funciona e quando é indicado",
  description: "Entenda como antidepressivos são usados no tratamento da ansiedade, por que funcionam, quanto tempo demoram e efeitos colaterais.",
  keywords: ["antidepressivo para ansiedade", "antidepressivo ansiedade", "sertralina ansiedade", "escitalopram ansiedade"],
  openGraph: { title: "Antidepressivo para Ansiedade", description: "Como antidepressivos tratam a ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Antidepressivo para Ansiedade: Entenda o Tratamento</h1>

      <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Medicamentos devem ser prescritos exclusivamente por médico após avaliação individualizada.</p>
      </div>

      <p>Pode parecer estranho usar antidepressivo para tratar ansiedade, mas faz total sentido farmacológico. Os mesmos neurotransmissores envolvidos na depressão — especialmente a serotonina — também regulam a ansiedade.</p>

      <h2 style={{ marginTop: '32px' }}>Por que antidepressivos funcionam para ansiedade?</h2>
      <p>A serotonina é um neurotransmissor que regula humor, sono e a resposta ao medo. Na ansiedade, há uma disfunção nesse sistema. Os ISRS aumentam a serotonina disponível, ajudando o cérebro a modular a resposta de medo.</p>

      <h2 style={{ marginTop: '32px' }}>Quanto tempo demora para fazer efeito?</h2>
      <p>Diferente dos ansiolíticos (efeito imediato), os antidepressivos levam de 2 a 6 semanas para atingir o efeito terapêutico pleno. Esse período pode ser desafiador e exige paciência e acompanhamento médico.</p>

      <h2 style={{ marginTop: '32px' }}>Efeitos colaterais comuns (geralmente transitórios)</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Náusea e desconforto gástrico nas primeiras semanas</li>
        <li>Insônia ou sonolência</li>
        <li>Dor de cabeça</li>
        <li>Mudança no apetite</li>
        <li>Redução da libido</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Posso parar de tomar por conta própria?</h2>
      <p style={{ fontWeight: '600', color: '#ef4444' }}>Nunca. A interrupção abrupta pode causar síndrome de descontinuação (tontura, irritabilidade, "choques" elétricos, náusea). A retirada deve ser lenta, gradual e supervisionada pelo médico.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Antidepressivo causa dependência?</h3>
          <p>Os ISRS não causam dependência no sentido clássico (como benzodiazepínicos), mas podem causar descontinuação se interrompidos abruptamente. Não confunda dependência com necessidade de tratamento.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/remedios-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Remédios para ansiedade</Link>
          <Link href="/ansiolitico-o-que-e" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiolítico: o que é</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer conversar sobre o que sente?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar a preparar perguntas para sua consulta.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Consulte seu psiquiatra.</p>
    </main>
  )
}
