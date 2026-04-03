'use client';

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
      <div
        className="aspect-square overflow-hidden rounded-lg bg-stone-200"
        style={{
          backgroundImage: 'linear-gradient(90deg, #E8E4DD 25%, #F5F3EF 50%, #E8E4DD 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
        }}
      >
        <img
          ref={(el) => {
            if (el && el.complete && el.naturalWidth > 0) {
              el.classList.remove('opacity-0');
              if (el.parentElement) el.parentElement.style.animation = 'none';
            }
          }}
          src={product.images?.[0] || `/images/products/${categorySlug}/${product.slug}-1.jpg`}
          alt={product.name}
          className="h-full w-full object-cover opacity-0 transition-[opacity,transform] duration-500 group-hover:scale-105"
          onLoad={(e) => {
            const img = e.target as HTMLImageElement;
            img.classList.remove('opacity-0');
            const parent = img.parentElement;
            if (parent) parent.style.animation = 'none';
          }}
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
