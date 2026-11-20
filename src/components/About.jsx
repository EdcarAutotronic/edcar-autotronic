import aboutPhoto from '../assets/images/instalaciones.webp'
import Container from './Container'
import Reveal from './Reveal'

const highlights = [
  {
    title: 'Experiencia automotriz',
    text: '30 años de experiencia respaldan nuestro trabajo en mantenimiento, diagnóstico y reparación.',
  },
  {
    title: 'Especialización tecnológica',
    text: 'Enfoque en diagnóstico computarizado e inyección electrónica para atender fallas con precisión.',
  },
  {
    title: 'Atención multimarca',
    text: 'Servicio para diferentes marcas y tipos de vehículos, además de motocicletas, empresas y flotillas.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-brand-dark sm:aspect-[5/4] lg:aspect-[4/5]">
            <img src={aboutPhoto} loading="lazy" decoding="async" alt="Interior de las instalaciones de EDCAR AUTOTRONIC en Mixco" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent p-6 pt-20 text-white sm:p-8">
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-white/70 uppercase">Nuestro taller</p>
              <p className="mt-2 text-xl font-extrabold leading-tight tracking-tight uppercase sm:text-2xl">Experiencia mecánica.<br /><span className="text-[#92cbf2]">Enfoque tecnológico.</span></p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6">
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-brand-mid uppercase">
            Sobre nosotros
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand uppercase sm:text-3xl">
            Experiencia y compromiso con cada vehículo.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Somos un taller multimarca con 30 años de experiencia, comprometido con ofrecer soluciones de mantenimiento, diagnóstico y reparación para vehículos y motocicletas. Nuestra especialización en diagnóstico computarizado e inyección electrónica nos permite atender diferentes necesidades con precisión y atención profesional.
          </p>
          <ul className="mt-8 space-y-5">
            {highlights.map((item) => (
              <li key={item.title} className="border-l-2 border-brand pl-4">
                <h3 className="text-sm font-bold tracking-wide text-brand uppercase">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
