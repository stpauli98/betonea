import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { products, getProduct, getProductsByCategory } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProductGallery from '@/components/products/ProductGallery';
import InquiryButton from '@/components/products/InquiryButton';
import ProductCard from '@/components/products/ProductCard';

type PageParams = { slug: string; productSlug: string };

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.categorySlug,
    productSlug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getProduct(productSlug);

  if (!product) {
    return { title: 'Proizvod nije pronadjen' };
  }

  const description = product.dimensions
    ? `${product.name} - ${product.dimensions}. ${product.description ?? ''}`
    : `${product.name}. ${product.description ?? ''}`;

  return {
    title: `${product.name} | Betonea`,
    description: description.trim(),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug, productSlug } = await params;

  const product = getProduct(productSlug);
  if (!product) notFound();

  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  // Build image paths referencing SVGs
  const images =
    product.images.length > 0
      ? product.images.map(
          (_, i) =>
            `/images/products/${product.categorySlug}/${product.slug}-${i + 1}.svg`
        )
      : [`/images/products/${product.categorySlug}/${product.slug}-1.svg`];

  // Related products: same category, exclude current, take up to 4
  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  // Details table rows
  const details: { label: string; value: string }[] = [];
  if (product.dimensions) details.push({ label: 'Dimenzije', value: product.dimensions });
  if (product.weight) details.push({ label: 'Tezina', value: product.weight });
  if (product.material) details.push({ label: 'Materijal', value: product.material });

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Pocetna', href: '/' },
            { label: 'Proizvodi', href: '/proizvodi' },
            { label: category.name, href: `/proizvodi/${category.slug}` },
            { label: product.name },
          ]}
        />
      </div>

      {/* Product section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left: Gallery */}
          <div className="lg:w-3/5">
            <ScrollReveal>
              <ProductGallery images={images} productName={product.name} />
            </ScrollReveal>
          </div>

          {/* Right: Info */}
          <div className="lg:w-2/5">
            <ScrollReveal delay={100}>
              {/* Category link */}
              <Link
                href={`/proizvodi/${category.slug}`}
                className="text-sm font-medium text-gold-400 transition-colors hover:text-gold-500"
              >
                {category.name}
              </Link>

              {/* Product name */}
              <h1 className="mt-2 font-heading text-3xl font-bold text-stone-800 lg:text-4xl">
                {product.name}
              </h1>

              {/* Price */}
              <p className="mt-4 text-xl font-semibold text-gold-400">
                {product.price ?? 'Na upit'}
              </p>

              {/* Details table */}
              {details.length > 0 && (
                <div className="mt-6 divide-y divide-stone-100">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-start justify-between gap-4 py-3"
                    >
                      <span className="text-sm font-medium text-stone-500">
                        {detail.label}
                      </span>
                      <span className="text-right text-sm text-stone-800">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              {product.description && (
                <p className="mt-6 leading-relaxed text-stone-600">
                  {product.description}
                </p>
              )}

              {/* Inquiry buttons */}
              <div className="mt-8">
                <InquiryButton productName={product.name} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-stone-100 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-stone-800">
                Slicni proizvodi
              </h2>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct, index) => (
                <ScrollReveal key={relatedProduct.slug} delay={index * 100}>
                  <ProductCard
                    product={relatedProduct}
                    categorySlug={relatedProduct.categorySlug}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
