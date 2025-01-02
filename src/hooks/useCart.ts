import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type CartItem } from '../types';

interface CartStore {
  items: CartItem[];
  userRegistered: boolean; // Tracks if a user has already submitted their details
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setUserRegistered: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      userRegistered: false,
      addToCart: (productId) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.productId === productId);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { items: [...state.items, { productId, quantity: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      setUserRegistered: () =>
        set(() => ({
          userRegistered: true,
        })),
    }),
    {
      name: 'cart-storage', // Name for localStorage key
    }
  )
);
