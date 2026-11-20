import {
  Bike,
  CircleDot,
  ClipboardCheck,
  Cog,
  Cpu,
  Droplets,
  MonitorSmartphone,
  MoveVertical,
  Wrench,
  Zap,
} from 'lucide-react'
import { services } from '../data/services'
import Container from './Container'
import Reveal from './Reveal'

const iconMap = {
  Bike,
  Wrench,
  MonitorSmartphone,
  Cpu,
  Zap,
  CircleDot,
  MoveVertical,
  Cog,
  ClipboardCheck,
  Droplets,
}

export default function Services() {
  return (
    <section id="servicios" className="bg-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-brand-mid uppercase">
            Servicios
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand uppercase sm:text-3xl">
            Soluciones para tu vehículo.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
            Ofrecemos diferentes servicios para el mantenimiento y reparación de vehículos y motocicletas.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Wrench
            return (
              <li key={service.id}>
                <article className="flex h-full gap-4 border border-transparent bg-white p-5 transition-colors hover:border-brand-light">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-light text-brand">
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-brand uppercase">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
