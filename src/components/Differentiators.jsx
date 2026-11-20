import Container from './Container'
import Reveal from './Reveal'

const items = [
  {
    number: '01',
    title: '30 años de experiencia',
    text: 'Tres décadas de trabajo respaldan nuestro enfoque en mantenimiento, diagnóstico y reparación con atención profesional.',
  },
  {
    number: '02',
    title: 'Electrónica automotriz',
    text: 'Especialización en inyección electrónica y diagnóstico computarizado para identificar y atender fallas.',
  },
  {
    number: '03',
    title: 'Vehículos y motocicletas',
    text: 'Ofrecemos mantenimiento y reparación tanto para automóviles como para motocicletas, bajo un enfoque multimarca.',
  },
]

export default function Differentiators() {
  return (
    <section id="diferenciadores" className="bg-brand-dark py-16 text-white sm:py-20">
      <Container>
        <Reveal>
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-white/55 uppercase">
            Enfoque
          </p>
          <h2 className="mt-3 max-w-xl text-2xl font-extrabold tracking-tight uppercase sm:text-3xl">
            Un taller, múltiples soluciones.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
            En EDCAR AUTOTRONIC trabajamos con un enfoque multimarca para ofrecer soluciones
            de mantenimiento, diagnóstico y reparación para automóviles y motocicletas.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.number}>
              <article className="h-full bg-brand-dark p-6 sm:p-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-brand-mid">{item.number}</p>
                <h3 className="mt-6 text-lg font-bold tracking-tight uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
