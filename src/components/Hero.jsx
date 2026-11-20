import { ArrowDownRight, ArrowUpRight, MapPin, ScanLine } from 'lucide-react'
import { business } from '../data/business'
import heroPhoto from '../assets/images/hero-taller.webp'
import Container from './Container'
import WhatsAppLink from './WhatsAppLink'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-dark text-white">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-50" />
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-brand-mid" />
      <Container className="relative grid items-center gap-9 py-12 sm:py-20 lg:min-h-[650px] lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-6">
          <p className="mb-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-white/75 uppercase">
            <span className="h-px w-8 bg-[#82c1f1]" /> Taller automotriz multimarca
          </p>
          <h1 className="max-w-2xl text-[clamp(1.95rem,5.6vw,3.6rem)] leading-[1.12] font-extrabold tracking-[-0.035em] uppercase">
            Tu carro <span className="text-[#94cbf1]">habla.</span> ¿Sabes qué intenta decirte?
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-[1.85] text-white/80 sm:text-base">
            En EDCAR AUTOTRONIC escuchamos lo que tu carro necesita. Contamos con 30 años de experiencia en diagnóstico computarizado, inyección electrónica, mantenimiento y reparación de vehículos y motocicletas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppLink className="btn btn-on-dark w-full sm:w-auto">Agenda tu servicio <ArrowUpRight size={17} aria-hidden="true" /></WhatsAppLink>
            <a href="#servicios" className="btn btn-ghost-on-dark w-full sm:w-auto">Nuestros servicios <ArrowDownRight size={17} aria-hidden="true" /></a>
          </div>
          <p className="mt-8 flex items-start gap-2 text-xs text-white/70 sm:text-sm">
            <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" /> {business.locality} · Lun–Vie 8:30 a. m. – 6:00 p. m.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="relative isolate aspect-[5/4] overflow-hidden border border-white/15 bg-[#102b4e] sm:aspect-[6/5] lg:aspect-[5/4]">
            <img src={heroPhoto} alt="Técnico de EDCAR AUTOTRONIC trabajando en un vehículo dentro del taller" fetchPriority="high" decoding="async" className="h-full w-full object-cover object-center" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061a32]/80 via-transparent to-transparent" />
            <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-3 border border-white/20 bg-[#0b1f3a]/90 px-3 py-3 text-[0.62rem] font-bold tracking-[0.14em] text-white/90 uppercase sm:right-5 sm:bottom-5 sm:left-5 sm:px-4">
              <span className="flex items-center gap-2"><ScanLine size={16} className="text-[#83c1ef]" aria-hidden="true" /> Trabajo real, experiencia real</span>
              <span className="hidden sm:inline">Mixco, Guatemala</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
