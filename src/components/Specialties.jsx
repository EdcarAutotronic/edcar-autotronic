import { Cpu, MonitorSmartphone } from 'lucide-react'
import { specialties } from '../data/services'
import Container from './Container'
import Reveal from './Reveal'

const icons = {
  inyeccion: Cpu,
  diagnostico: MonitorSmartphone,
}

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-brand-mid uppercase">
            Especialidades
          </p>
          <h2 className="mt-3 max-w-xl text-2xl font-extrabold tracking-tight text-brand uppercase sm:text-3xl">
            Precisión electrónica para el diagnóstico y el rendimiento.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {specialties.map((item, index) => {
            const Icon = icons[item.id] ?? Cpu
            const dark = index === 0

            return (
              <Reveal key={item.id}>
                <article
                  className={`flex min-h-[280px] flex-col justify-between p-6 sm:p-8 ${
                    dark ? 'bg-brand-dark text-white' : 'bg-brand-light text-brand-dark'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`text-sm font-semibold tracking-[0.2em] ${dark ? 'text-white/50' : 'text-brand-mid'}`}>
                      {item.number}
                    </span>
                    <Icon size={28} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight uppercase sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className={`mt-4 max-w-md text-sm leading-relaxed ${dark ? 'text-white/75' : 'text-muted'}`}>
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
