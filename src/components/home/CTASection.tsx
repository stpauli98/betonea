import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="bg-stone-900 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.15em] text-gold-300 mb-3">
            KONTAKTIRAJTE NAS
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">
            Beton koji oblikuje prostor sa stilom
          </h2>
          <p className="mt-4 text-stone-300 leading-relaxed">
            Više od 25 godina stvaramo dekorativne betonske elemente koji spajaju
            trajnost i estetiku. Kontaktirajte nas za besplatnu konsultaciju i
            ponudu prilagođenu vašim potrebama.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" href="/proizvodi">
              Pogledaj proizvode
            </Button>
            <Button
              variant="outline"
              href="/kontakt"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Kontaktirajte nas
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
