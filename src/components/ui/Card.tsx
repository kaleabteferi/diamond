import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden',
        'border border-gray-100',
        hover && 'transition-transform hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}