import React from 'react';

interface ProductFilterProps {
  category: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

export default function ProductFilter({ 
  category, 
  onCategoryChange, 
  onSortChange 
}: ProductFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="rounded-md border-gray-300 shadow-sm px-4 py-2"
      >
        <option value="">All Products</option>
        <option value="TV">TVs</option>
        <option value="Speaker">Speakers</option>
      </select>

      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-md border-gray-300 shadow-sm px-4 py-2"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}