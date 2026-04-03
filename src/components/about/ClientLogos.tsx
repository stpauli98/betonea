import Image from 'next/image';

const logos = [
  { src: '/images/clients/klient-1.png', alt: 'Klijent' },
  { src: '/images/clients/klient-2.png', alt: 'Klijent' },
  { src: '/images/clients/klient-3.png', alt: 'Klijent' },
  { src: '/images/clients/klient-4.png', alt: 'Klijent' },
  { src: '/images/clients/klient-5.png', alt: 'Klijent' },
  { src: '/images/clients/klient-6.png', alt: 'Klijent' },
];

export default function ClientLogos() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-3 items-center gap-8 md:grid-cols-6 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-12 w-auto object-contain md:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
