import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';

type ProductCardProps = {
  product: Product;
  categorySlug: string;
};

export default function ProductCard({ product, categorySlug }: ProductCardProps) {
  return (
    <Link
      href={`/proizvodi/${categorySlug}/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-stone-200">
        <Image
          src={product.images?.[0] || `/images/products/${categorySlug}/${product.slug}-1.jpg`}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-stone-800">{product.name}</h3>
        {product.price ? (
          <p
            className={
              product.price === 'Na upit'
                ? 'mt-1 text-sm text-stone-400'
                : 'mt-1 text-sm text-gold-400'
            }
          >
            {product.price}
          </p>
        ) : (
          <p className="mt-1 text-sm text-stone-400">Na upit</p>
        )}
        {product.dimensions && (
          <p className="mt-1 text-sm text-stone-400">{product.dimensions}</p>
        )}
      </div>
    </Link>
  );
}
