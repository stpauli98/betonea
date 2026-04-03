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
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const primaryPhone = siteConfig.contact.phones[0]

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-xl tracking-widest text-stone-900 transition-colors hover:text-gold-400"
            >
              BETONEA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-stone-700 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: phone + CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:${formatPhoneForTel(primaryPhone.number)}`}
                className="flex items-center gap-2 text-sm text-stone-600 transition-colors hover:text-gold-400"
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
              className="flex items-center justify-center rounded-md p-2 text-stone-700 transition-colors hover:text-gold-400 lg:hidden"
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
