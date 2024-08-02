//app/categories/[slug]/page.tsx
// TODO: Busqueda en tiempo real - Carrito en tiempo real al sumar productos
import Categories from "@/components/Categories/Categories";
import { ProductsCustom } from "@/components/ProductsCustom/ProductosCustom";
import { IProduct } from "@/interfaces/product";

export const metadata = {
  title: "La Estacion - Cervezas",
  description: "Menu de Cervezas",
};

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/category?limit=10&offset=0`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
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

  const categories = await getCategories();
  const categoriesNames: [string] = categories.data.map(
    (category: { name: any }) => category.name
  );

  return (
    <main className="px-5 pt-5 pb-9 bg-[#181A1B] ">
      <div className="flex flex-col gap-4 bg-[#181A1B]">
        <Categories categories={categoriesNames} />

        <h2 className="text-2xl my-2">Todos los productos</h2>
        {productos.map((prod, index) => (
          <ProductsCustom key={index} prod={prod} />
        ))}
      </div>
    </main>
  );
}