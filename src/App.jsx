import About from './components/About'
import Contact from './components/Contact'
import ContactCTA from './components/ContactCTA'
import Differentiators from './components/Differentiators'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import JsonLd from './components/JsonLd'
import Services from './components/Services'
import Specialties from './components/Specialties'
import WhatsAppButton from './components/WhatsAppButton'
import Privacy from './components/Privacy'

export default function App() {
  return (
    <>
      <JsonLd />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[90] focus:bg-white focus:px-4 focus:py-2 focus:text-brand"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Specialties />
        <Services />
        <About />
        <Differentiators />
        <Gallery />
        <ContactCTA />
        <Contact />
        <Privacy />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
