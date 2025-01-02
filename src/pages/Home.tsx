import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Values from '../components/home/Values';
import Features from '../components/home/Features';

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