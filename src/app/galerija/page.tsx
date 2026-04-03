import type { Metadata } from 'next';
import GalleryPage from '@/components/gallery/GalleryPage';

export const metadata: Metadata = {
  title: 'Galerija — Betonea',
  description:
    'Pogledajte nase realizovane projekte. Galerija dekorativnih betonskih proizvoda — zardinjere, fontane, skulpture, ograde i mnogo vise.',
};

export default function GalerijaPage() {
  return <GalleryPage />;
}
