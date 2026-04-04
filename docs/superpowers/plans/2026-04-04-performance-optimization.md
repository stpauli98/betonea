# Performance Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Core Web Vitals from Poor/Needs Improvement to Good across all metrics (LCP < 2.5s, CLS < 0.1, FCP < 1.8s).

**Architecture:** Remove framer-motion (131 KB) and replace with CSS animations + IntersectionObserver. Convert all `<img>` tags to Next.js `<Image>` for automatic WebP/AVIF optimization. Remove unnecessary `'use client'` directives to reduce client JS. Fix header CLS flash.

**Tech Stack:** Next.js 16 Image component, CSS @keyframes, IntersectionObserver API, Tailwind CSS v4

---

## File Structure

**Files to modify:**
- `src/components/ui/ScrollReveal.tsx` — rewrite from framer-motion to CSS + IntersectionObserver
- `src/components/home/Hero.tsx` — remove framer-motion, use CSS animations, convert img to Image
- `src/components/home/Testimonials.tsx` — remove framer-motion, use CSS transitions
- `src/components/layout/Header.tsx` — remove framer-motion, fix CLS flash
- `src/components/layout/MobileMenu.tsx` — remove framer-motion, use CSS transitions
- `src/components/layout/WhatsAppButton.tsx` — remove `'use client'`
- `src/components/products/ProductCard.tsx` — remove `'use client'`, convert img to Image
- `src/components/products/CategoryCard.tsx` — remove `'use client'`, convert img to Image
- `src/components/products/ProductGallery.tsx` — convert img to Image
- `src/components/gallery/GalleryGrid.tsx` — convert img to Image
- `src/components/gallery/Lightbox.tsx` — convert img to Image
- `src/components/ui/PageHero.tsx` — convert background-image to Image with priority
- `src/app/globals.css` — add CSS animation keyframes
- `package.json` — remove framer-motion dependency

**Files to create:**
- None

---

### Task 1: Add CSS animation keyframes to globals.css

**Files:**
- Modify: `src/app/globals.css`

These keyframes replace all framer-motion animations used across the site: fade-up (ScrollReveal), fade-in (Hero entrance), slide-in-right (MobileMenu).

- [ ] **Step 1: Add keyframes to globals.css**

Add before the shimmer keyframe at the end of the file:

```css
/* Scroll reveal animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero entrance animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Mobile menu slide */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
```

- [ ] **Step 2: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

Expected: Build passes, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add CSS animation keyframes to replace framer-motion"
```

---

### Task 2: Rewrite ScrollReveal without framer-motion

**Files:**
- Modify: `src/components/ui/ScrollReveal.tsx`

ScrollReveal is the most widely used animated component — imported across ~20 locations. Replace framer-motion's `whileInView` with IntersectionObserver.

- [ ] **Step 1: Rewrite ScrollReveal.tsx**

```tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

Expected: Build passes. All pages using ScrollReveal still render.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/ScrollReveal.tsx
git commit -m "perf: replace framer-motion with IntersectionObserver in ScrollReveal"
```

---

### Task 3: Remove framer-motion from Hero.tsx

**Files:**
- Modify: `src/components/home/Hero.tsx`

Replace framer-motion entrance animation with CSS `fadeInLeft` and `fadeInScale` keyframes. Convert desktop `<img>` to Next.js `<Image priority>`. Convert mobile CSS background-image to `<Image priority>`.

- [ ] **Step 1: Read current Hero.tsx**

Read the full file to understand current structure before rewriting.

- [ ] **Step 2: Rewrite Hero.tsx**

Remove `'use client'` (no longer needed without framer-motion — only the scroll indicator bounce needs client, but that can be CSS too). Replace all `motion.*` elements with regular elements using CSS animation classes. Convert `<img>` to `<Image>` with `priority`. Replace mobile CSS `background-image` with `<Image>`.

Key changes:
- Remove `import { motion } from 'framer-motion'`
- Remove `'use client'`
- Left text content: `style={{ animation: 'fadeInLeft 0.7s ease-out 0.2s both' }}`
- Right image: `<Image src="/images/hero.jpg" priority fill sizes="50vw" className="object-cover" />`
- Mobile background: `<Image src="/images/hero.jpg" priority fill sizes="100vw" className="object-cover lg:hidden" />`
- Scroll indicator bounce: CSS `animation: bounce 1.5s infinite` (Tailwind's `animate-bounce`)

- [ ] **Step 3: Verify build and preview**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 4: Commit**

```bash
git add src/components/home/Hero.tsx
git commit -m "perf: remove framer-motion from Hero, add Image priority for LCP"
```

---

### Task 4: Remove framer-motion from Header.tsx + fix CLS flash

**Files:**
- Modify: `src/components/layout/Header.tsx`

The header uses `motion.header` for background-color animation. Replace with CSS transition (already has `transition-all duration-300` class). Fix the CLS flash where header starts solid then switches to transparent.

- [ ] **Step 1: Read current Header.tsx**

- [ ] **Step 2: Rewrite Header.tsx**

Changes:
- Remove `import { motion } from 'framer-motion'`
- Replace `<motion.header>` with `<header>`
- Remove `initial`, `animate`, `transition` props
- Keep existing Tailwind `transition-all duration-300` for CSS-powered transitions
- The header already uses `cn()` to toggle classes based on `isTransparent` — this works with CSS transitions, no JS animation needed

- [ ] **Step 3: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "perf: remove framer-motion from Header, use CSS transitions"
```

