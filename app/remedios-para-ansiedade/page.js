import Link from "next/link"

export const metadata = {
  title: "Remédios para Ansiedade: classes, indicações e cuidados",
  description: "Guia sobre remédios para ansiedade: ISRS, benzodiazepínicos, antidepressivos, ansiolíticos e a importância da prescrição médica.",
  keywords: ["remedios para ansiedade", "medicamentos ansiedade", "remédio ansiedade", "lista remedios ansiedade"],
  openGraph: { title: "Remédios para Ansiedade", description: "Classes de medicamentos usados no tratamento da ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Remédios para Ansiedade: Guia Completo</h1>

      <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ NUNCA se automedique. Todos os medicamentos citados aqui exigem prescrição e acompanhamento médico rigoroso.</p>
      </div>

      <p>O tratamento farmacológico da ansiedade é uma ferramenta importante, mas deve sempre ser combinado com psicoterapia e mudanças de hábitos para resultados duradouros.</p>

      <h2 style={{ marginTop: '32px' }}>ISRS — Inibidores Seletivos da Recaptação de Serotonina</h2>
      <p>São a primeira linha de tratamento para a maioria dos transtornos de ansiedade. Atuam aumentando a disponibilidade de serotonina no cérebro.</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Exemplos: sertralina, escitalopram, fluoxetina, paroxetina</li>
        <li>Início do efeito: 2-6 semanas</li>
        <li>Efeitos colaterais iniciais: náusea, insônia, dor de cabeça (geralmente transitórios)</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>IRSN — Inibidores da Recaptação de Serotonina e Noradrenalina</h2>
      <p>Atuam em dois neurotransmissores. Indicados quando ISRS não são suficientes.</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Exemplos: venlafaxina, duloxetina</li>
        <li>Também eficazes para dor crônica associada à ansiedade</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Benzodiazepínicos</h2>
      <p>Têm efeito rápido, mas risco de dependência. Indicados apenas para crises agudas e uso de curto prazo.</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Exemplos: clonazepam, alprazolam, lorazepam</li>
        <li>Riscos: tolerância, dependência, abstinência</li>
        <li>Não devem ser usados como tratamento principal</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Buspirona</h2>
      <p>Ansiolítico não benzodiazepínico. Sem risco de dependência. Demora 2-4 semanas para efeito. Boa opção para TAG.</p>

      <h2 style={{ marginTop: '32px' }}>Pregabalina</h2>
      <p>Originalmente anticonvulsivante, tem ação ansiolítica. Usada em alguns casos de TAG e ansiedade social.</p>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Preciso tomar remédio para sempre?</h3>
          <p>Não necessariamente. O tratamento medicamentoso geralmente dura de 6 meses a 2 anos, e a retirada deve ser gradual e monitorada pelo médico.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/antidepressivo-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Antidepressivo para ansiedade</Link>
          <Link href="/ansiolitico-o-que-e" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiolítico: o que é</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer entender melhor o que está sentindo?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente antes da sua consulta médica.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Consulte um psiquiatra para prescrição.</p>
    </main>
  )
}
