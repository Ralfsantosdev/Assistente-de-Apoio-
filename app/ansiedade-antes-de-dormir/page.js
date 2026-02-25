import Link from "next/link"

export const metadata = {
  title: "Ansiedade Antes de Dormir: por que piora à noite e como lidar",
  description: "Entenda por que a ansiedade piora antes de dormir, como o pensamento ruminativo afeta o sono e técnicas para relaxar à noite.",
  keywords: ["ansiedade antes de dormir", "ansiedade noturna", "insônia ansiedade", "ansiedade à noite", "não consigo dormir ansiedade"],
  openGraph: { title: "Ansiedade Antes de Dormir", description: "Por que a ansiedade piora à noite e como relaxar." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Ansiedade Antes de Dormir: Por Que Piora à Noite</h1>

      <p>Você deita na cama e a mente dispara. Pensamentos sobre o dia de amanhã, arrependimentos do passado, cenários catastróficos — tudo aparece quando o corpo tenta descansar. Isso é extremamente comum em pessoas com ansiedade.</p>

      <h2 style={{ marginTop: '32px' }}>Por que a ansiedade piora à noite?</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Ausência de distrações:</strong> durante o dia, atividades ocupam a mente. À noite, sobram os pensamentos</li>
        <li><strong>Cortisol residual:</strong> o estresse acumulado do dia mantém o cortisol elevado</li>
        <li><strong>Escuridão e silêncio:</strong> o cérebro ansioso interpreta como "vulnerabilidade"</li>
        <li><strong>Ruminação:</strong> reprocessamento automático de preocupações sem solução</li>
        <li><strong>Medo de não dormir:</strong> este medo em si aumenta a ansiedade, criando um ciclo</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>Técnicas para acalmar a mente à noite</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>Diário de preocupações:</strong> Anote suas preocupações 1h antes de dormir — "tire da cabeça e coloque no papel"</li>
        <li><strong>Body scan:</strong> Deite e percorra mentalmente cada parte do corpo, relaxando uma por uma</li>
        <li><strong>Respiração 4-7-8:</strong> Inspire 4s, segure 7s, expire 8s — ativa o parassimpático</li>
        <li><strong>Limite telas:</strong> Sem celular/TV 30-60 min antes de dormir</li>
        <li><strong>Temperatura:</strong> Ambiente fresco (18-22°C) favorece o sono</li>
        <li><strong>Rotina fixa:</strong> Deitar e levantar nos mesmos horários, inclusive finais de semana</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>A ansiedade pode causar insônia crônica?</h3>
          <p>Sim. A relação é bidirecional: ansiedade causa insônia, e insônia piora a ansiedade. Tratar um ajuda o outro.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/acordar-com-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Acordar com ansiedade</Link>
          <Link href="/como-controlar-a-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Como controlar a ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Não consegue dormir?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode te guiar em exercícios de relaxamento para facilitar o sono.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Consulte um especialista em sono se a insônia persistir.</p>
    </main>
  )
}
