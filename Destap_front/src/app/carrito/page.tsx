"use client";
import React from "react";
import Link from "next/link";
import CardProd from "./components/CardProdCarr";
import { Button } from "@/components/ui/button";
import CalculoTotal from "./components/CalculoTotal";
import { IProduct } from "../../interfaces/product";
import VaciarButton from "./components/VaciarButton";
import useStore from "../../store/cart/cart-store";

const Home: React.FC = () => {
  const { cart } = useStore((state) => ({
    cart: state.cart,
  }));

  const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="font-medium text-2xl mb-6 text-white">No hay items en el carrito</h2>
      <Link href="/">
        <Button className="bg-[#30E584] text-black hover:bg-[#2bc76f]">
          Volver al menú y agregar algo al carrito
        </Button>
      </Link>
    </div>
  );

  const FilledCart = () => (
    <div className="flex flex-col w-full text-white">
      <h2 className="font-medium text-2xl mb-6">Mi carrito</h2>
      <div className="space-y-4 mb-4">
        {cart.map((product) => (
          <CardProd key={product.id} product={product as IProduct} />
        ))}
      </div>
      <VaciarButton />
      <CalculoTotal items={cart}/>
    </div>
  );

  return (
    <main className="flex flex-col bg-[#181A1B] min-h-screen w-full max-w-md mx-auto px-4 py-6">
      {cart.length === 0 ? <EmptyCart /> : <FilledCart />}
      
      {cart.length > 0 && (
        <Link href="/payment" className="mt-36">
          <Button className="bg-[#2F2F31] py-6 text-white w-full font-medium text-lg hover:bg-[#3a3a3c]">
            Ir a pagar mis bebidas
          </Button>
        </Link>
      )}
    </main>
  );
};

export default Home;