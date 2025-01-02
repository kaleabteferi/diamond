import React from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { cn } from '../../utils/cn';
import MobileMenuItem from './MobileMenuItem';
import { navigation } from '../../config/navigation';
import { useCart } from '../../hooks/useCart';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      
      <div
        className={cn(
          'fixed inset-x-0 top-16 bg-white',
          'transform transition-transform duration-300 ease-out',
          'p-4 shadow-lg'
        )}
        onClick={e => e.stopPropagation()}
      >
        <nav className="space-y-2">
          {navigation.map((item) => (
            <MobileMenuItem
              key={item.name}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={onClose}
            >
              {item.name}
            </MobileMenuItem>
          ))}
          
          <MobileMenuItem
            to="/cart"
            icon={ShoppingCart}
            onClick={onClose}
          >
            Cart {itemCount > 0 && `(${itemCount})`}
          </MobileMenuItem>
        </nav>
      </div>
    </div>
  );
}