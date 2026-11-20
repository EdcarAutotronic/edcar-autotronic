export const business = {
  name: 'EDCAR AUTOTRONIC',
  shortName: 'EDCAR',
  descriptor: 'AUTOTRONIC',
  tagline: 'Tu carro habla. ¿Sabes qué intenta decirte?',
  type: 'Taller multimarca para automóviles y motocicletas',
  locality: 'Mixco, Guatemala',
  experienceYears: 30,
  address: '0 avenida 12-20, zona 3 de Mixco, Colonia Nueva Monserrat, Guatemala',
  streetAddress: '0 avenida 12-20, zona 3 de Mixco, Colonia Nueva Monserrat',
  addressLocality: 'Mixco',
  addressRegion: 'Guatemala',
  addressCountry: 'GT',
  mapsUrl: 'https://maps.app.goo.gl/CTwsLNqePb93tTas8',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=0%20avenida%2012-20%2C%20zona%203%20de%20Mixco%2C%20Colonia%20Nueva%20Monserrat%2C%20Guatemala&output=embed',
  whatsappDisplay: '+502 5203-8462',
  whatsappDigits: '50252038462',
  whatsappUrl: 'https://wa.me/50252038462',
  whatsappDefaultMessage:
    'Hola, EDCAR AUTOTRONIC. Me gustaría obtener información sobre sus servicios y agendar una revisión para mi vehículo.',
  hours: [
    { days: 'Lunes a viernes', time: '8:30 a. m. – 6:00 p. m.', schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '18:00' },
    { days: 'Sábados', time: '8:30 a. m. – 1:00 p. m.', schemaDays: ['Saturday'], opens: '08:30', closes: '13:00' },
    { days: 'Domingos', time: 'Cerrado', schemaDays: ['Sunday'], opens: null, closes: null },
  ],
  social: {
    instagram: 'https://www.instagram.com/edcarautotronic/',
    tiktok: 'https://www.tiktok.com/@edcar_autotronic',
    facebook: 'https://www.facebook.com/people/Edcar-Autotronic-taller-multimarca/',
  },
  seo: {
    title: 'EDCAR AUTOTRONIC | Taller Automotriz Multimarca en Mixco',
    description:
      'Taller multimarca en Mixco con 30 años de experiencia, especializado en diagnóstico computarizado, inyección electrónica, mantenimiento y reparación de vehículos y motocicletas.',
    // Cuando exista dominio definitivo, completar para canonical y Open Graph.
    siteUrl: '',
  },
}

export function getWhatsAppUrl(message = business.whatsappDefaultMessage) {
  return `${business.whatsappUrl}?text=${encodeURIComponent(message)}`
}

export function buildServiceWhatsAppMessage({ name, phone, service, notes }) {
  const lines = [
    'Hola, EDCAR AUTOTRONIC. Deseo agendar un servicio.',
    name ? `Nombre: ${name}` : null,
    phone ? `Teléfono: ${phone}` : null,
    service ? `Servicio de interés: ${service}` : null,
    notes ? `Mensaje: ${notes}` : null,
  ].filter(Boolean)

  return lines.join('\n')
}
