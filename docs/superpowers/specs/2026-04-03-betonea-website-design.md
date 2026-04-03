# Betonea.com - Website Design Specification

**Date**: 2026-04-03
**Status**: Draft
**Project**: Static website for Betonea, decorative concrete manufacturer

---

## 1. Context

Betonea is a Serbian manufacturer of decorative concrete products (planters, sculptures, fountains, columns, balustrades, urban furniture). They need a modern static website to showcase ~356 products across 14 categories, targeting both domestic (Serbia) and international clients (Switzerland, Germany).

The site replaces an older WordPress site. All content is in Serbian (Latin script). There is no backend, database, or admin panel — all data lives in TypeScript files, and updates require code edits + redeploy.

---

## 2. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14+ (App Router, SSG) | Static generation, image optimization, Vercel deploy |
| Styling | Tailwind CSS 3.4+ | Custom theme matching brand, utility-first |
| Hosting | Vercel | SSG default, optimized images, auto-deploy from GitHub |
| Forms | EmailJS | Client-side email sending, no backend needed, free tier |
| Animations | Framer Motion (minimal) | Scroll reveals, hover effects |
| Icons | Lucide React | Consistent, tree-shakeable |
| Fonts | Google Fonts: Playfair Display + Inter | Serif headings (premium), sans body (readable) |
| Images | next/image with placeholder blur | WebP, lazy load, responsive |

---

## 3. Architecture

### 3.1 Folder Structure

Follows the specification exactly:

```
betonea/
├── public/
│   ├── images/
│   │   ├── hero.jpg (placeholder)
│   │   ├── logo.png (placeholder)
│   │   ├── logo-white.png (placeholder)
│   │   ├── og-image.jpg (placeholder)
│   │   ├── categories/      # Category cover images
│   │   ├── products/         # Product images by category
│   │   ├── gallery/          # Gallery images by category
│   │   └── clients/          # Client logos
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/                  # Pages (App Router)
│   ├── components/           # React components
│   ├── data/                 # All data (TypeScript)
│   ├── lib/                  # Utilities
│   └── types/                # TypeScript types
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

### 3.2 Data Layer

All data in `src/data/` as TypeScript exports:
- `categories.ts` — 14 categories with name, slug, description, image, productCount
- `products.ts` — All products with helper functions (getProductsByCategory, getProduct, getFeaturedProducts)
- `testimonials.ts` — 3 client testimonials
- `gallery.ts` — Gallery images with category filtering
- `site.ts` — Contact info, working hours, social links, stats

Initial data: 14 categories, 3-5 placeholder products per category (~50-70 total), expandable to 356.

### 3.3 Types

```typescript
Category { name, slug, description, image, productCount }
Product { name, slug, categorySlug, description?, price?, dimensions?, weight?, material?, images[], isFeatured? }
Testimonial { name, location, company?, quote }
GalleryImage { src, category, caption? }
```

---

## 4. Design System

### 4.1 Colors

- **Stone**: 50-900 (warm grays — `#FAF9F7` to `#1A1612`)
- **Gold**: 50-600 (accent — primary `#D4B96E`, CTA `#C4A44E`)
- **Cream**: `#F8F6F0` (alternating section backgrounds)
- **Charcoal**: `#1A1612` (dark text, overlays)

### 4.2 Typography

- **Headings**: Playfair Display, Georgia, serif
- **Body**: Inter, system-ui, sans-serif
- **Labels**: uppercase, tracking-[0.15em], text-gold-300, text-xs

### 4.3 Visual Principles

- Alternating section backgrounds: white → cream → white
- Cards: rounded-xl, hover shadow + scale(1.02) on image
- Whitespace: py-24 (desktop), py-16 (mobile)
- Max-width: 1280px, px-6 (mobile), px-8 (desktop)
- Min tap target: 44px (mobile-first)

---

## 5. Pages

### 5.1 Homepage (`/`)

Six sections:
1. **Hero**: 100vh, background image, overlay bg-charcoal/70, centered "BETONEA" + "Najlepse od betona", gold CTA, scroll indicator
2. **Usluge**: 2x2 grid — decorative elements, concrete furniture, architectural elements, custom products
3. **Sta radimo**: 2 columns (text 60% + image 40%), CTA to products
4. **Istaknute kategorije**: 3-column grid, 6 categories with image + overlay title + count
5. **Testimonijali**: Carousel, 3 reviews, auto-rotate 5s
6. **CTA**: Dark background, headline, button

### 5.2 Products Catalog (`/proizvodi`)

PageHero (40vh) + breadcrumb + 3-column grid of 14 categories (image 4:3, overlay, name + count). Hover: zoom + darker overlay.

### 5.3 Category Page (`/proizvodi/[slug]`)

Breadcrumb + title + description + 3-column product grid (image 1:1, name, price/"Na upit"). Desktop sidebar: category list. Static params from categories.ts.

### 5.4 Product Page (`/proizvodi/[slug]/[productSlug]`)

