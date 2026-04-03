import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/site';

const stats = Object.values(siteConfig.stats);

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src="/images/about-preview.jpg"
                alt="Betonea radionica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <SectionHeading
              subtitle="O NAMA"
              title="Dom gde beton poprima oblik umetnosti"
              align="left"
            />
            <p className="mt-6 leading-relaxed text-stone-500">
              Betonea – dom gde beton poprima oblik umetnosti. Naša misija je da
              spojimo trajnost i lepotu. Već godinama stvaramo žardinjere, skulpture,
              stubove i dekorativne elemente koji oplemenjuju dvorišta, vrtove, javne
              prostore i druge eksterijere. Svaki naš proizvod je izrađen ručno i sa
              posebnom pažnjom, uz upotrebu visokokvalitetnih materijala i modernih
              tehnologija.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl text-gold-400">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="mt-1 text-sm text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="outline" href="/o-nama">
                Više o nama
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
