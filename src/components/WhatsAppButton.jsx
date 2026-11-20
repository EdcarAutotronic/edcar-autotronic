import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import WhatsAppLink from './WhatsAppLink'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <WhatsAppLink
      className="fixed right-3 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand text-white shadow-[0_8px_24px_rgba(11,31,58,0.28)] sm:right-5"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={22} />
    </WhatsAppLink>
  )
}
