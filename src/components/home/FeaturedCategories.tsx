import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const featured = categories.slice(0, 6);

export default function FeaturedCategories() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          subtitle="PROIZVODI"
          title="Istražite našu ponudu"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((category, index) => (
            <ScrollReveal key={category.slug} delay={index * 100}>
              <Link
                href={`/proizvodi/${category.slug}`}
                className="group block overflow-hidden rounded-xl"
              >
                <div
                  className="relative aspect-4/3 overflow-hidden bg-stone-200"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #E8E4DD 25%, #F5F3EF 50%, #E8E4DD 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                  }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-xl text-white">
                      {category.name}
                    </h3>
                    <span className="mt-1 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs text-white/90 backdrop-blur-sm">
                      {category.productCount} modela
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" href="/proizvodi">
            Pogledaj sve proizvode
          </Button>
        </div>
      </div>
    </section>
  );
}
