'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mb-4 break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(index)}
                className="group block w-full overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <img
                  src={image.src}
                  alt={image.caption || ''}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
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
