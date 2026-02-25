import Link from "next/link"

export const metadata = {
  title: "Chá para Ansiedade: opções naturais que podem ajudar",
  description: "Conheça os melhores chás para ansiedade: camomila, passiflora, erva-cidreira e valeriana. Evidências científicas e cuidados.",
  keywords: ["chá para ansiedade", "cha calmante", "camomila ansiedade", "passiflora ansiedade", "chá natural ansiedade"],
  openGraph: { title: "Chá para Ansiedade", description: "Opções naturais de chá que podem ajudar na ansiedade." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Chá para Ansiedade: Opções Naturais</h1>

      <p>Chás com propriedades calmantes são usados há séculos como parte de rituais de relaxamento. Algumas ervas possuem evidência científica moderada para auxiliar no manejo da ansiedade leve a moderada.</p>

      <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--primary)', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0 }}>💡 Chás podem complementar o tratamento, mas não substituem terapia ou medicação prescrita para casos moderados a severos.</p>
      </div>

      <h2 style={{ marginTop: '32px' }}>🌼 Camomila (Matricaria chamomilla)</h2>
      <p>A camomila contém apigenina, um flavonoide que se liga aos receptores GABA-A no cérebro (os mesmos dos ansiolíticos). Estudos mostram efeito significativo na redução de sintomas de TAG em uso prolongado.</p>

      <h2 style={{ marginTop: '32px' }}>🌸 Passiflora (Passiflora incarnata)</h2>
      <p>A passiflora — ou maracujá — é uma das plantas com maior evidência para ansiedade. Estudos comparativos mostram efeito semelhante a doses baixas de benzodiazepínicos, sem risco de dependência.</p>

      <h2 style={{ marginTop: '32px' }}>🍃 Erva-cidreira (Melissa officinalis)</h2>
      <p>A melissa tem ação calmante suave e pode ajudar na insônia associada à ansiedade. Também reduz sintomas digestivos ligados ao estresse.</p>

      <h2 style={{ marginTop: '32px' }}>🌿 Valeriana (Valeriana officinalis)</h2>
      <p>A valeriana atua no sistema GABAérgico e é mais usada como indutor de sono. Pode ser combinada com passiflora para efeito sinérgico.</p>

      <h2 style={{ marginTop: '32px' }}>Cuidados importantes</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Informe seu médico sobre qualquer chá que esteja tomando</li>
        <li>Chás podem interagir com medicamentos (especialmente anticoagulantes e sedativos)</li>
        <li>Gestantes devem evitar a maioria dessas ervas</li>
        <li>Não substitua medicação prescrita por chás sem aval médico</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Chá de camomila funciona mesmo para ansiedade?</h3>
          <p>Sim, há evidência científica. Um estudo publicado no Journal of Clinical Psychopharmacology mostrou redução significativa de sintomas de TAG com uso de extrato de camomila por 8 semanas.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/tratamento-para-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Tratamento para ansiedade</Link>
          <Link href="/como-controlar-a-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Como controlar a ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Quer mais dicas de bem-estar?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Nosso assistente pode sugerir técnicas complementares de relaxamento.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>
      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>⚠️ Conteúdo educacional. Informe seu médico sobre chás e suplementos.</p>
    </main>
  )
}
