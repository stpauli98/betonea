export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Product {
  name: string;
  slug: string;
  categorySlug: string;
  description?: string;
  price?: string;
  dimensions?: string;
  weight?: string;
  material?: string;
  images: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  company?: string;
  quote: string;
}

export interface GalleryImage {
  src: string;
  category: string;
  caption?: string;
}
