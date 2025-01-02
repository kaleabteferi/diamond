import React from 'react';
import { companyHistory } from '../../data/about';

export default function CompanyHistory() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">{companyHistory.story}</p>
      </div>
    </div>
  );
}