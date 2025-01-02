import React, { useState } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { type Product } from '../../types';
import { useCart } from '../../hooks/useCart';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id);
    setNotification(true);
    setTimeout(() => setNotification(false), 3000); // Notification disappears after 3 seconds
  };

  return (
    <div className="relative">
      <button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`w-full flex items-center justify-center space-x-3 px-6 py-3 rounded-md text-white transition-all duration-300 shadow-md ${
          product.inStock
            ? 'bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="font-semibold text-lg">Add to Cart</span>
      </button>

      {notification && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-6 w-max bg-green-100 border border-green-500 text-green-700 rounded-md px-4 py-2 flex items-center space-x-2 animate-slide-down">
          <CheckCircle className="h-5 w-5" />
          <span>Item added to cart successfully!</span>
        </div>
      )}
    </div>
  );
}
