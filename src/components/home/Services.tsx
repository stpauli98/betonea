import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = [
  {
    number: '01',
    title: 'Dekorativni elementi od betona',
    description:
      'Unikatni detalji koji oplemenjuju eksterijer i enterijer, spajajući estetiku i trajnost.',
  },
  {
    number: '02',
    title: 'Betonski nameštaj',
    description:
      'Moderni i klasični komadi za dvorište ili poslovni prostor, izrađeni od visokokvalitetnog betona.',
  },
  {
    number: '03',
    title: 'Arhitektonsko-građevinski elementi',
    description:
      'Funkcionalni i estetski betonski proizvodi za objekte — stubovi, balustrade, okapnice, stepeništa.',
  },
  {
    number: '04',
    title: 'Proizvodi po zahtevu kupaca',
    description:
      'Izrada betonskih elemenata po meri i dizajnu — realizujemo vaše ideje u betonu.',
  },
];

export default function Services() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          subtitle="DOBRODOŠLI U SVET BETONSKE GALANTERIJE"
          title="Naše usluge čine nas liderima u betonskoj galanteriji"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-stone-200 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={index * 100}>
              <div className="group relative bg-white p-10 transition-colors duration-300 hover:bg-stone-50">
                <span className="font-heading text-5xl font-bold text-gold-200 transition-colors duration-300 group-hover:text-gold-300">
                  {service.number}
                </span>
                <h3 className="mt-4 font-heading text-xl text-stone-800 uppercase tracking-wide">
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
