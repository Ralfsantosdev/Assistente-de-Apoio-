import Link from "next/link"

export const metadata = {
  title: "Remédio para Ansiedade: quais existem e quando são indicados",
  description:
    "Saiba quais classes de medicamentos podem ser usadas no tratamento da ansiedade e a importância crucial da prescrição médica."
}

export default function Page() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-inter)', lineHeight: '1.6' }}>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '24px' }}>Remédio para Ansiedade: Informações Importantes</h1>

      <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '16px', marginBottom: '32px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          ⚠️ Medicamentos para ansiedade devem ser prescritos exclusivamente por um médico psiquiatra após avaliação individualizada.
        </p>
      </div>

      <p>
        O tratamento medicamentoso é uma ferramenta importante no manejo de transtornos de ansiedade, 
        ajudando a regular neurotransmissores e reduzir a intensidade dos sintomas.
      </p>

      <h2 style={{ marginTop: '32px' }}>Principais classes utilizadas</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li><strong>ISRS (Inibidores Seletivos de Recaptação de Serotonina):</strong> Geralmente a primeira linha de tratamento para TAG e pânico.</li>
        <li><strong>Benzodiazepínicos:</strong> Usados para alívio imediato (curto prazo), possuem risco de dependência se mal utilizados.</li>
        <li><strong>Antidepressivos Tricíclicos:</strong> Opções alternativas para casos específicos.</li>
      </ul>

      <p style={{ fontWeight: '600', color: '#ef4444' }}>
        A automedicação pode trazer riscos severos, mascarar sintomas e causar efeitos adversos graves. 
        Nunca altere sua dosagem sem orientação médica.
      </p>

      <div style={{marginTop:40, padding:32, background:"var(--bg-card)", border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center'}}>
        <h3 style={{ marginBottom: 16 }}>Quer entender melhor o que está sentindo?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          Nosso assistente educacional pode ajudar a identificar padrões emocionais antes da sua consulta médica.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 600 }}>
          Falar com o assistente
        </Link>
      </div>
    </main>
  )
}
