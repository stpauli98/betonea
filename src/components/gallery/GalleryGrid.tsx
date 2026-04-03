'use client';

import { useState } from 'react';
import type { GalleryImage } from '@/types';
import Lightbox from './Lightbox';

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
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
              src={image.src}
              alt={image.caption || ''}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-[opacity,transform] duration-500 group-hover:scale-105 group-hover:brightness-110"
              loading="lazy"
              onLoad={(e) => {
                const img = e.target as HTMLImageElement;
                img.classList.remove('opacity-0');
                // Stop shimmer once loaded
                const parent = img.parentElement;
                if (parent) parent.style.animation = 'none';
              }}
              onError={(e) => {
                // Hide broken images
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) parent.style.display = 'none';
              }}
            />
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs text-white">{image.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  );
}
