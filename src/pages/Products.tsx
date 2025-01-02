import React, { useState, useMemo } from 'react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { products } from '../data/products';

export default function Products() {
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (category) {
      result = result.filter(product => product.category === category);
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [category, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      
      <ProductFilter
        category={category}
        onCategoryChange={setCategory}
        onSortChange={setSortBy}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}