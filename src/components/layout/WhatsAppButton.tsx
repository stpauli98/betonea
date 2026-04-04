import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { createWhatsAppUrl } from '@/lib/utils'

export default function WhatsAppButton() {
  const url = createWhatsAppUrl(
    siteConfig.contact.whatsapp,
    'Zdravo, interesuju me vaši proizvodi.'
  )

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontaktirajte nas putem WhatsApp-a"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
