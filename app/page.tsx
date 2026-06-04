import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import Experience from '@/components/Experience'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience/>
      <Skills />
      <Contact />
      <Footer />
      <WhatsAppWidget/>
    </main>
  )
}
