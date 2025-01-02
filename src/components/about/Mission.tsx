import React from 'react';
import { missionStatement } from '../../data/about';

export default function Mission() {
  return (
    <div className="bg-red-600 text-white py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl leading-relaxed">{missionStatement}</p>
      </div>
    </div>
  );
}