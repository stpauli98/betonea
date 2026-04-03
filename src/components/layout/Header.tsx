'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'
import { formatPhoneForTel } from '@/lib/utils'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Početna', href: '/' },
  { label: 'Proizvodi', href: '/proizvodi' },
  { label: 'Galerija', href: '/galerija' },
  { label: 'O nama', href: '/o-nama' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(true) // start solid, switch to transparent if hero exists
  const [hasHero, setHasHero] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Detect if page has a hero section (PageHero or Hero component with -mt- class)
    const heroEl = document.querySelector('section.-mt-16, section.-mt-20, [class*="-mt-16"], [class*="-mt-20"]')
    const pageHasHero = !!heroEl
    setHasHero(pageHasHero)

    const handleScroll = () => {
      if (pageHasHero) {
        setScrolled(window.scrollY > 50)
      } else {
        setScrolled(true) // always solid on pages without hero
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On pages without hero, always use dark text
  const isTransparent = hasHero && !scrolled

  const primaryPhone = siteConfig.contact.phones[0]

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        )}
        initial={false}
        animate={{
          backgroundColor: isTransparent
            ? 'rgba(255, 255, 255, 0)'
            : 'rgba(255, 255, 255, 0.95)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'font-heading text-xl tracking-widest transition-colors hover:text-gold-400',
                isTransparent ? 'text-white' : 'text-stone-900'
              )}
            >
              BETONEA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-gold-400',
                    isTransparent ? 'text-white/90' : 'text-stone-700'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: phone + CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:${formatPhoneForTel(primaryPhone.number)}`}
                className={cn(
                  'flex items-center gap-2 text-sm transition-colors hover:text-gold-400',
                  isTransparent ? 'text-white/80' : 'text-stone-600'
                )}
              >
                <Phone className="h-4 w-4" />
                <span>{primaryPhone.number}</span>
              </a>
              <Link
                href="/kontakt"
                className="rounded-sm bg-gold-400 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold-500"
              >
                Kontaktirajte nas
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className={cn(
                'flex items-center justify-center rounded-md p-2 transition-colors hover:text-gold-400 lg:hidden',
                isTransparent ? 'text-white' : 'text-stone-700'
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Otvori meni"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
