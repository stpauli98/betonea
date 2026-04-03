import Link from 'next/link';
import { cn } from '@/lib/utils';

const variantStyles = {
  primary: 'bg-gold-400 text-white hover:bg-gold-500',
  secondary: 'bg-stone-800 text-white hover:bg-stone-700',
  outline: 'border-2 border-gold-300 text-gold-400 hover:bg-gold-50',
} as const;

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const;

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-block rounded-lg uppercase tracking-wide font-medium transition-colors duration-200',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
