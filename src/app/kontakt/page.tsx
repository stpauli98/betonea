import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Map from '@/components/contact/Map';
import ContactForm from '@/components/contact/ContactForm';
import { siteConfig } from '@/data/site';
import { formatPhoneForTel, createWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Kontakt — Betonea',
  description:
    'Kontaktirajte Betonea tim. Adresa, telefoni, email i kontakt forma. Besplatne konsultacije za vaše projekte dekorativnog betona.',
};

const infoCards = [
  {
    icon: MapPin,
    title: 'Adresa',
    content: (
      <a
        href={siteConfig.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-600 transition-colors hover:text-gold-400"
      >
        {siteConfig.contact.address}
      </a>
    ),
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: (
      <div className="space-y-1">
        {siteConfig.contact.phones.map((phone) => (
          <div key={phone.number}>
            <a
              href={`tel:${formatPhoneForTel(phone.number)}`}
              className="text-stone-600 transition-colors hover:text-gold-400"
            >
              {phone.name}: {phone.number}
            </a>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="text-stone-600 transition-colors hover:text-gold-400"
      >
        {siteConfig.contact.email}
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Radno vreme',
    content: (
      <div className="space-y-1 text-stone-600">
        <p>Pon - Sub: {siteConfig.workingHours.weekdays}</p>
        <p>Nedelja: {siteConfig.workingHours.sunday}</p>
      </div>
    ),
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero title="Kontaktirajte nas" subtitle="KONTAKT" />

      {/* Info Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Početna', href: '/' },
              { label: 'Kontakt' },
            ]}
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 100} className="h-full">
                <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-50">
                    <card.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg text-stone-800">
                    {card.title}
                  </h3>
                  <div className="text-sm leading-relaxed">{card.content}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="LOKACIJA"
              title="Pronađite nas"
              className="mb-8"
            />
            <Map />
            <div className="mt-6 flex justify-center">
              <Button
                href={siteConfig.mapsUrl}
                variant="primary"
              >
                Otvorite u Google Maps
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="PORUKA"
              title="Pošaljite nam poruku"
              description="Popunite formu ispod i javićemo vam se u najkraćem mogućem roku. Sva polja označena sa * su obavezna."
              className="mb-12"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-stone-900 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-white md:text-4xl">
              Brz odgovor putem WhatsApp-a
            </h2>
            <p className="mt-4 text-stone-400 leading-relaxed">
              Potrebna vam je brza informacija? Pošaljite nam poruku putem
              WhatsApp-a i odgovorićemo vam u roku od nekoliko minuta tokom
              radnog vremena.
            </p>
            <div className="mt-8">
              <Button
                href={createWhatsAppUrl(
                  siteConfig.contact.whatsapp,
                  'Zdravo, imam pitanje u vezi vaših proizvoda.',
                )}
                variant="primary"
                size="lg"
              >
                Otvorite WhatsApp
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
