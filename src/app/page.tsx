import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import About from "@/sections/about";
import Contact from "@/sections/contact";

export const metadata = {
  title: 'Vortex - Desenvolvimento Web',
  description: 'Agência especializada em desenvolvimento web. Criamos sites modernos, responsivos e otimizados para o seu negócio.',
  keywords: ['desenvolvimento web', 'agência digital', 'sites', 'web design', 'programação'],
  authors: [{ name: 'Vortex' }],
  
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seusite.com.br',
    siteName: 'Vortex',
    title: 'Vortex - Desenvolvimento Web',
    description: 'Agência especializada em desenvolvimento web. Criamos sites modernos, responsivos e otimizados para o seu negócio.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vortex',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Nome da Agência - Desenvolvimento Web',
    description: 'Agência especializada em desenvolvimento web. Criamos sites modernos, responsivos e otimizados.',
    images: ['/twitter-image.jpg'],
  },
  
  // Outros metadados importantes
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  manifest: '/manifest.json',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
