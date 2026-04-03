'use client';

import Link from 'next/link';
import type { Category } from '@/types';

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/proizvodi/${category.slug}`}
      className="group block relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200"
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
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-[opacity,transform] duration-500 group-hover:scale-105"
        onLoad={(e) => {
          const img = e.target as HTMLImageElement;
          img.classList.remove('opacity-0');
          const parent = img.parentElement;
          if (parent) parent.style.animation = 'none';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-heading text-xl text-white">{category.name}</h3>
        <p className="mt-1 text-sm text-stone-300">
          {category.productCount} modela
        </p>
      </div>
    </Link>
  );
}
