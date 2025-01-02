export interface Product {
  id: string;
  name: string;
  category: 'TV' | 'Speaker';
  brand: string;
  price: number;
  description: string;
  shortDescription: string;
  features: string[];
  images: string[];
  inStock: boolean;
  specifications: Record<string, string>;
  warranty: {
    duration: string;
    coverage: string;
  };
  rating: number;
  reviews: Review[];
  discount?: {
    percentage: number;
    validUntil: string;
  };
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface OrderDetails {
  fullName: string;
  phone: string;
  address: string;
  deliveryOption: 'pickup' | 'delivery';
  items: CartItem[];
  total: number;
  deliveryFee?: number;
}

// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
