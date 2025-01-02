import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  className,
  asChild = false,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-all',
        'hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] active:scale-95',
        'border border-transparent',
        {
          'bg-primary text-white hover:bg-primary/90': variant === 'primary',
          'bg-background text-primary hover:bg-background/90': variant === 'secondary',
          'border-primary text-primary hover:bg-primary/10': variant === 'outline',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}