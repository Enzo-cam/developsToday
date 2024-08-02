'use client'
//TODO: Traer el item desde el BACK 
// --------------

//app/product/[name]/page.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import useStore from "@/store/cart/cart-store";

interface Props {
  params: {
    name: string
  }
}
const productos: IProduct[] = [
  {
    id: "1",
    src: "url-de-la-imagen-1.jpg",
    name: "Cerveza Andes Rubia",
    subName: "Cerveza en lata de 473ml",
    description: "Cerveza Rubia marca Andes, en lata de 473ml",
    price: 100,
    quantity: 0,
  },
  {
    id: "2",
    src: "url-de-la-imagen-2.jpg",
    name: "Fernet Branca",
    subName: "Fernet branca en vaso",
    description: "Infusion de fernet branca con Coca cola en vaso de 473ml",
    price: 200,
    quantity: 0,
  },
  {
    id: "3",
    src: "url-de-la-imagen-3.jpg",
    name: "Medida jaggermeister",
    subName: "Jaggermeister en vaso",
    description: "Medida de jaggermeister en vaso de 473ml con una lata de Speed",
    price: 300,
    quantity: 0,
  },
];

export default function Page({ params }: Props) {
  const { addToCart, reduceQuantity, cart } = useStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    reduceQuantity: state.reduceQuantity,
  }));
  const { name } = params;
  const decodedProductName = decodeURIComponent(name);
  const product = productos.find(prod => prod.name === decodedProductName)
  const [animate, setAnimate] = useState(false);
  const [quantity, setQuantity] = useState(product?.quantity ?? 0);

  useEffect(() => {
    const currentProduct = product ?? { id: '', quantity: 0 };
    // Find the product in the cart and set the quantity
    const productInCart = cart.find((item) => item.id === currentProduct.id);
    if (productInCart) {
      setQuantity(productInCart.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart, product]);


  const onAddToCart = () => {
    setQuantity((prev) => prev + 1);
    if (product) {
      addToCart(product);
    }
    triggerAnimation();
  };

  const onRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      const productId = product?.id ?? '';
      if (productId) {
        reduceQuantity(productId);
        triggerAnimation();
      }
    }
  };

  const triggerAnimation = () => {
    setAnimate(true);
    // Reset animation
    setTimeout(() => setAnimate(false), 100);
  };


  const animationClass = animate ? "animate-scale-pop" : "aaa"; // Replace 'animate-bounce' with your Tailwind or custom animation class

  return (
    <main className="flex flex-col gap-4 px-4 bg-[#181A1B]">
      <h2 className="font-medium text-2xl mb-2 mt-6 ">Detalles del producto</h2>

      <div className="relative border-t-2 border-r-2 border-l-2 items-center rounded-3xl text-white mt-32 p-4 border-b-0 ">
        <div className="-translate-y-1/2">
          <Image
            className="rounded-full"
            src="/destapBirra.png"
            alt="productImage"
            priority
            width={700}
            height={700}
          />
        </div>

        {/* Product details */}
        <div className="-top-72 relative flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">{product?.name}</h3>
          <p className="text-gray-400">{product?.subName}</p>

          <div className="gap-2 text-lg font-medium mt-2">
            <span className="text-green-500 mr-4">${product?.price.toFixed(2)}</span>
            <span className="text-gray-500 line-through">$6000.00</span>
          </div>

          <div className="flex text-lg items-center space-x-2 gap-2">
            <button onClick={onRemoveFromCart} className=" py-1 rounded">
              -
            </button>
            <p className={`${animationClass} text-primary-foreground`}>{quantity}</p>
            <button onClick={onAddToCart} className="mx-2 py-1 rounded">
              +
            </button>
          </div>

          <p className="">{product?.description}</p>
          <p className="text-gray-500 text-sm">
            Precio solo válido por unidad
          </p>
        </div>
      </div>
    </main>
  );
}
