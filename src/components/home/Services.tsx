import { Palette, Armchair, Building2, Wrench } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = [
  {
    icon: Palette,
    title: 'Dekorativni elementi',
    description:
      'Žardinjere, skulpture, fontane i ostali ukrasni elementi koji oplemenjuju svaki prostor.',
  },
  {
    icon: Armchair,
    title: 'Betonski nameštaj',
    description:
      'Klupe, stolovi i urbani mobilijar koji spaja trajnost i dizajn.',
  },
  {
    icon: Building2,
    title: 'Građevinski elementi',
    description:
      'Stubovi, balustrade, ograde, okapnice i stepeništa za vaše objekte.',
  },
  {
    icon: Wrench,
    title: 'Proizvodnja po meri',
    description:
      'Realizujemo vaše ideje u betonu — po vašim nacrtima i željama.',
  },
] as const;

export default function Services() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading subtitle="ŠTA RADIMO" title="Naša ponuda" />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className="group rounded-xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <service.icon className="mb-5 h-10 w-10 text-gold-400 transition-colors duration-300 group-hover:text-gold-500" />
                <h3 className="font-heading text-xl text-stone-800">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-500">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
