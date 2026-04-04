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
        <Image src={backgroundImage} alt="" fill priority sizes="100vw" className="object-cover" />
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
