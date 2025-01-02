import React from 'react';
import { type Product } from '../../types';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={product.images[0]} 
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-red-600">
            {new Intl.NumberFormat('en-ET', {
              style: 'currency',
              currency: 'ETB'
            }).format(product.price)}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        {/* Adjusted margin-bottom to give space between stock and button */}
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
