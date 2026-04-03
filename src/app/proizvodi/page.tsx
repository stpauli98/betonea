import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CategoryCard from '@/components/products/CategoryCard';
import { categories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Proizvodi — Betonea',
  description:
    'Katalog dekorativnih betonskih proizvoda. Žardinjere, fontane, skulpture, ograde, stubovi, klupe i mnogo više. Kvalitetan vibro-presovani beton.',
  openGraph: {
    title: 'Naši proizvodi — Betonea',
    description:
      'Katalog dekorativnih betonskih proizvoda. Žardinjere, fontane, skulpture, ograde, stubovi, klupe i mnogo više. Kvalitetan vibro-presovani beton.',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
  },
};

export default function ProizvodiPage() {
  return (
    <>
      <PageHero title="Naši proizvodi" subtitle="KATALOG" />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Početna', href: '/' },
              { label: 'Proizvodi' },
            ]}
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <ScrollReveal key={category.slug} delay={index * 100}>
                <CategoryCard category={category} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