2 columns: gallery left (60%) + info right (40%).
- Gallery: main image + thumbnails, lightbox on click
- Info: name, category, price/"Na upit", dimensions, description
- CTA buttons: mailto (pre-filled), WhatsApp (pre-filled), tel: link
- Related products: 4 cards from same category
- Static params from products.ts

### 5.5 Gallery (`/galerija`)

PageHero + category filter buttons + masonry grid + lightbox + lazy load.

### 5.6 About (`/o-nama`)

Hero + story section + animated counters (500+ projects, 300+ clients, 25 years, 15 employees) + YouTube embed + client logos.

### 5.7 Contact (`/kontakt`)

Info cards (address, phones, email, hours) + Google Maps embed + EmailJS contact form with fields: name, email, phone, message.

### 5.8 Custom 404

Branded page with link back to homepage.

---

## 6. Key Components

### 6.1 Base UI
- **Button**: primary (gold bg), secondary (outline), size variants
- **SectionHeading**: gold label + serif title pattern
- **PageHero**: reusable hero with overlay, title, breadcrumb
- **Breadcrumb**: navigation links
- **ScrollReveal**: Intersection Observer wrapper, fade-up animation

### 6.2 Layout
- **Header**: sticky, transparent on hero → solid on scroll, desktop nav + mobile hamburger
- **Footer**: 4 columns (about, products, contact, social)
- **MobileMenu**: fullscreen overlay with nav links
- **WhatsAppButton**: fixed bottom-right, green, contextual message

### 6.3 Products
- **CategoryCard**: image + overlay + name + count
- **ProductCard**: image + name + price
- **ProductGallery**: main image + thumbnails + lightbox trigger
- **InquiryButton**: mailto/WhatsApp/tel CTA

### 6.4 Gallery
- **GalleryGrid**: masonry layout with lazy loading
- **GalleryFilter**: category filter buttons
- **Lightbox**: fullscreen, arrows + swipe + ESC, counter, preload adjacent

### 6.5 Contact
- **ContactForm**: EmailJS integration, name/email/phone/message fields
- **Map**: Google Maps embed component

---

## 7. Contact Mechanisms

Three parallel channels:

1. **Email (mailto)**: Pre-filled subject and body with product name
2. **WhatsApp**: Pre-filled message via wa.me/ URL
3. **EmailJS Form**: Client-side form on /kontakt, sends to office@betonea.com

On product pages: all 3 channels available with product context.
On contact page: all 3 channels + Google Maps + working hours.

---

## 8. SEO Strategy

- **generateMetadata** on every page with custom title/description in Serbian
- **JSON-LD**: LocalBusiness schema on homepage
- **sitemap.xml**: Generated via next-sitemap (all categories + products + static pages)
- **robots.txt**: Allow all crawlers
- **OG images**: For social sharing
- **Semantic HTML**: Proper heading hierarchy, nav, main, footer, article elements
- **Performance targets**: Mobile 90+, Desktop 95+, LCP < 2.5s

---

## 9. Placeholder Strategy

Since images are not yet available:
- Generate solid-color placeholder images with category/product names
- Use next/image blur placeholder feature
- Placeholder dimensions match expected final images (4:3 for categories, 1:1 for products)
- Easy swap: just replace files in public/images/ and redeploy

---

## 10. Implementation Phases

Each phase ends with `npm run build` verification.

### Phase 1: Foundation
- Next.js project setup with Tailwind, fonts, design system
- TypeScript types and data files
- Base UI components (Button, SectionHeading, PageHero, Breadcrumb, ScrollReveal)
- Header + Footer + MobileMenu + WhatsAppButton
- Placeholder image generation

### Phase 2: Homepage
- Hero section
- Services grid
- About preview (Sta radimo)
- Featured categories
- Testimonials carousel
- CTA section

### Phase 3: Products
- Products catalog page (/proizvodi)
- Category page with sidebar (/proizvodi/[slug])
- Product detail page with gallery (/proizvodi/[slug]/[productSlug])
- Inquiry buttons (mailto, WhatsApp, tel)
- Related products

### Phase 4: Gallery + Lightbox
- Gallery page with masonry grid
- Category filter
- Lightbox component (fullscreen, arrows, swipe, ESC)

### Phase 5: Remaining Pages
- About page with animated counters + YouTube embed
- Contact page with info cards + Google Maps + EmailJS form
- Custom 404 page

### Phase 6: Polish
- Scroll animations (Framer Motion)
- SEO: metadata, JSON-LD, sitemap, robots.txt
- Performance optimization
- Final QA + build verification

---

## 11. Language & Content

- All user-facing text in Serbian (Latin script)
- No English anywhere on the site
- Text processed through humanizer for natural tone
- Marketing copy written with persuasive but authentic voice

---

## 12. Verification

After each phase:
1. `npm run build` — must pass without errors
2. `npm run dev` — visual check in browser
3. Check for TypeScript errors
4. Verify responsive design (mobile + desktop)
5. Final: Lighthouse audit targeting 90+ mobile, 95+ desktop
