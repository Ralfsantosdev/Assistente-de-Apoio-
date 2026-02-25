import Link from "next/link"

export const metadata = {
  title: "Sintomas de Ansiedade no Corpo: como a ansiedade se manifesta fisicamente",
  description: "Descubra como a ansiedade afeta o corpo: dor no peito, tensão muscular, problemas digestivos e mais. Entenda a conexão mente-corpo.",
  keywords: ["sintomas de ansiedade no corpo", "ansiedade no corpo", "ansiedade e dor no corpo", "ansiedade somatização"],
  openGraph: { title: "Sintomas de Ansiedade no Corpo", description: "Entenda como a ansiedade se manifesta fisicamente." }
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.8' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Sintomas de Ansiedade no Corpo: A Conexão Mente-Corpo</h1>

      <p>
        Muitas pessoas não associam seus sintomas físicos à ansiedade. No entanto, o corpo é o primeiro a responder
        quando o cérebro percebe uma ameaça — real ou imaginária. Essa resposta é mediada pelo sistema nervoso autônomo
        e pelo eixo HPA (hipotálamo-hipófise-adrenal), que libera hormônios como cortisol e adrenalina.
      </p>

      <h2 style={{ marginTop: '32px' }}>Sistema cardiovascular</h2>
      <p>A adrenalina faz o coração bater mais rápido para bombear sangue para os músculos. Isso causa <strong>taquicardia</strong>, palpitações e, em alguns casos, dor ou aperto no peito.</p>

      <h2 style={{ marginTop: '32px' }}>Sistema respiratório</h2>
      <p>A hiperventilação (respiração rápida e superficial) é uma das respostas mais comuns. Ela pode causar <strong>falta de ar</strong>, tontura e formigamento nas extremidades por reduzir o CO₂ no sangue.</p>

      <h2 style={{ marginTop: '32px' }}>Sistema muscular</h2>
      <p>A tensão muscular crônica, especialmente no pescoço, ombros e mandíbula, é extremamente comum em pessoas ansiosas. Pode causar dores de cabeça tensionais e bruxismo.</p>

      <h2 style={{ marginTop: '32px' }}>Sistema digestivo</h2>
      <p>O intestino é chamado de "segundo cérebro" por conter milhões de neurônios. A ansiedade pode causar <strong>náusea, diarreia, constipação, refluxo</strong> e síndrome do intestino irritável.</p>

      <h2 style={{ marginTop: '32px' }}>Sistema nervoso periférico</h2>
      <p>Formigamento, dormência, sensação de "agulhadas" e calafrios são causados pela hiperativação simpática e pela redistribuição do fluxo sanguíneo.</p>

      <h2 style={{ marginTop: '32px' }}>Outros sintomas corporais</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li>Boca seca</li>
        <li>Suor excessivo (hiperidrose)</li>
        <li>Visão embaçada ou turva</li>
        <li>Zumbido no ouvido</li>
        <li>Fadiga crônica mesmo sem esforço</li>
        <li>Alterações de temperatura corporal</li>
      </ul>

      <section style={{ marginTop: '48px' }}>
        <h2>Perguntas Frequentes</h2>
        <div style={{ marginBottom: '24px' }}>
          <h3>Ansiedade pode causar dor real no corpo?</h3>
          <p>Sim. A tensão muscular crônica e a inflamação causada pelo cortisol elevado podem gerar dores reais e persistentes.</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>Como saber se é ansiedade ou outra doença?</h3>
          <p>Sempre procure avaliação médica para descartar causas orgânicas. Se os exames vierem normais e os sintomas coincidirem com momentos de estresse, a ansiedade é uma hipótese forte.</p>
        </div>
      </section>

      <nav style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Páginas relacionadas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>← Ansiedade: guia completo</Link>
          <Link href="/ansiedade-sintomas-fisicos" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Ansiedade: sintomas físicos detalhados</Link>
          <Link href="/taquicardia-e-ansiedade" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '14px' }}>→ Taquicardia e ansiedade</Link>
        </div>
      </nav>

      <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 16 }}>Seu corpo está dando sinais?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Converse com nosso assistente para entender melhor o que você está sentindo.</p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>Conversar Agora</Link>
      </div>

      <p style={{ marginTop: 32, fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>
        ⚠️ Conteúdo educacional. Consulte um médico para sintomas persistentes.
      </p>
    </main>
  )
}
