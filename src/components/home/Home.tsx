import React from 'react';
import Hero from './Hero';
import Features from './Features';
import FeaturedProducts from './FeaturedProducts';
import Values from './Values';

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <FeaturedProducts />
      <Values />
      <Features />
      
    </div>
  );
}