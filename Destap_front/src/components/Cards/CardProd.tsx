"use client";
import Image from "next/image";
import { IProduct } from "@/interfaces/product";
import React from "react";

interface Props {
  product: IProduct
}

const CardProd = ({ product }: Props) => {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-4 gap-8 items-center border-b pb-4 border-neutral-700">
        <div className="col-span-1 relative ">
          <Image
            src="/productCard.svg"
            alt="productImage"
            width={72}
            height={72}
            layout="fixed" // Esta línea asegura que la imagen no crezca o encoga.
          />
          <span className="absolute -top-2 -right-2 border-2 border-primary-foreground bg-black text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-xs font-medium">
            {product.quantity}
          </span>
        </div>

        <div className="col-span-2">
          <p className="font-bold">{product.name}</p>
          <p className="text-sm text-gray-300">{product.description}</p>
          <p className="font-medium text-primary-foreground ">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProd;