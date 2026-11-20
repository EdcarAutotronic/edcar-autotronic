// Fotografías reales proporcionadas por EDCAR AUTOTRONIC, optimizadas en WebP.
export const galleryCategories = [
  { id: 'todas', label: 'Todas' },
  { id: 'instalaciones', label: 'Instalaciones' },
  { id: 'diagnosticos', label: 'Electricidad' },
  { id: 'mantenimiento', label: 'Mantenimiento' },
  { id: 'reparaciones', label: 'Reparaciones' },
  { id: 'motocicletas', label: 'Motocicletas' },
]

export const galleryItems = [
  { id: 'fachada-taller', category: 'instalaciones', type: 'image', src: new URL('../assets/gallery/fachada-taller.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/fachada-taller-thumb.webp', import.meta.url).href, alt: 'Fachada del taller EDCAR AUTOTRONIC en Mixco', caption: 'Nuestro taller' },
  { id: 'interior-taller', category: 'instalaciones', type: 'image', src: new URL('../assets/gallery/interior-taller.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/interior-taller-thumb.webp', import.meta.url).href, alt: 'Interior y zona de servicio del taller EDCAR AUTOTRONIC', caption: 'Instalaciones' },
  { id: 'area-herramientas', category: 'instalaciones', type: 'image', src: new URL('../assets/gallery/area-herramientas.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/area-herramientas-thumb.webp', import.meta.url).href, alt: 'Área de herramientas del taller', caption: 'Área de trabajo' },
  { id: 'bahias-servicio', category: 'instalaciones', type: 'image', src: new URL('../assets/gallery/bahias-servicio.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/bahias-servicio-thumb.webp', import.meta.url).href, alt: 'Bahías de servicio en el taller', caption: 'Espacios de servicio' },
  { id: 'trabajo-electrico', category: 'diagnosticos', type: 'image', src: new URL('../assets/gallery/trabajo-electrico.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/trabajo-electrico-thumb.webp', import.meta.url).href, alt: 'Técnico revisando conexiones eléctricas de un vehículo', caption: 'Revisión eléctrica' },
  { id: 'mecanico-revision', category: 'mantenimiento', type: 'image', src: new URL('../assets/gallery/mecanico-revision.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/mecanico-revision-thumb.webp', import.meta.url).href, alt: 'Mecánico realizando mantenimiento de un vehículo en elevador', caption: 'Trabajo en taller' },
  { id: 'revision-elevador', category: 'mantenimiento', type: 'image', src: new URL('../assets/gallery/revision-elevador.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/revision-elevador-thumb.webp', import.meta.url).href, alt: 'Técnico trabajando debajo de un vehículo elevado', caption: 'Mantenimiento' },
  { id: 'revision-suv', category: 'reparaciones', type: 'image', src: new URL('../assets/gallery/revision-suv.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/revision-suv-thumb.webp', import.meta.url).href, alt: 'Vehículo SUV durante un trabajo de reparación', caption: 'Servicio a vehículos' },
  { id: 'revision-motor', category: 'reparaciones', type: 'image', src: new URL('../assets/gallery/revision-motor.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/revision-motor-thumb.webp', import.meta.url).href, alt: 'Inspección del compartimento del motor de un vehículo', caption: 'Revisión de motor' },
  { id: 'sedan-elevador', category: 'reparaciones', type: 'image', src: new URL('../assets/gallery/sedan-elevador.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/sedan-elevador-thumb.webp', import.meta.url).href, alt: 'Sedán rojo elevado durante una reparación', caption: 'Reparaciones' },
  { id: 'mantenimiento-sedan', category: 'mantenimiento', type: 'image', src: new URL('../assets/gallery/mantenimiento-sedan.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/mantenimiento-sedan-thumb.webp', import.meta.url).href, alt: 'Automóvil elevado para servicio de mantenimiento', caption: 'Mantenimiento vehicular' },

  { id: 'moto-diagnostico', category: 'motocicletas', type: 'image', src: new URL('../assets/gallery/moto-diagnostico.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/moto-diagnostico-thumb.webp', import.meta.url).href, alt: 'Motocicleta en plataforma de servicio dentro del taller', caption: 'Diagnóstico y servicio de motocicletas' },
  { id: 'moto-servicio', category: 'motocicletas', type: 'image', src: new URL('../assets/gallery/moto-servicio.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/moto-servicio-thumb.webp', import.meta.url).href, alt: 'Motocicleta negra en área de trabajo del taller', caption: 'Servicio técnico para motocicletas' },
  { id: 'moto-taller', category: 'motocicletas', type: 'image', src: new URL('../assets/gallery/moto-taller.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/moto-taller-thumb.webp', import.meta.url).href, alt: 'Motocicleta desmontada en proceso de reparación', caption: 'Reparación de motocicletas' },
  { id: 'moto-frontal', category: 'motocicletas', type: 'image', src: new URL('../assets/gallery/moto-frontal.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/moto-frontal-thumb.webp', import.meta.url).href, alt: 'Vista frontal de motocicleta en banco de trabajo', caption: 'Atención multimarca para motos' },
  { id: 'moto-chasis', category: 'motocicletas', type: 'image', src: new URL('../assets/gallery/moto-chasis.webp', import.meta.url).href, thumbnail: new URL('../assets/gallery/moto-chasis-thumb.webp', import.meta.url).href, alt: 'Chasis de motocicleta durante reparación en taller', caption: 'Trabajo especializado en motocicletas' },
]
