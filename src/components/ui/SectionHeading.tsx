import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  subtitle: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <p className="text-xs uppercase tracking-[0.15em] text-gold-300 mb-3">
        {subtitle}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl text-stone-800">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-stone-500 max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
