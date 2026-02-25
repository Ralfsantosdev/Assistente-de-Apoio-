import Link from "next/link"

export const metadata = {
  title: "Ansiedade: Sintomas, Causas, Tipos e Formas de Tratamento",
  description:
    "Guia completo sobre ansiedade: entenda os sintomas físicos e emocionais, tipos de transtorno, crises, tratamentos e como buscar ajuda profissional.",
  keywords: [
    "ansiedade",
    "sintomas de ansiedade",
    "transtorno de ansiedade",
    "crise de ansiedade",
    "tratamento ansiedade",
    "tipos de ansiedade"
  ],
  openGraph: {
    title: "Ansiedade: Guia Completo — Sintomas, Causas e Tratamento",
    description:
      "Tudo sobre ansiedade: sintomas físicos, emocionais, crises, transtornos, diagnóstico e tratamentos baseados em evidências."
  }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>

      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '16px', letterSpacing: '-0.02em' }}>
        Ansiedade: Sintomas, Causas, Tipos e Formas de Tratamento
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '40px' }}>
        Atualizado em fevereiro de 2026 · Conteúdo educacional · Não substitui avaliação médica
      </p>

      {/* Definição */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>O que é ansiedade?</h2>
        <p>
          A ansiedade é uma resposta natural do organismo diante de situações percebidas como ameaçadoras ou desafiadoras.
          Em níveis moderados, ela é adaptativa: nos ajuda a reagir ao perigo, a nos preparar para provas ou entrevistas,
          e a tomar decisões rápidas. O problema surge quando essa resposta se torna desproporcional, constante e
          incapacitante, interferindo no funcionamento diário, nos relacionamentos e na qualidade de vida.
        </p>
        <p style={{ marginTop: '16px' }}>
          Segundo a Organização Mundial da Saúde (OMS), o Brasil é o país com a maior prevalência de transtornos
          de ansiedade no mundo — cerca de 9,3% da população. Compreender a ansiedade é o primeiro passo para
          buscar ajuda e recuperar o controle.
        </p>
      </section>

      {/* Diferença */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>Ansiedade normal vs. transtorno de ansiedade</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
            <h3 style={{ color: '#10b981', marginBottom: '12px', fontSize: '16px' }}>✅ Ansiedade Normal</h3>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <li>Proporcional à situação</li>
              <li>Temporária e pontual</li>
              <li>Não impede atividades</li>
              <li>Resposta adaptativa</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
            <h3 style={{ color: '#ef4444', marginBottom: '12px', fontSize: '16px' }}>⚠️ Transtorno de Ansiedade</h3>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <li>Desproporcional ao gatilho</li>
              <li>Persistente (semanas/meses)</li>
              <li>Prejudica rotina e relações</li>
              <li>Causa sofrimento significativo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cluster 1 — Sintomas */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>Sintomas de ansiedade</h2>
        <p>
          A ansiedade se manifesta de formas variadas — no corpo, na mente e no comportamento.
          Muitas pessoas procuram pronto-socorro acreditando ter problemas cardíacos quando,
          na verdade, estão vivenciando uma crise de ansiedade.
        </p>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/sintomas-de-ansiedade" style={linkStyle}>→ Sintomas de ansiedade: sinais físicos e emocionais</Link>
          <Link href="/sintomas-de-crise-de-ansiedade" style={linkStyle}>→ Sintomas de crise de ansiedade</Link>
          <Link href="/sintomas-de-ansiedade-no-corpo" style={linkStyle}>→ Sintomas de ansiedade no corpo</Link>
          <Link href="/ansiedade-sintomas-fisicos" style={linkStyle}>→ Ansiedade: sintomas físicos detalhados</Link>
          <Link href="/ansiedade-sintomas-emocionais" style={linkStyle}>→ Ansiedade: sintomas emocionais</Link>
          <Link href="/taquicardia-e-ansiedade" style={linkStyle}>→ Taquicardia e ansiedade</Link>
          <Link href="/falta-de-ar-e-ansiedade" style={linkStyle}>→ Falta de ar e ansiedade</Link>
          <Link href="/formigamento-e-ansiedade" style={linkStyle}>→ Formigamento e ansiedade</Link>
        </div>
      </section>

      {/* Cluster 2 — Crises */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>Crises de ansiedade</h2>
        <p>
          As crises de ansiedade são episódios agudos de medo ou desconforto intenso que podem durar
          de minutos a horas. Entender como elas funcionam é essencial para atravessá-las com menos sofrimento.
        </p>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/crise-de-ansiedade" style={linkStyle}>→ Crise de ansiedade: sintomas e o que fazer</Link>
          <Link href="/quanto-tempo-dura-uma-crise-de-ansiedade" style={linkStyle}>→ Quanto tempo dura uma crise de ansiedade?</Link>
          <Link href="/o-que-fazer-em-uma-crise-de-ansiedade" style={linkStyle}>→ O que fazer em uma crise de ansiedade</Link>
          <Link href="/como-ajudar-alguem-em-crise-de-ansiedade" style={linkStyle}>→ Como ajudar alguém em crise de ansiedade</Link>
          <Link href="/crise-de-ansiedade-pode-matar" style={linkStyle}>→ Crise de ansiedade pode matar?</Link>
        </div>
      </section>

      {/* Cluster 3 — Transtornos */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>Tipos de transtornos de ansiedade</h2>
        <p>
          Existem diferentes tipos de transtornos de ansiedade, cada um com características,
          gatilhos e abordagens terapêuticas específicas. O diagnóstico correto é fundamental
          para o tratamento adequado.
        </p>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/transtorno-de-ansiedade-generalizada" style={linkStyle}>→ Transtorno de Ansiedade Generalizada (TAG)</Link>
          <Link href="/ansiedade-generalizada" style={linkStyle}>→ Ansiedade generalizada: o que é?</Link>
          <Link href="/ansiedade-social" style={linkStyle}>→ Ansiedade social (fobia social)</Link>
          <Link href="/ansiedade-de-separacao" style={linkStyle}>→ Ansiedade de separação</Link>
          <Link href="/transtorno-do-panico" style={linkStyle}>→ Transtorno do pânico</Link>
          <Link href="/diferenca-entre-ansiedade-e-panico" style={linkStyle}>→ Diferença entre ansiedade e pânico</Link>
        </div>
      </section>

      {/* Cluster 4 — Tratamento */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>Tratamento para ansiedade</h2>
        <p>
          O tratamento da ansiedade pode envolver terapia, medicamentos, mudanças de hábitos e
          técnicas de relaxamento. Cada caso é único e exige avaliação profissional individualizada.
        </p>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/tratamento-para-ansiedade" style={linkStyle}>→ Tratamento para ansiedade: guia completo</Link>
          <Link href="/terapia-para-ansiedade" style={linkStyle}>→ Terapia para ansiedade</Link>
          <Link href="/remedio-para-ansiedade" style={linkStyle}>→ Remédio para ansiedade</Link>
          <Link href="/remedios-para-ansiedade" style={linkStyle}>→ Remédios para ansiedade: classes e indicações</Link>
          <Link href="/antidepressivo-para-ansiedade" style={linkStyle}>→ Antidepressivo para ansiedade</Link>
          <Link href="/ansiolitico-o-que-e" style={linkStyle}>→ Ansiolítico: o que é e como funciona</Link>
          <Link href="/cha-para-ansiedade" style={linkStyle}>→ Chá para ansiedade: opções naturais</Link>
          <Link href="/como-controlar-a-ansiedade" style={linkStyle}>→ Como controlar a ansiedade</Link>
        </div>
      </section>

      {/* Cluster 5 — Diagnóstico */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>Diagnóstico e classificação</h2>
        <p>
          O diagnóstico dos transtornos de ansiedade é clínico e baseado em critérios internacionais
          como o DSM-5 e o CID-11. A avaliação médica ou psicológica é indispensável.
        </p>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/cid-ansiedade" style={linkStyle}>→ CID da ansiedade: código e classificação</Link>
          <Link href="/diagnostico-de-ansiedade" style={linkStyle}>→ Diagnóstico de ansiedade</Link>
          <Link href="/teste-de-ansiedade-online" style={linkStyle}>→ Teste de ansiedade online (rastreio)</Link>
          <Link href="/criterios-para-transtorno-de-ansiedade" style={linkStyle}>→ Critérios para transtorno de ansiedade</Link>
        </div>
      </section>

      {/* Cluster 6 — Long-tail */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>Vivências emocionais relacionadas</h2>
        <p>
          Muitas pessoas buscam ajuda descrevendo sensações específicas que estão, na verdade,
          ligadas à ansiedade. Reconhecer essas conexões é o início do entendimento.
        </p>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/ansiedade-e-medo-constante" style={linkStyle}>→ Ansiedade e medo constante</Link>
          <Link href="/sensacao-de-morte-iminente" style={linkStyle}>→ Sensação de morte iminente</Link>
          <Link href="/ansiedade-antes-de-dormir" style={linkStyle}>→ Ansiedade antes de dormir</Link>
          <Link href="/acordar-com-ansiedade" style={linkStyle}>→ Acordar com ansiedade</Link>
          <Link href="/ansiedade-e-cansaco" style={linkStyle}>→ Ansiedade e cansaço</Link>
          <Link href="/ansiedade-e-problemas-gastricos" style={linkStyle}>→ Ansiedade e problemas gástricos</Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '16px' }}>Perguntas Frequentes</h2>

        <div style={{ marginBottom: '24px' }}>
          <h3>Ansiedade tem cura?</h3>
          <p>Os transtornos de ansiedade são tratáveis. Com acompanhamento adequado, a maioria das pessoas alcança melhora significativa na qualidade de vida. O tratamento pode incluir terapia, medicação e mudanças de estilo de vida.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>Qual a diferença entre ansiedade e depressão?</h3>
          <p>Embora frequentemente coexistam, a ansiedade é marcada por preocupação excessiva e hiperativação, enquanto a depressão envolve humor deprimido e perda de interesse. Ambas requerem avaliação profissional.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>Ansiedade pode causar dor no peito?</h3>
          <p>Sim. A tensão muscular e a hiperventilação causadas pela ansiedade podem gerar dor ou desconforto torácico. Porém, dor no peito sempre deve ser investigada por um médico para descartar causas cardíacas.</p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ padding: 40, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>🌿</div>
        <h3 style={{ fontFamily: 'var(--font-outfit)', marginBottom: 12, fontSize: '20px' }}>Precisa de acolhimento agora?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 28, maxWidth: 440, margin: '0 auto 28px', fontSize: '15px', lineHeight: '1.6' }}>
          Converse com nosso assistente educacional especializado em ansiedade.
          Ele pode te ajudar com técnicas de respiração, organização de pensamentos e acolhimento.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '16px 32px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600, fontSize: '16px', boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)' }}>
          Conversar com o Assistente
        </Link>
      </div>

      <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>
        ⚠️ Este conteúdo é educacional e não substitui avaliação médica ou psicológica.
        Em caso de crise, ligue 188 (CVV) ou procure o pronto-socorro.
      </p>
    </main>
  )
}

const linkStyle = {
  color: 'var(--primary)',
  textDecoration: 'none',
  fontSize: '15px',
  padding: '8px 0',
  borderBottom: '1px solid var(--border-light)',
  display: 'block',
  transition: 'color 0.2s'
}
