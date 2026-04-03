import type { Metadata } from 'next';
import GalleryPage from '@/components/gallery/GalleryPage';

export const metadata: Metadata = {
  title: 'Galerija — Betonea',
  description:
    'Pogledajte naše realizovane projekte. Galerija dekorativnih betonskih proizvoda — žardinjere, fontane, skulpture, ograde i mnogo više.',
};

export default function GalerijaPage() {
  return <GalleryPage />;
}
