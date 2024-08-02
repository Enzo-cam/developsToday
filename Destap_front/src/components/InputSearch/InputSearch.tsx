'use client';
//TODO: buscar por la data traida del BACK
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";

interface IProduct {
  id: string;
  src: string;
  name: string;
  subName: string;
  description: string;
  price: number;
  quantity: number;
}

const productos: IProduct[] = [
  {
    id: "1",
    src: "url-de-la-imagen-1.jpg",
    name: "Cerveza Andes Rubia",
    subName: "Cerveza en lata de 473ml",
    description: "Descripción del Producto 1",
    price: 100,
    quantity: 0,
  },
  {
    id: "2",
    src: "url-de-la-imagen-2.jpg",
    name: "Cerveza Corona",
    subName: "Cerveza en lata de 473ml",
    description: "Descripción del Producto 2",
    price: 200,
    quantity: 0,
  },
  {
    id: "3",
    src: "url-de-la-imagen-3.jpg",
    name: "Cerveza Heineken",
    subName: "Cerveza en lata de 473ml",
    description: "Descripción del Producto 3",
    price: 300,
    quantity: 0,
  },
  {
    id: "4",
    src: "url-de-la-imagen-3.jpg",
    name: "Cerveza Heineken",
    subName: "Cerveza en lata de 473ml",
    description: "Descripción del Producto 3",
    price: 300,
    quantity: 0,
  },
  {
    id: "5",
    src: "url-de-la-imagen-3.jpg",
    name: "Cerveza Heineken",
    subName: "Cerveza en lata de 473ml",
    description: "Descripción del Producto 3",
    price: 300,
    quantity: 0,
  },
  {
    id: "6",
    src: "url-de-la-imagen-3.jpg",
    name: "Cerveza Heineken",
    subName: "Cerveza en lata de 473ml",
    description: "Descripción del Producto 3",
    price: 300,
    quantity: 0,
  },
];

const InputSearch = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = productos.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative my-5 mx-2">
      <div className="flex gap-1 items-center rounded-lg py-1 px-1 bg-[#2F2F31]">
        <Search className="ml-2 text-[#818181]" />
        <Input
          placeholder="Buscar bebida"
          type="text"
          className="border-none bg-[#2F2F31] text-lg w-full"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      {searchText && (
        <ul className="absolute top-full mt-1 w-full bg-[#2F2F31] rounded-lg shadow-lg z-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link href={`/product/${product.name}`} key={product.id}>
                <li className="text-white py-2 px-3 hover:bg-[#3f3f41] flex gap-2 items-center justify-between cursor-pointer">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={"/imgProd.png"}
                      alt="birra"
                      height={20}
                      width={20}
                      className="h-8 w-8 rounded-none"
                    />
                    <p className="text-lg">{product.name}</p>
                  </div>
                  <p>${product.price}</p>
                </li>
              </Link>
            ))
          ) : (
            <li className="text-white py-2 px-3">
              No hay bebidas disponibles
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default InputSearch;