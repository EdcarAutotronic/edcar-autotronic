import { getWhatsAppUrl } from '../data/business'

export default function WhatsAppLink({
  message,
  className = '',
  children,
  ...props
}) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}
