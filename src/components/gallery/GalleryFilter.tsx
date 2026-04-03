'use client';

import { cn } from '@/lib/utils';

type GalleryFilterProps = {
  categories: { name: string; slug: string }[];
  activeCategory: string;
  onChange: (slug: string) => void;
};

export default function GalleryFilter({
  categories,
  activeCategory,
  onChange,
}: GalleryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onChange('all')}
        className={cn(
          'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
          activeCategory === 'all'
            ? 'bg-gold-400 text-white'
            : 'bg-stone-100 text-stone-600 hover:bg-stone-200',
        )}
      >
        Sve
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className={cn(
            'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
            activeCategory === cat.slug
              ? 'bg-gold-400 text-white'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200',
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
