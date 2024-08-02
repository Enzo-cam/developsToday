"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IProduct } from "@/interfaces/product";
import useStore from "@/store/cart/cart-store";
import { Minus, Plus } from "lucide-react";


interface Props {
  product: IProduct;
}

const CardProd = ({ product }: Props) => {
  const { addToCart, reduceQuantity, cart } = useStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    reduceQuantity: state.reduceQuantity,
  }));


  useEffect(() => {
      // Buscar el producto en el carrito y actualizar la cantidad local
      const productInCart = cart.find(item => item.id === product.id);
      if (productInCart) {
        setQuantity(productInCart.quantity);
      } else {
        setQuantity(0);
      }
    }, [cart, product.id]);  

    
  const [animate, setAnimate] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const onAddToCart = () => {
    setQuantity((prev) => prev + 1);
    addToCart(product);
    triggerAnimation();
  };

  const onRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      reduceQuantity(product.id);
      triggerAnimation();
    }
  };

  // Dependencias para reaccionar a cambios en el carrito y en el ID del producto


  const triggerAnimation = () => {
    setAnimate(true);
    // Reset animation
    setTimeout(() => setAnimate(false), 100);
  };

  const animationClass = animate ? "animate-scale-pop" : "";

  return (
    <div className="grid grid-cols-4 items-center border-b-2 pb-3 border-b-zinc-700 w-96 mx-auto">
      <div className="col-span-1">
        <Image
          src={product.image || "/productCard.svg"}
          alt={product.name}
          width={62}
          height={62}
          className="rounded-lg"
        />
      </div>
  
      <div className="col-span-2 gap-1 flex flex-col text-wrap">
        <p className="font-medium text-[#30E584]">{product.name}</p>
        <p className="text-white text-xs">{product.subName}</p>
        <p className="font-medium text-white">${product.price.toFixed(2)}</p>
      </div>
  
      <div className="col-span-1 flex items-center justify-end space-x-1">
        <button 
          onClick={onRemoveFromCart} 
          className="px-3 py-1 rounded text-[#D9D9D9]"
        >
          -
        </button>
        <p className={`text-[#30E584] font-bold w-4 text-center ${animationClass}`}>{quantity}</p>
        <button 
          onClick={onAddToCart} 
          className="px-3 py-1 rounded text-[#D9D9D9]"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CardProd;
