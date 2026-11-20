import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { galleryCategories, galleryItems } from '../data/gallery'
import Container from './Container'
import Reveal from './Reveal'

export default function Gallery() {
  const [filter, setFilter] = useState('todas')
  const [active, setActive] = useState(null)
  const closeButton = useRef(null)
  const items = useMemo(() => galleryItems.filter((item) => filter === 'todas' || item.category === filter), [filter])

  useEffect(() => {
    if (!active) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const navigate = (direction) => {
      const index = items.findIndex((item) => item.id === active.id)
      setActive(items[(index + direction + items.length) % items.length])
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') navigate(1)
      if (event.key === 'ArrowLeft') navigate(-1)
      if (event.key === 'Tab') {
        const focusables = document.querySelectorAll('[data-gallery-dialog] button')
        if (focusables.length) {
          const first = focusables[0]
          const last = focusables[focusables.length - 1]
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = previousOverflow }
  }, [active, items])

  const navigate = (direction) => {
    const index = items.findIndex((item) => item.id === active.id)
    setActive(items[(index + direction + items.length) % items.length])
  }

  return (
    <section id="galeria" className="bg-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-brand-mid uppercase">Galería</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand uppercase sm:text-3xl">Nuestro trabajo habla por nosotros.</h2>
          <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">Conoce nuestras instalaciones, los vehículos que atendemos y el trabajo que realizamos cada día.</p>
        </Reveal>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filtrar fotografías">
          {galleryCategories.map((category) => (
            <button key={category.id} type="button" aria-pressed={filter === category.id}
              className={`min-h-11 shrink-0 px-4 text-[0.68rem] font-semibold tracking-[0.12em] uppercase transition-colors ${filter === category.id ? 'bg-brand text-white' : 'border border-brand-light bg-white text-brand hover:bg-brand-light'}`}
              onClick={() => setFilter(category.id)}>{category.label}</button>
          ))}
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" className="group relative block aspect-[4/5] w-full overflow-hidden bg-brand-dark text-left"
                onClick={() => setActive(item)} aria-label={`Ampliar fotografía: ${item.caption}`}>
                <img src={item.thumbnail} alt={item.alt} loading="lazy" decoding="async" width="600" height="750" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 to-transparent px-3 pb-3 pt-10 text-xs font-semibold text-white sm:text-sm">{item.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </Container>
      {active && (
        <div data-gallery-dialog className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071727]/95 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={`Fotografía: ${active.caption}`} onClick={() => setActive(null)}>
          <button ref={closeButton} type="button" className="absolute top-3 right-3 z-10 flex h-12 w-12 items-center justify-center border border-white/25 bg-brand-dark text-white" aria-label="Cerrar galería" onClick={() => setActive(null)}><X size={22} /></button>
          <div className="w-full max-w-4xl p-2 text-white sm:p-4" onClick={(event) => event.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="mx-auto max-h-[75vh] w-auto max-w-full object-contain" />
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/15 pt-3">
              <button type="button" className="flex min-h-11 items-center gap-1 px-2 text-xs font-semibold uppercase" onClick={() => navigate(-1)}><ChevronLeft size={20} /> Anterior</button>
              <p className="text-center text-xs text-white/80">{active.caption}</p>
              <button type="button" className="flex min-h-11 items-center gap-1 px-2 text-xs font-semibold uppercase" onClick={() => navigate(1)}>Siguiente <ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