---

### Task 5: Remove framer-motion from MobileMenu.tsx

**Files:**
- Modify: `src/components/layout/MobileMenu.tsx`

Replace `AnimatePresence` + `motion.div` slide-in with CSS `slideInRight` animation.

- [ ] **Step 1: Read current MobileMenu.tsx**

- [ ] **Step 2: Rewrite MobileMenu.tsx**

Changes:
- Remove framer-motion imports
- Replace `AnimatePresence` with conditional rendering
- Replace `motion.div` with `<div>` using CSS animation:
  - When open: `style={{ animation: 'slideInRight 0.3s ease-out both' }}`
  - Overlay backdrop: `style={{ animation: 'fadeIn 0.2s ease-out both' }}`
- Use `hidden` or conditional rendering for closed state

- [ ] **Step 3: Verify build and test mobile menu open/close**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/MobileMenu.tsx
git commit -m "perf: remove framer-motion from MobileMenu, use CSS animations"
```

---

### Task 6: Remove framer-motion from Testimonials.tsx

**Files:**
- Modify: `src/components/home/Testimonials.tsx`

Replace `AnimatePresence` + `motion.div` fade transition with CSS `transition: opacity`.

- [ ] **Step 1: Read current Testimonials.tsx**

- [ ] **Step 2: Rewrite Testimonials.tsx**

Changes:
- Remove framer-motion imports
- Keep `useState` and `useEffect` for auto-rotation (those are needed)
- Replace animated quote card with CSS opacity transition:
  - Use `key={current}` with CSS `animation: fadeIn 0.4s ease-out`
  - Or use absolute positioning with opacity toggle

- [ ] **Step 3: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 4: Commit**

```bash
git add src/components/home/Testimonials.tsx
git commit -m "perf: remove framer-motion from Testimonials, use CSS transitions"
```

---

### Task 7: Remove framer-motion dependency from package.json

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Verify no remaining framer-motion imports**

```bash
grep -r "framer-motion" /Users/nmil/Betonea/src/
```

Expected: No results.

- [ ] **Step 2: Uninstall framer-motion**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm uninstall framer-motion
```

- [ ] **Step 3: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

Expected: Build passes. The 131 KB chunk for framer-motion should be gone.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "perf: remove framer-motion dependency (-131 KB client JS)"
```

---

### Task 8: Convert product/category images to Next.js Image

**Files:**
- Modify: `src/components/products/ProductCard.tsx`
- Modify: `src/components/products/CategoryCard.tsx`
- Modify: `src/components/products/ProductGallery.tsx`

These components use raw `<img>` tags for external betonea.com images. Convert to `<Image>` for automatic WebP/AVIF and responsive srcset. Also remove unnecessary `'use client'` from ProductCard and CategoryCard.

- [ ] **Step 1: Rewrite ProductCard.tsx as server component**

Remove `'use client'`. Replace `<img>` with `<Image>`. Remove shimmer ref/onLoad pattern (Next.js Image handles loading states via `placeholder="empty"` and built-in lazy loading).

```tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';

type ProductCardProps = {
  product: Product;
  categorySlug: string;
};

