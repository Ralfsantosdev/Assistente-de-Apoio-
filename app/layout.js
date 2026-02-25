import { Providers } from './providers';
import './globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: "Assistente Emocional Pro",
  description: "Apoio emocional educativo com IA. Não substitui atendimento médico ou psicológico.",
  themeColor: "#09090b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <div style={{ background: '#ef4444', color: '#fff', padding: '8px 16px', fontSize: '13px', textAlign: 'center', fontWeight: 'bold', position: 'sticky', top: 0, zIndex: 100 }}>
          ⚠️ AVISO: Este assistente é educacional. Em caso de crise ou risco imediato, ligue 188 (CVV) ou procure um pronto-socorro.
        </div>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "about": "Transtorno de Ansiedade Generalizada",
              "audience": {
                "@type": "Audience",
                "audienceType": "Pessoas com sintomas de ansiedade"
              }
            })
          }}
        />
      </body>
    </html>
  )
}

