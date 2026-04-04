'use client';

import { useEffect, useCallback, useState } from 'react';
import NextImage from 'next/image';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import type { GalleryImage } from '@/types';

type LightboxProps = {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const image = images[currentIndex];
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset loaded state when image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  // Preload adjacent images
  useEffect(() => {
    const preload = (index: number) => {
      if (index >= 0 && index < images.length) {
        const img = new Image();
        img.src = images[index].src;
      }
    };
    preload(currentIndex - 1);
    preload(currentIndex + 1);
  }, [currentIndex, images]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Zatvori"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Previous arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Prethodna slika"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Sledeća slika"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Image container */}
      <div
        className="flex flex-col items-center gap-4 px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading spinner */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-white/50" />
          </div>
        )}

        <div className="relative h-[85vh] w-full max-w-5xl">
          <NextImage
            key={image.src}
            src={image.src}
            alt={image.caption || ''}
            fill
            sizes="100vw"
            className={`object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Caption + Counter */}
        <div className={`text-center transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {image.caption && (
            <p className="text-sm text-white/80">{image.caption}</p>
          )}
          <p className="mt-1 text-xs text-white/50">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
