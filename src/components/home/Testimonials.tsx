'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          subtitle="UTISCI KLIJENATA"
          title="Sta kazu nasi klijenti"
        />

        <div className="relative mt-14 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center"
            >
              <Quote className="mx-auto mb-6 h-10 w-10 text-gold-300" />
              <p className="text-lg italic leading-relaxed text-stone-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="font-heading font-medium text-stone-800">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-stone-400">
                  {testimonial.location}
                  {testimonial.company && ` — ${testimonial.company}`}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Prikazi utisak ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-8 bg-gold-400'
                  : 'w-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
