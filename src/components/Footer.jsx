import { business } from '../data/business'
import { navigation } from '../data/navigation'
import { services } from '../data/services'
import Container from './Container'
import Logo from './Logo'

const social = [
  { label: 'Instagram', href: business.social.instagram },
  { label: 'Facebook', href: business.social.facebook },
  { label: 'TikTok', href: business.social.tiktok },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark pb-16 text-white sm:pb-12">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo onDark />
          <p className="mt-5 max-w-xs text-sm text-white/70">
            Taller multimarca en Mixco con 30 años de experiencia, especializado en diagnóstico computarizado, inyección electrónica, mantenimiento y reparación de vehículos y motocicletas.
          </p>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/50 uppercase">
            Navegación
          </h2>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/50 uppercase">
            Servicios
          </h2>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <a href="#servicios" className="text-sm text-white/80 hover:text-white">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/50 uppercase">
            Contacto
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp: {business.whatsappDisplay}
              </a>
            </li>
            <li>{business.address}</li>
            {business.hours.map((item) => (
              <li key={item.days}>
                {item.days}: {item.time}
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-4">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-[0.16em] text-white uppercase hover:text-white/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-white/50">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>© 2026 EDCAR AUTOTRONIC. Todos los derechos reservados.</span>
            <a href="#privacidad" className="underline underline-offset-2 hover:text-white">Privacidad y uso del sitio</a>
          </div>
        </Container>
      </div>
    </footer>
  )
}
