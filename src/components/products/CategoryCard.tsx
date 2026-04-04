import Image from 'next/image';
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
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
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
