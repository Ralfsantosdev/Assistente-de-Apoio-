import { Providers } from './providers';

export const metadata = {
  title: "Assistente Educacional de Apoio Emocional",
  description: "Apoio emocional educativo com IA. Não substitui atendimento médico ou psicológico."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#f9fafb' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
