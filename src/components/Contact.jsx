import { useState } from 'react'
import { Clock3, MapPin, MessageCircle } from 'lucide-react'
import { business, buildServiceWhatsAppMessage, getWhatsAppUrl } from '../data/business'
import { services } from '../data/services'
import Container from './Container'
import WhatsAppLink from './WhatsAppLink'

const initialForm = {
  name: '',
  phone: '',
  service: '',
  notes: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const url = getWhatsAppUrl(buildServiceWhatsAppMessage(form))
    // Ejecutar en interacción directa del usuario para evitar bloqueos de ventanas emergentes.
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <section id="contacto" className="bg-white py-16 sm:py-20">
      <Container>
        <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-brand-mid uppercase">
          Ubicación
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand uppercase sm:text-3xl">
          Visítanos.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h3 className="text-lg font-extrabold tracking-tight text-brand">{business.name}</h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                {business.address}
              </p>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-brand" />
                WhatsApp: {business.whatsappDisplay}
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold tracking-wide text-brand uppercase">
                <Clock3 size={16} />
                Horario
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {business.hours.map((item) => (
                  <li key={item.days} className="flex justify-between gap-4 border-b border-brand-light py-2">
                    <span>{item.days}</span>
                    <span className="text-brand">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full"
              >
                Cómo llegar
              </a>
              <WhatsAppLink className="btn btn-primary w-full">Contactar por WhatsApp</WhatsAppLink>
            </div>

            <form className="border border-brand-light bg-surface p-5" onSubmit={onSubmit}>
              <h3 className="text-sm font-bold tracking-wide text-brand uppercase">
                Solicitar información
              </h3>
              <p className="mt-2 text-xs text-muted">
                Al enviar se abre WhatsApp con los datos. No se almacena la solicitud en un servidor.
              </p>
              <label className="mt-4 block text-xs font-semibold tracking-wide text-brand uppercase">
                Nombre
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  autoComplete="name"
                  className="mt-2 min-h-12 w-full border border-brand-light bg-white px-3 text-sm font-normal tracking-normal text-brand-dark normal-case"
                />
              </label>
              <label className="mt-4 block text-xs font-semibold tracking-wide text-brand uppercase">
                Teléfono
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                  inputMode="tel"
                  className="mt-2 min-h-12 w-full border border-brand-light bg-white px-3 text-sm font-normal tracking-normal text-brand-dark normal-case"
                />
              </label>
              <label className="mt-4 block text-xs font-semibold tracking-wide text-brand uppercase">
                Servicio de interés
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="mt-2 min-h-12 w-full border border-brand-light bg-white px-3 text-sm font-normal tracking-normal text-brand-dark normal-case"
                >
                  <option value="">Seleccionar</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block text-xs font-semibold tracking-wide text-brand uppercase">
                Mensaje
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={onChange}
                  rows={3}
                  className="mt-2 w-full border border-brand-light bg-white px-3 py-3 text-sm font-normal tracking-normal text-brand-dark normal-case"
                />
              </label>
              <button type="submit" className="btn btn-primary mt-5 w-full">
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-brand-light bg-surface">
              <iframe
                title="Ubicación de EDCAR AUTOTRONIC en Mixco"
                src={business.mapsEmbedUrl}
                className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[760px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              El mapa utiliza la dirección oficial para localizar el taller. El botón “Cómo llegar”
              abre el enlace de Google Maps proporcionado por el negocio.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
