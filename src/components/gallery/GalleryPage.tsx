'use client';

import { useState, useMemo } from 'react';
import PageHero from '@/components/ui/PageHero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import GalleryFilter from './GalleryFilter';
import GalleryGrid from './GalleryGrid';
import { galleryImages } from '@/data/gallery';
import { categories } from '@/data/categories';
import type { GalleryImage } from '@/types';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages: GalleryImage[] = useMemo(() => {
    if (activeCategory === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero title="Galerija" subtitle="NAŠI RADOVI" />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Početna', href: '/' },
              { label: 'Galerija' },
            ]}
            className="mb-12"
          />

          <GalleryFilter
            categories={categories.map((c) => ({ name: c.name, slug: c.slug }))}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <div className="mt-8">
            <GalleryGrid images={filteredImages} />
          </div>

          {filteredImages.length === 0 && (
            <p className="mt-12 text-center text-stone-400">
              Nema slika u ovoj kategoriji.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
