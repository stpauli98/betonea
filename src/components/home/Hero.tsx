import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen -mt-16 lg:-mt-20 overflow-hidden">
      {/* Mobile: fullscreen background image */}
      <Image
        src="/images/hero.jpg"
        alt=""
        priority
        fill
        sizes="100vw"
        className="object-cover lg:hidden"
      />
      <div className="absolute inset-0 bg-stone-900/80 lg:hidden" />

      {/* Desktop: dark left side */}
      <div className="absolute inset-0 hidden bg-stone-900 lg:block" />

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        {/* Left — text content */}
        <div className="flex flex-1 flex-col justify-center px-6 pt-28 pb-20 md:px-12 lg:w-1/2 lg:px-16 xl:px-24 lg:pt-0 lg:pb-0">
          <div style={{ animation: 'fadeInLeft 0.7s ease-out 0.2s both' }}>
            <p className="mb-6 text-xs tracking-[0.25em] text-gold-300 uppercase md:text-sm">
              Dekorativna betonska galanterija
            </p>

            <h1 className="font-heading text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
              Najlepše
              <br />
              <span className="text-gold-300">od betona</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-300 lg:text-stone-400">
              Ručno izrađeni dekorativni elementi koji oplemenjuju svaki prostor — žardinjere, skulpture, fontane, stubovi i mnogo više.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="/proizvodi">
                Pogledaj proizvode
              </Button>
              <Button variant="outline" size="lg" href="/kontakt" className="border-stone-500 text-stone-200 hover:bg-stone-800 hover:text-white">
                <span className="flex items-center gap-2">
                  Kontaktirajte nas
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-14 flex gap-10 border-t border-stone-700 pt-8">
              <div>
                <p className="font-heading text-3xl text-gold-300">500+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-stone-500">Projekata</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-gold-300">25</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-stone-500">Godina</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-gold-300">300+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-stone-500">Klijenata</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — image (desktop only) */}
        <div
          style={{ animation: 'fadeInScale 1s ease-out 0.3s both' }}
          className="relative hidden lg:block lg:w-1/2"
        >
          <div className="relative h-full">
            <Image
              src="/images/hero.jpg"
              alt="Betonea dekorativni betonski elementi"
              priority
              fill
              sizes="50vw"
              className="h-full w-full object-cover"
            />
            {/* Left-edge gradient to blend with dark side */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
    </section>
  );
}
