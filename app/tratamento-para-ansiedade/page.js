import Link from "next/link"

export const metadata = {
  title: "Tratamento para Ansiedade: guia completo de opções terapêuticas",
  description: "Conheça todas as opções de tratamento para ansiedade: terapia, medicação, exercício, mindfulness e mudanças de estilo de vida.",
  keywords: ["tratamento para ansiedade", "tratar ansiedade", "como tratar ansiedade", "tratamento ansiedade generalizada"],
  openGraph: { title: "Tratamento para Ansiedade", description: "Guia completo de opções terapêuticas para ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Tratamento para Ansiedade: Guia Completo</h1>

      <p>O tratamento da ansiedade é multifacetado e deve ser individualizado. A combinação de abordagens é geralmente mais eficaz do que qualquer intervenção isolada.</p>

      <h2 style={{ marginTop: '32px' }}>1. Psicoterapia (primeira linha)</h2>
      <p>A Terapia Cognitivo-Comportamental (TCC) é o tratamento com maior evidência para transtornos de ansiedade. Ela ensina a identificar e reestruturar pensamentos disfuncionais, além de técnicas de exposição gradual.</p>

      <h2 style={{ marginTop: '32px' }}>2. Medicação</h2>
      <p>Quando os sintomas são moderados a severos, a medicação pode ser necessária. Os ISRS são a primeira linha farmacológica.</p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><Link href="/antidepressivo-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Antidepressivos</Link> (ISRS, IRSN)</li>
        <li><Link href="/ansiolitico-o-que-e" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Ansiolíticos</Link> (uso pontual)</li>
        <li>Buspirona (para TAG)</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>3. Exercício físico</h2>
      <p>Evidência forte: 30 minutos de exercício aeróbico, 3-5 vezes por semana, reduz sintomas de ansiedade tanto quanto medicação leve. Libera endorfinas e reduz cortisol.</p>

      <h2 style={{ marginTop: '32px' }}>4. Mindfulness e meditação</h2>
      <p>A prática regular de mindfulness reduz a ruminação e treina o cérebro para permanecer no presente. Apps de meditação guiada podem ser um bom ponto de partida.</p>

      <h2 style={{ marginTop: '32px' }}>5. Mudanças de estilo de vida</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Higiene do sono (rotina fixa, sem telas antes de dormir)</li>
        <li>Redução de cafeína e álcool</li>
        <li>Alimentação balanceada</li>
        <li>Gerenciamento do tempo e limites saudáveis</li>
        <li>Conexão social e suporte emocional</li>
      </ul>

      <h2 style={{ marginTop: '32px' }}>6. Técnicas complementares</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Yoga e tai chi</li>
        <li>Acupuntura (evidência moderada)</li>
        <li><Link href="/cha-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Chás e fitoterápicos</Link></li>
        <li>Aromaterapia (lavanda)</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Preciso de remédio para tratar ansiedade?</h3>
          <p>Nem sempre. Casos leves podem ser tratados apenas com terapia e mudanças de hábitos. Casos moderados a severos geralmente se beneficiam de medicação combinada com terapia.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/terapia-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Terapia para ansiedade</Link>
          <Link href="/remedios-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Remédios para ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer dar o primeiro passo?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para identificar padrões e aprender técnicas iniciais.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Procure avaliação profissional.</p>
    </main>
  )
}
