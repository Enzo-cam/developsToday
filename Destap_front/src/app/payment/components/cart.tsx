'use client';
import React from 'react';
import Categories from "@/components/Categories/Categories";
import InputSearch from "@/components/InputSearch/InputSearch";
import { ProductsCustom } from "@/components/ProductsCustom/ProductosCustom";
import { IProduct } from "@/interfaces/product";
import useFetchCategories from '@/hooks/useFetchCategories';
import CardVentaDetail from '@/components/Cards/CardVentaDetail';
import useFetchProducts from '@/hooks/useFetchProducts';

export const metadata = {
  title: 'Destap! - La Estacion',
  description: 'Menu de bebidas de La Estacion',
};

const Cart = () => {
  const { categories, loading: categoriesLoading, error: categoriesError } = useFetchCategories();

  const productos: IProduct[] = [
    {
      id: '1',
      src: "url-de-la-imagen-1.jpg",
      name: "Cerveza Andes Rubia",
      subName: "Cerveza en lata de 473ml",
      description: "Descripción del Producto 1",
      price: 100,
      quantity: 0,
    },
    {
      id: '2',
      src: "url-de-la-imagen-2.jpg",
      name: "Fernet en tu cola",
      subName: "Cerveza en lata de 473ml",
      description: "Descripción del Producto 2",
      price: 200,
      quantity: 0,
    },
    {
      id: '3',
      src: "url-de-la-imagen-3.jpg",
      name: "Daikiri para los gays(Axel)",
      subName: "Cerveza en lata de 473ml",
      description: "Descripción del Producto 3",
      price: 300,
      quantity: 0,
    },
  ];

  if (categoriesError) return <div>Error: {categoriesError}</div>;

  return (
    <main className="flex flex-col gap-4 px-4 bg-[#181A1B] w-full">
      <div className="flex flex-col gap-4 bg-[#181A1B]">
        {productos?.map((prod, index) => (
          <CardVentaDetail key={index} product={prod} />
        ))}
      </div>
    </main>
  );
};

export default Cart;
