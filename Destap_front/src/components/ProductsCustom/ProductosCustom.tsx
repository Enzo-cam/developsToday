"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/product";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import useStore from "@/store/cart/cart-store";

interface Props {
  prod: IProduct;
}

export function ProductsCustom({ prod }: Props) {
  const { addToCart, reduceQuantity, cart } = useStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    reduceQuantity: state.reduceQuantity,
  }));
  const [quantity, setQuantity] = useState(prod.quantity || 0);
  const [animate, setAnimate] = useState(false);

  const onAddToCart = () => {
    setQuantity((prev) => prev + 1);
    addToCart(prod);
    triggerAnimation();
  };

  const onRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      reduceQuantity(prod.id);
      triggerAnimation();
    }
  };

  useEffect(() => {
    const productInCart = cart.find((item) => item.id === prod.id);
    if (productInCart) {
      setQuantity(productInCart.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart, prod.id]);

  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100);
  };

  const animationClass = animate ? "animate-scale-pop" : "";

  return (
    <div >
      <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center bg-[#1f2020] rounded-lg p-3">
        <Link href={`/product/${prod.name}`} className="col-span-2 contents">
          <div className="relative w-16 h-16 overflow-hidden rounded-lg">
            <Image
              src={prod.image || "/destapBirra.png"}
              alt={prod.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[#30E584] text-lg font-semibold">{prod.name}</h3>
            <p className="text-gray-400 text-sm">{prod.description}</p>
            <p className="text-white font-bold mt-1">${prod.price.toFixed(2)}</p>
          </div>
        </Link>
        <div className="flex items-center justify-center">
          {quantity === 0 ? (
            <button
              className="bg-[#30E584] text-black p-2 rounded-full transition-all duration-200"
              onClick={onAddToCart}
            >
              <Plus size={24} />
            </button>
          ) : (
            <div className="flex items-center bg-[#2F2F31] rounded-full p-1">
              <button
                className="text-[#D9D9D9] p-1"
                onClick={onRemoveFromCart}
              >
                <Minus size={20} />
              </button>
              <p className={`mx-2 text-[#30E584] font-bold ${animationClass}`}>{quantity}</p>
              <button
                className="text-[#D9D9D9] p-1"
                onClick={onAddToCart}
              >
                <Plus size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full border-t border-[#A6A6A61F] mt-4" />
    </div>
  );
}
