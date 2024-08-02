import {create} from "zustand";
import {persist, createJSONStorage } from "zustand/middleware" 
import type { IProduct } from "@/interfaces/product";

interface StoreProduct {
  id: string;
  name: string;
  description: string;
  src: string;
  quantity: number;
  price: number;
}

interface State {
  cart: StoreProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  reduceQuantity: (id: string) => void; // Update the parameter type to string
  getTotalItems: () => number;
  // getItemQuantity: (id: string) => number;
}

const useStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: IProduct) => {
        const { cart } = get();
        const existingProduct = cart.find(prod => prod.id === product.id);
        if (existingProduct) {
          set({
            cart: cart.map(prod =>
              prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
            ),
          });
        } else {
          set({
            cart: [...cart, { id: product.id, name: product.name, description: product.description, src: product.src, quantity: 1, price: product.price}],
          });
        }
      },
      reduceQuantity: (id: string) => {
        const { cart } = get();
        const product = cart.find(prod => prod.id === id);
        if (product) {
          if (product.quantity > 1) {
            set({
              cart: cart.map(prod =>
                prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
              ),
            });
          } else {
            set({ cart: cart.filter(prod => prod.id !== id) });
          }
        }
      },
      removeFromCart: (id: string) => set(state => ({ cart: state.cart.filter(prod => prod.id !== id) })),
      clearCart: () => set({ cart: [] }),
      getTotalItems: () => get().cart.reduce((acc, prod) => acc + prod.quantity, 0),
      // getItemQuantity: (id: string) => get().cart.find(prod => prod.id === id)?.quantity || 0,
    }),
      {
        name: "cart-store",  // Name of the storage item
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      }
    )
);

export default useStore;
