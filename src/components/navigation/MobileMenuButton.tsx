import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'md:hidden flex items-center justify-center',
        'w-12 h-12 rounded-full', // 48x48px touch target
        'hover:bg-gray-100 active:bg-gray-200',
        'transition-colors duration-200'
      )}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <X className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
}