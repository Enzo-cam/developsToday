'use client'
//app/carrito/components/CalculoTotal.tsx
import React from 'react';
import { IProduct } from '@/interfaces/product';
import clsx from 'clsx';

interface IPriceBreakdownProps {
  items: IProduct[];
  className?: string;
}

const CalculoTotal: React.FC<IPriceBreakdownProps> = ({ items, className }) => {
  // Calcular el subtotal sumando los productos de cantidad por precio
  const subtotal = items.reduce((acc, item) => acc + item.price * (item.quantity ?? 0), 0);

  // Suponiendo que el costo del servicio es un porcentaje fijo del subtotal, por ejemplo, 10%
  const serviceCost = subtotal * 0.10;

  // Total general es la suma del subtotal y el costo del servicio
  const total = subtotal + serviceCost;

  // Total de items es simplemente la suma de las cantidades
  const totalItems = items.reduce((acc, item) => acc + (item.quantity ?? 0), 0);

  return (
    <div className={clsx(
      "p-4 bg-[#2F2F31] w-full flex gap-4 flex-col px-6 mt-4 text-white shadow-md rounded-lg",
      className
    )}>
      <div className="flex justify-between border-b border-gray-700 mb-2 py-2">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-b border-gray-700 mb-2 pb-2">
        <span>Costo del servicio:</span>
        <span>${serviceCost.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total por {totalItems} ítems:</span>
        <span className='text-primary-foreground'>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CalculoTotal;