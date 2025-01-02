import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import AddToCartButton from './AddToCartButton';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.shortDescription}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-red-600">
              {new Intl.NumberFormat('en-ET', {
                style: 'currency',
                currency: 'ETB'
              }).format(product.price)}
            </div>
            <div className={`px-4 py-2 rounded-full ${
              product.inStock 
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>

          <AddToCartButton product={product} />

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="text-gray-600">{key}:</dt>
                  <dd className="font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Warranty</h2>
            <p className="text-gray-600">
              {product.warranty.duration} warranty covering {product.warranty.coverage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}