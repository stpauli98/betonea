'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox();
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, closeLightbox]);

  return (
    <>
      <div className="space-y-4">
        {/* Main image */}
        <div
          className="relative aspect-4/3 overflow-hidden rounded-lg bg-stone-100 cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={images[selectedIndex]}
            alt={`${productName} - slika ${selectedIndex + 1}`}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  'relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all duration-200',
                  index === selectedIndex
                    ? 'border-gold-400 ring-1 ring-gold-400/30'
                    : 'border-stone-200 hover:border-stone-400'
                )}
              >
                <img
                  src={image}
                  alt={`${productName} - mala slika ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox overlay */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Zatvorite pregled"
          >
            <X className="h-6 w-6" />
          </button>

          <img
            src={images[selectedIndex]}
            alt={`${productName} - uvecana slika`}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
