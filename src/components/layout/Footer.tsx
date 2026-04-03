import Link from 'next/link'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { categories } from '@/data/categories'
import { formatPhoneForTel } from '@/lib/utils'

const footerCategories = categories.slice(0, 6)

const infoLinks = [
  { label: 'Galerija', href: '/galerija' },
  { label: 'O nama', href: '/o-nama' },
  { label: 'Kontakt', href: '/kontakt' },
]

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Facebook', href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: 'YouTube', href: siteConfig.social.youtube, icon: YoutubeIcon },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + about + socials */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl tracking-widest text-white"
            >
              BETONEA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Proizvodnja dekorativnih betonskih elemenata vrhunskog kvaliteta.
              Više od 25 godina iskustva u oblikovanju betona.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-colors hover:bg-gold-400 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Proizvodi */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Proizvodi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/proizvodi/${cat.slug}`}
                    className="text-sm text-stone-400 transition-colors hover:text-gold-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Informacije */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Informacije
            </h3>
            <ul className="mt-4 space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontakt */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-stone-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-stone-400 transition-colors hover:text-gold-400"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${formatPhoneForTel(siteConfig.contact.phones[0].number)}`}
                  className="flex items-center gap-2.5 text-sm text-stone-400 transition-colors hover:text-gold-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  <span>{siteConfig.contact.phones[0].number}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-stone-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{siteConfig.workingHours.display}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-[1280px] px-6 py-5 lg:px-8">
          <p className="text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Betonea. Sva prava zadržana. | Izrada sajta:{' '}
            <a
              href="https://www.nextpixel.dev/sr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 transition-colors hover:text-gold-300"
            >
              Next Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
