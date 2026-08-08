import { LanguageProvider } from "@/context"
import { NavMenu } from "@/components/Navbar"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { HealthAdvocacy } from "@/components/HealthAdvocacy"
import { NadiScreening } from "@/components/NADIScreening"
import { TeleHealth } from "@/components/TeleHealth"
import { Testimonials } from "@/components/Testimonials"
import { Footer } from "@/components/Footer"

export function App() {
  return (
    <LanguageProvider>
      <div className="flex min-h-svh flex-col bg-white scroll-smooth">
        <NavMenu />
        <main className="flex-1">
          <Hero />
          <About />
          <HealthAdvocacy />
          <NadiScreening />
          <TeleHealth />
          <Testimonials />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  )
}