'use client'

import Link from 'next/link'
import { X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/data/site'
import { formatPhoneForTel } from '@/lib/utils'

const navLinks = [
  { label: 'Početna', href: '/' },
  { label: 'Proizvodi', href: '/proizvodi' },
  { label: 'Galerija', href: '/galerija' },
  { label: 'O nama', href: '/o-nama' },
  { label: 'Kontakt', href: '/kontakt' },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const primaryPhone = siteConfig.contact.phones[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-stone-900/95 backdrop-blur-sm"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Close button */}
          <div className="flex justify-end px-6 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-stone-300 transition-colors hover:text-white"
              aria-label="Zatvori meni"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-heading text-2xl text-stone-100 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact info at bottom */}
          <div className="flex flex-col items-center gap-3 px-6 pb-10">
            <a
              href={`tel:${formatPhoneForTel(primaryPhone.number)}`}
              className="flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-gold-400"
            >
              <Phone className="h-4 w-4" />
              <span>{primaryPhone.number}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-gold-400"
            >
              <Mail className="h-4 w-4" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
