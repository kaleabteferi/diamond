import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: '1',
    name: 'Premium 4K Smart TV',
    category: 'TV',
    price: 89999,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000',
    description: 'Experience stunning 4K resolution and smart features that redefine entertainment.',
  },
  {
    id: '2',
    name: 'Elite Sound System',
    category: 'Speaker',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000',
    description: 'Immerse yourself in crystal-clear sound with our premium speaker system.',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Featured Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">
                    {new Intl.NumberFormat('en-ET', {
                      style: 'currency',
                      currency: 'ETB',
                    }).format(product.price)}
                  </span>
                  <Link
                    to="/products"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
