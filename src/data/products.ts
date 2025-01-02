import { type Product } from '../types';

export const products: Product[] = [
  // TVs
  {
    id: 'tv-1',
    name: 'Premium 65" 4K QLED Smart TV',
    category: 'TV',
    brand: 'Samsung',
    price: 159999,
    description: 'Experience stunning picture quality with Quantum Dot technology, delivering a billion shades of color. This premium TV features AI-powered 4K upscaling, Object Tracking Sound, and a powerful 4K processor.',
    shortDescription: 'Flagship 65" QLED with revolutionary picture quality',
    features: [
      'Quantum Processor 4K',
      'Object Tracking Sound',
      'Motion Xcelerator Turbo+',
      'Gaming Hub',
      'Multi View'
    ],
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Screen Size': '65 inches',
      'Resolution': '3840 x 2160 (4K)',
      'Refresh Rate': '120Hz',
      'HDR': 'Quantum HDR 1500',
      'Smart TV': 'Tizen OS',
      'Connectivity': 'Wi-Fi 6, Bluetooth 5.2',
      'HDMI Ports': '4 (HDMI 2.1)',
      'USB Ports': '2'
    },
    warranty: {
      duration: '2 years',
      coverage: 'Parts and labor, including panel'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        userName: 'Abebe K.',
        rating: 5,
        comment: 'Amazing picture quality and smart features. Worth every penny!',
        date: '2024-02-15',
        verified: true
      }
    ]
  },
  {
    id: 'tv-2',
    name: '55" Crystal UHD Smart TV',
    category: 'TV',
    brand: 'Samsung',
    price: 89999,
    description: 'Crystal clear viewing experience with Dynamic Crystal Color and powerful 4K upscaling. Features a slim design and advanced gaming capabilities.',
    shortDescription: 'Crystal clear 55" display with smart features',
    features: [
      'Crystal Processor 4K',
      'Dynamic Crystal Color',
      'Adaptive Sound',
      'Game Enhancer'
    ],
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '3840 x 2160 (4K)',
      'Refresh Rate': '60Hz',
      'HDR': 'HDR10+',
      'Smart TV': 'Tizen OS',
      'Connectivity': 'Wi-Fi 5, Bluetooth 4.2',
      'HDMI Ports': '3',
      'USB Ports': '2'
    },
    warranty: {
      duration: '2 years',
      coverage: 'Parts and labor'
    },
    rating: 4.6,
    reviews: []
  },
  {
    id: 'tv-3',
    name: '43" Full HD Smart TV',
    category: 'TV',
    brand: 'LG',
    price: 49999,
    description: 'Perfect for medium-sized rooms, this Full HD TV delivers vibrant colors and smart features at an affordable price.',
    shortDescription: 'Affordable smart TV with excellent picture quality',
    features: [
      'Full HD Resolution',
      'WebOS Smart Platform',
      'AI Sound',
      'Screen Share'
    ],
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Screen Size': '43 inches',
      'Resolution': '1920 x 1080',
      'Refresh Rate': '60Hz',
      'Smart TV': 'WebOS',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'HDMI Ports': '2',
      'USB Ports': '1'
    },
    warranty: {
      duration: '1 year',
      coverage: 'Parts and labor'
    },
    rating: 4.4,
    reviews: []
  },
  {
    id: 'tv-4',
    name: '75" Neo QLED 8K Smart TV',
    category: 'TV',
    brand: 'Samsung',
    price: 299999,
    description: 'The ultimate viewing experience with revolutionary 8K resolution and Mini LED technology.',
    shortDescription: 'Premium 8K TV with cutting-edge technology',
    features: [
      'Neural Quantum Processor 8K',
      'Quantum Matrix Technology',
      'Infinity Screen',
      'Real 8K Resolution'
    ],
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Screen Size': '75 inches',
      'Resolution': '7680 x 4320 (8K)',
      'Refresh Rate': '120Hz',
      'HDR': 'Quantum HDR 3000',
      'Smart TV': 'Tizen OS',
      'Connectivity': 'Wi-Fi 6E, Bluetooth 5.2',
      'HDMI Ports': '4 (HDMI 2.1)',
      'USB Ports': '3'
    },
    warranty: {
      duration: '2 years',
      coverage: 'Parts and labor, including panel'
    },
    rating: 4.9,
    reviews: []
  },
  {
    id: 'tv-5',
    name: '32" HD Smart TV',
    category: 'TV',
    brand: 'LG',
    price: 29999,
    description: 'Compact and smart, perfect for bedrooms or small living spaces.',
    shortDescription: 'Compact smart TV for smaller spaces',
    features: [
      'HD Resolution',
      'WebOS Smart Platform',
      'Virtual Surround Sound',
      'Screen Share'
    ],
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Screen Size': '32 inches',
      'Resolution': '1366 x 768',
      'Refresh Rate': '60Hz',
      'Smart TV': 'WebOS',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'HDMI Ports': '2',
      'USB Ports': '1'
    },
    warranty: {
      duration: '1 year',
      coverage: 'Parts and labor'
    },
    rating: 4.3,
    reviews: []
  },

  // Speakers
  {
    id: 'spk-1',
    name: 'Premium Soundbar with Wireless Subwoofer',
    category: 'Speaker',
    brand: 'Samsung',
    price: 34999,
    description: 'Transform your home entertainment with this premium soundbar system. Features Dolby Atmos support, wireless subwoofer, and AI Sound optimization.',
    shortDescription: 'Premium soundbar with Dolby Atmos',
    features: [
      'Dolby Atmos / DTS:X',
      'Wireless Subwoofer',
      'AI Sound Optimization',
      'Bluetooth Connectivity',
      'SpaceFit Sound Calibration'
    ],
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Total Power': '630W',
      'Channels': '7.1.2',
      'Wireless': 'Bluetooth 5.0',
      'Subwoofer': 'Wireless 8"',
      'Connectivity': 'HDMI eARC, Optical, Bluetooth',
      'Voice Control': 'Alexa, Google Assistant'
    },
    warranty: {
      duration: '1 year',
      coverage: 'Parts and labor'
    },
    rating: 4.7,
    reviews: []
  },
  {
    id: 'spk-2',
    name: 'Portable Bluetooth Speaker',
    category: 'Speaker',
    brand: 'JBL',
    price: 4999,
    description: 'Waterproof portable speaker with powerful bass and long battery life.',
    shortDescription: 'Portable waterproof speaker',
    features: [
      'IPX7 Waterproof',
      '12 Hours Battery Life',
      'Built-in Powerbank',
      'PartyBoost Feature'
    ],
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Power': '20W',
      'Battery': '7500mAh',
      'Waterproof': 'IPX7',
      'Bluetooth': '5.1',
      'Charging': 'USB-C'
    },
    warranty: {
      duration: '1 year',
      coverage: 'Parts and labor'
    },
    rating: 4.5,
    reviews: []
  },
  {
    id: 'spk-3',
    name: 'Home Theater System',
    category: 'Speaker',
    brand: 'Sony',
    price: 89999,
    description: 'Complete 7.1.2 channel home theater system with Dolby Atmos and wireless rear speakers.',
    shortDescription: 'Premium home theater system',
    features: [
      'Dolby Atmos',
      'Wireless Rear Speakers',
      '4K HDR Pass-through',
      'Voice Control'
    ],
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Total Power': '1000W',
      'Channels': '7.1.2',
      'Subwoofer': '10" Powered',
      'HDMI Ports': '4',
      'Bluetooth': '5.0'
    },
    warranty: {
      duration: '2 years',
      coverage: 'Parts and labor'
    },
    rating: 4.8,
    reviews: []
  },
  {
    id: 'spk-4',
    name: 'Smart Speaker with Voice Assistant',
    category: 'Speaker',
    brand: 'Google',
    price: 7999,
    description: 'Smart speaker with Google Assistant and room-filling sound.',
    shortDescription: 'Smart speaker with voice control',
    features: [
      'Google Assistant',
      'Multi-room Audio',
      'Voice Match',
      'Chromecast Built-in'
    ],
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Power': '30W',
      'Wi-Fi': '802.11ac',
      'Bluetooth': '5.0',
      'Far-field Mics': '3'
    },
    warranty: {
      duration: '1 year',
      coverage: 'Parts and labor'
    },
    rating: 4.4,
    reviews: []
  },
  {
    id: 'spk-5',
    name: 'Professional DJ Speakers',
    category: 'Speaker',
    brand: 'Pioneer',
    price: 149999,
    description: 'Professional-grade powered speakers perfect for DJs and live performances.',
    shortDescription: 'Professional DJ speakers',
    features: [
      'Class D Amplification',
      'DSP Processing',
      'Balanced Inputs',
      'LED Indicators'
    ],
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    specifications: {
      'Power': '2000W Peak',
      'Woofer': '15"',
      'Tweeter': '1.75"',
      'Inputs': 'XLR, RCA'
    },
    warranty: {
      duration: '3 years',
      coverage: 'Parts and labor'
    },
    rating: 4.9,
    reviews: []
  }
];