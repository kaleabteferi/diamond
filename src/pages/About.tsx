import React from 'react';
import Mission from '../components/about/Mission';
import CompanyHistory from '../components/about/CompanyHistory';
import Team from '../components/about/Team';

export default function About() {
  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Dimond™</h1>
          <p className="text-xl text-gray-300">
            Ethiopia's Premier Provider of Premium Entertainment Solutions
          </p>
        </div>
      </div>
      <Mission />
      <CompanyHistory />
      <Team />
    </div>
  );
}