import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/navigation'
import Logo from './Logo'
import WhatsAppLink from './WhatsAppLink'
import Container from './Container'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/98 backdrop-blur-sm ${
        scrolled ? 'border-brand-light shadow-[0_1px_0_rgba(18,59,112,0.08)]' : 'border-transparent'
      }`}
    >
      <Container className="flex h-14 items-center justify-between sm:h-16">
        <a href="#inicio" className="shrink-0" onClick={() => setOpen(false)}>
          <span className="sr-only">EDCAR AUTOTRONIC — inicio</span>
          <Logo variant="horizontal" className="max-sm:hidden" />
          <Logo variant="compact" className="sm:hidden" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-[0.72rem] font-semibold tracking-[0.14em] text-brand uppercase hover:text-brand-mid"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink className="btn btn-primary hidden px-4 lg:inline-flex">
            Agendar servicio
          </WhatsAppLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-brand lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="menu-movil"
          className="border-t border-brand-light bg-white lg:hidden"
        >
          <Container className="flex flex-col py-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex min-h-12 items-center border-b border-brand-light text-sm font-semibold tracking-[0.12em] text-brand uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <WhatsAppLink className="btn btn-primary mt-4 w-full" onClick={() => setOpen(false)}>
              Agendar servicio
            </WhatsAppLink>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
