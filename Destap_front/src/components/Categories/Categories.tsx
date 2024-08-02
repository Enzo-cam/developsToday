"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Props {
  categories: string[];
}

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
];

const CategoryCard = ({ category }: { category: string }) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`flex-shrink-0 gap-2 flex-col relative overflow:hidden justify-between ${randomColor} rounded-lg shadow-lg w-full h-44 overflow-hidden`}
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative flex-grow flex items-center justify-center p-4">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.2) 100%)",
          }}
        ></div>
        <div className="relative w-32 h-32">
          <Image
            layout="fill"
            objectFit="contain"
            src={`/${category.toLowerCase()}.png`}
            alt={category}
          />
        </div>
      </div>
      <div className="relative text-white px-4 bottom-3 bg-black bg-opacity-30">
        <span className="block font-semibold text-lg text-center">{category}</span>
      </div>
    </div>
  );
};

export default function Categories({ categories }: Props) {
  const limitedCategories = categories.slice(0, 4);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold ">Categorias </h1>
        <Link href="">
          {/* <button className="text-sm  bg-primary-foreground text-black font-semibold py-2 px-3 rounded-md">Ver más</button> */}
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-5">
        {limitedCategories.map((category, index) => (
          <Link key={index} href={`/categories/${category.toLowerCase()}`} className="block">
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </>
  );
}