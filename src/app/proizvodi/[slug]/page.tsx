import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProductCard from '@/components/products/ProductCard';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { cn } from '@/lib/utils';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: 'Kategorija nije pronađena — Betonea' };
  }

  return {
    title: `${category.name} — Betonea`,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <PageHero title={category.name} subtitle={category.description} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Početna', href: '/' },
              { label: 'Proizvodi', href: '/proizvodi' },
              { label: category.name },
            ]}
            className="mb-8"
          />

          {/* Mobile: horizontal scrollable category filter */}
          <div className="mb-8 -mx-6 px-6 lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
              {categories.map((cat) => {
                const isActive = cat.slug === slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/proizvodi/${cat.slug}`}
                    className={cn(
                      'shrink-0 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors duration-200',
                      isActive
                        ? 'bg-gold-400 font-medium text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200',
                    )}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Desktop sidebar */}
            <aside className="hidden shrink-0 lg:block lg:w-64">
              <nav>
                <h2 className="mb-4 font-heading text-lg text-stone-800">
                  Kategorije
                </h2>
                <ul className="space-y-1">
                  {categories.map((cat) => {
                    const isActive = cat.slug === slug;
                    return (
                      <li key={cat.slug}>
                        <Link
                          href={`/proizvodi/${cat.slug}`}
                          className={cn(
                            'block rounded-lg px-3 py-2 text-sm transition-colors duration-200',
                            isActive
                              ? 'bg-gold-50 font-medium text-gold-400'
                              : 'text-stone-600 hover:bg-stone-50 hover:text-stone-800',
                          )}
                        >
                          {cat.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {categoryProducts.length > 0 ? (
                <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product, index) => (
                    <ScrollReveal key={product.slug} delay={Math.min(index, 5) * 80}>
                      <ProductCard
                        product={product}
                        categorySlug={slug}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <p className="text-stone-400">
                  Trenutno nema proizvoda u ovoj kategoriji.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
