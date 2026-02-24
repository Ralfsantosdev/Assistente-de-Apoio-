
export const metadata = {
  title: "Assistente Educacional de Apoio Emocional"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{fontFamily: "Arial", background:"#f4f6f9", padding:20}}>
        <div style={{maxWidth:800, margin:"0 auto", background:"#fff", padding:20, borderRadius:10}}>
          <h2>Assistente Educacional de Apoio Emocional</h2>
          <p style={{color:"red"}}>
            Ferramenta educativa complementar. Não substitui atendimento médico ou psicológico.
          </p>
          {children}
        </div>
      </body>
    </html>
  )
}
