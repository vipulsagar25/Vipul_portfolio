'use client';

import { cn } from '@/lib/utils';
import { MagneticButton } from './MagneticButton';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  className?: string;
  magnetic?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  magnetic = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300';

  const variants = {
    primary: 'bg-[#00F050] text-[#0a0a0a] hover:bg-white hover:-translate-y-0.5',
    secondary: 'border border-white/20 text-white hover:border-[#00F050] hover:text-[#00F050]',
    ghost: 'text-white hover:text-[#00F050]',
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (magnetic && (href || onClick)) {
    return (
      <MagneticButton href={href} className={combinedClassName} as={href ? 'a' : 'button'} onClick={onClick}>
        {children}
      </MagneticButton>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
