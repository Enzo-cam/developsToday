//! ----Una vez finalizado y TESTEADO todo lo que falta de cliente--
//! ----Integraremos MP y hacer el simulacr completo de una compra--
//! ----Mergeamos todo a master----
///////////////////////////////////////////////////////////////////////////////////////////
// TODO: Busqueda de bebida - Fetchear back vercel
// revalidatePath("/api/category?limit=10&offset=0");
import Categories from "@/components/Categories/Categories";
import InputSearch from "@/components/InputSearch/InputSearch";
import { ProductsCustom } from "@/components/ProductsCustom/ProductosCustom";
import { IProduct } from "@/interfaces/product";
export const metadata = {
  title: "Destap! - La Estacion",
  description: "Menu de bebidas de La Estacion",
};

//Hacer funcionar el fetch de getCategories
async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/category?limit=10&offset=0`,
    {
      headers: {
        "x-vercel-protection-bypass": `${process.env.x_vercel_protection_bypass}`,
      },
      next: { revalidate: 3600 }
    }
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
      name: "Medida Jagger",
      subName: "Jaggermeister en vaso",
      description: "Medida de jaggermeister en vaso de 473ml con una lata de Speed",
      price: 300,
      quantity: 0,
    },
  ];

  const categories = await getCategories();
  const categoriesNames = categories.data.map(
    (category: { name: any }) => category.name
  );

  return (
    <main className="flex flex-col gap-4 px-4 bg-[#181A1B] w-full mb-10">
      <div className="flex flex-col gap-4 bg-[#181A1B]">
        {/* Busqueda sobre el  back o inventario ya traido */}
        <InputSearch />

        {/* Ver todo te tiene que llevar a un display de todas las que hay con cards quizas? */}
        <Categories categories={categoriesNames} />

        {/* 'Productos destacados' is not coded yet in the backend so I am using a mockup of products */}
        <h2 className="text-2xl my-3">Productos Destacados</h2>
        
          {productos.map((prod, index) => (
            <ProductsCustom key={index} prod={prod} />
          ))}
        
      </div>
    </main>
  );
}
