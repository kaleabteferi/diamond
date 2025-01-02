import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Diamond, ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import Container from './Container';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { cn } from '../../utils/cn';
import { navigation } from '../../config/navigation';
import MobileMenuButton from '../navigation/MobileMenuButton';
import MobileMenu from '../navigation/MobileMenu';

export default function Header() {
  const location = useLocation();
  const { items } = useCart();
  const scrollPosition = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={cn(
        'sticky top-0 z-50',
        'bg-primary backdrop-blur-md',
        'transition-shadow duration-200',
        scrollPosition > 0 && 'shadow-md'
      )}
    >
      <div className="hidden lg:block absolute inset-x-0 bottom-0"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16" > 
        <path fill="#FFD700" /* Golden color for the wave */ 
        d="M0,100 C480,100 960,100 1440,110 C960,80 480,50 0,100 Z" ></path> 
        </svg> 
      </div>
      <Container>
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center group" aria-label="Diamond™ Home">
              <img
                src="/src/assets/diamond-logo.png"
                alt="Diamond™ Logo"
                className="h-48 w-48 transition-transform group-hover:scale-110 object-contain"
              />
            </Link>
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'text-white text-lg font-medium relative',
                    'hover:text-yellow-400 transition-colors duration-200',
                    location.pathname === item.path ? 'text-yellow-400' : 'text-white',
                    'after:absolute after:bottom-0 after:left-0',
                    'after:w-full after:h-0.5 after:bg-yellow-400',
                    'after:scale-x-0 after:origin-right after:transition-transform',
                    'hover:after:scale-x-100 hover:after:origin-left'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Cart Button (Desktop) */}
            <Link
                to="/cart"
                className="hidden md:flex relative p-3 hover:bg-red-700 rounded-full transition-colors"
                aria-label={`Shopping cart${itemCount ? ` with ${itemCount} items` : ''}`}
              >
                <ShoppingCart className="h-6 w-6 text-white" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-700 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

            {/* Mobile Menu Button */}
            <MobileMenuButton 
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </Container>
    </header>
  );
}