export default function ProductCard({ product, categorySlug }: ProductCardProps) {
  return (
    <Link href={`/proizvodi/${categorySlug}/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-stone-200">
        <Image
          src={product.images?.[0] || `/images/products/${categorySlug}/${product.slug}-1.jpg`}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-stone-800">{product.name}</h3>
        {product.price ? (
          <p className={product.price === 'Na upit' ? 'mt-1 text-sm text-stone-400' : 'mt-1 text-sm text-gold-400'}>
            {product.price}
          </p>
        ) : (
          <p className="mt-1 text-sm text-stone-400">Na upit</p>
        )}
        {product.dimensions && (
          <p className="mt-1 text-sm text-stone-400">{product.dimensions}</p>
        )}
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Rewrite CategoryCard.tsx as server component**

Remove `'use client'`. Replace `<img>` with `<Image>`.

```tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/types';

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/proizvodi/${category.slug}`} className="group block overflow-hidden rounded-xl">
      <div className="relative aspect-[4/3] bg-stone-200">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="font-heading text-xl text-white">{category.name}</h3>
          <span className="mt-1 inline-block rounded-full bg-black/30 px-2 py-0.5 text-xs text-stone-200 backdrop-blur-sm">
            {category.productCount} modela
          </span>
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 3: Update ProductGallery.tsx img tags to Image**

Read the file first. Replace all `<img>` tags (main image, thumbnails, lightbox) with `<Image>`. Keep `'use client'` since it uses useState.

- [ ] **Step 4: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 5: Commit**

```bash
git add src/components/products/ProductCard.tsx src/components/products/CategoryCard.tsx src/components/products/ProductGallery.tsx
git commit -m "perf: convert product images to next/image, remove unnecessary use client"
```

---

### Task 9: Convert gallery images to Next.js Image

**Files:**
- Modify: `src/components/gallery/GalleryGrid.tsx`
- Modify: `src/components/gallery/Lightbox.tsx`

- [ ] **Step 1: Update GalleryGrid.tsx**

Replace `<img>` with `<Image fill>` inside the aspect-square container. Remove shimmer ref/onLoad pattern.

- [ ] **Step 2: Update Lightbox.tsx**

Replace `<img>` with `<Image>` for the main lightbox image. Use `fill` with `object-contain` for the centered display.

- [ ] **Step 3: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 4: Commit**

```bash
git add src/components/gallery/GalleryGrid.tsx src/components/gallery/Lightbox.tsx
git commit -m "perf: convert gallery images to next/image for WebP optimization"
```

---

### Task 10: Convert PageHero background-image to Next.js Image

**Files:**
- Modify: `src/components/ui/PageHero.tsx`

PageHero currently uses CSS `background-image` via inline style, which is invisible to the browser's preload scanner and cannot be optimized by Next.js.

- [ ] **Step 1: Rewrite PageHero.tsx**

Replace the background-image div with `<Image fill priority>`:

```tsx
import Image from 'next/image';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: 'full' | 'medium';
  children?: React.ReactNode;
};

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  height = 'medium',
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative flex items-center justify-center overflow-hidden -mt-16 lg:-mt-20',
        height === 'full' ? 'h-screen' : 'min-h-[40vh]',
      )}
    >
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-stone-700" />
      )}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {subtitle && (
          <p className="text-xs uppercase tracking-[0.15em] text-gold-300 mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          {title}
        </h1>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/PageHero.tsx
git commit -m "perf: convert PageHero background to next/image with priority"
```

---

### Task 11: Remove 'use client' from WhatsAppButton

**Files:**
- Modify: `src/components/layout/WhatsAppButton.tsx`

This component has no hooks, no state, no event listeners. It just renders an `<a>` tag.

- [ ] **Step 1: Remove 'use client' directive**

Delete line 1 (`'use client'`) from the file. Nothing else changes.

- [ ] **Step 2: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/WhatsAppButton.tsx
git commit -m "perf: remove unnecessary use client from WhatsAppButton"
```

---

### Task 12: Deduplicate images and clean up

**Files:**
- Modify: `public/images/` (remove duplicates)

- [ ] **Step 1: Remove duplicate files**

```bash
rm public/images/about-radionica.jpg    # duplicate of about/radionica.jpg
rm public/images/about-radionica.svg    # old SVG placeholder
rm -rf public/images/about/             # use about-hero.jpg and about-preview.jpg directly
```

- [ ] **Step 2: Verify no broken references**

```bash
grep -r "about-radionica\|about/radionica" src/
```

If any references found, update them. Expected: none (already updated in earlier commits).

- [ ] **Step 3: Remove old SVG placeholders if still present**

```bash
find public/images -name "*.svg" -not -name "og-default.svg" -not -name "logo*.svg" | head -20
```

If placeholder SVGs remain, remove them — all images are now JPG/PNG.

- [ ] **Step 4: Verify build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1 | grep -E "error|✓"
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove duplicate images and old SVG placeholders"
```

---

### Task 13: Final verification

- [ ] **Step 1: Full build**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run build 2>&1
```

Expected: 376 pages, no errors, no warnings.

- [ ] **Step 2: Check client bundle for framer-motion**

```bash
grep -r "framer" .next/static/chunks/ 2>/dev/null | wc -l
```

Expected: 0 — framer-motion completely removed.

- [ ] **Step 3: Compare bundle sizes**

```bash
du -sh .next/static/chunks/
```

Expected: Noticeably smaller than pre-optimization (~700 KB vs ~833 KB before).

- [ ] **Step 4: Start dev server and spot-check**

```bash
export PATH="/opt/homebrew/bin:$PATH" && npm run dev -- --port 3001
```

Check in browser:
- Homepage hero loads fast with visible image
- ScrollReveal animations still work on scroll
- Mobile menu opens/closes with slide animation
- Testimonials carousel auto-rotates
- Product images load as WebP in browser DevTools Network tab
- Gallery lightbox works

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "perf: final verification — all optimizations complete"
```
