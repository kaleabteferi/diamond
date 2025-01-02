import React from 'react';
import { Shield, Star, HeartHandshake } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'We source only the finest TVs and speakers from trusted manufacturers.',
  },
  {
    icon: Star,
    title: 'Affordability',
    description: 'Competitive prices without compromising on quality.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Satisfaction',
    description: 'Dedicated support and service that exceeds expectations.',
  },
];

export default function Values() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
                <value.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}