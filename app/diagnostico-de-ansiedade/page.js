import Link from "next/link"

export const metadata = {
  title: "Diagnóstico de Ansiedade: como é feito e por quem",
  description: "Saiba como é feito o diagnóstico de ansiedade: entrevista clínica, critérios do DSM-5, exames e quais profissionais procurar.",
  keywords: ["diagnóstico de ansiedade", "como diagnosticar ansiedade", "diagnóstico tag", "exame ansiedade"],
  openGraph: { title: "Diagnóstico de Ansiedade", description: "Como o diagnóstico de ansiedade é feito." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Diagnóstico de Ansiedade: Como É Feito</h1>

      <p>O diagnóstico dos transtornos de ansiedade é essencialmente clínico — ou seja, baseado na história do paciente, nos sintomas relatados e na observação do profissional. Não existe um exame de sangue ou de imagem que diagnostique ansiedade.</p>

      <h2 style={{ marginTop: '32px' }}>Quem pode diagnosticar?</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Psiquiatra:</strong> médico especialista em saúde mental — pode diagnosticar e prescrever medicação</li>
        <li><strong>Psicólogo:</strong> pode diagnosticar (avaliação psicológica) e tratar com psicoterapia</li>
        <li><strong>Clínico geral:</strong> pode identificar e fazer encaminhamento</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Etapas do diagnóstico</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Entrevista clínica:</strong> conversa detalhada sobre sintomas, duração, intensidade e impacto na vida</li>
        <li><strong>Critérios diagnósticos:</strong> comparação com DSM-5 ou CID-11</li>
        <li><strong>Exclusão de causas orgânicas:</strong> exames para descartar hipertireoidismo, problemas cardíacos, etc.</li>
        <li><strong>Escalas de rastreio:</strong> GAD-7, BAI (Inventário de Beck para Ansiedade)</li>
        <li><strong>Avaliação de comorbidades:</strong> depressão, TDAH, uso de substâncias</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Exames que podem ser solicitados</h2>
      <p>Para excluir causas orgânicas:</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>TSH e T4 livre (tireoide)</li>
        <li>Hemograma completo</li>
        <li>Glicemia</li>
        <li>Eletrocardiograma (se houver palpitações)</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Posso me autodiagnosticar?</h3>
          <p>Não. O autodiagnóstico pode levar a tratamento inadequado. Testes online são úteis como rastreio, mas o diagnóstico formal requer avaliação profissional.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/cid-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ CID da ansiedade</Link>
          <Link href="/teste-de-ansiedade-online" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Teste de ansiedade online</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer se preparar para uma consulta?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te ajudar a mapear seus sintomas antes da avaliação profissional.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Busque avaliação profissional para diagnóstico.</p>
    </main>
  )
}
