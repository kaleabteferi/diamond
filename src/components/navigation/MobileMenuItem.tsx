import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import type { LucideIcon } from 'lucide-react';

interface MobileMenuItemProps {
  to: string;
  icon?: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function MobileMenuItem({ 
  to, 
  icon: Icon, 
  isActive, 
  onClick, 
  children 
}: MobileMenuItemProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'flex items-center justify-center gap-2',
        'min-h-[56px] px-4 py-3', // Increased touch target
        'text-base font-medium rounded-md',
        'transition-colors duration-200',
        'active:scale-95 transform',
        isActive
          ? 'bg-primary text-white'
          : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
      )}
    >
      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
      {children}
    </Link>
  );
}