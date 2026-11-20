import { business } from '../data/business'
import Container from './Container'
import WhatsAppLink from './WhatsAppLink'

export default function ContactCTA() {
  return (
    <section className="bg-brand-dark py-16 text-white sm:py-20" aria-labelledby="cta-title">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-white/55 uppercase">
            Contacto directo
          </p>
          <h2 id="cta-title" className="mt-3 text-2xl font-extrabold tracking-tight uppercase sm:text-3xl">
            Tu vehículo o motocicleta merece atención profesional.
          </h2>
          <p className="mt-4 text-sm text-white/75 sm:text-base">
            Estamos listos para ayudarte. Comunícate con nosotros y agenda tu próximo servicio con el respaldo de 30 años de experiencia.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          <WhatsAppLink className="btn btn-on-dark w-full">Contactar por WhatsApp</WhatsAppLink>
          <p className="text-center text-xs text-white/55 sm:text-left">{business.whatsappDisplay}</p>
        </div>
      </Container>
    </section>
  )
}
