import React from "react";
import { IProduct } from "@/interfaces/product";
import CardHistorial from "../components/CardHistorial";
import { Metadata } from "next";
import { IVenta } from "@/interfaces/Venta";


export async function generateMetadata({ params }: { params: { userId: string } }): Promise<Metadata> {
  return {
    title: 'D! - Historial de tus compras',
    description: 'Resumen de todas tus compras hechas en la app'
  }
}

async function getData(userId: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/purchases?limit=10&searchFields[]=userBuyer&searchValue=${userId}&useRegex=false`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const HomePage: React.FC<{ params: { userId: string } }> = async ({ params }) => {
  
  const historialVentas = await getData(params.userId)

  return (
    <main className="flex flex-col gap-4 min-h-screen px-5 bg-[#181A1B]w-96">
      <div className="flex flex-col w-full justify-between items-start text-white gap-4">
        { historialVentas && historialVentas.data.length === 0 && <h2 className="font-medium text-2xl mt-4">No hay compras registradas</h2>}
        {historialVentas.data.map((venta: IVenta) => (
          <>
            <h2 className="font-medium text-2xl mt-4 ">Hoy</h2>
            <CardHistorial 
              venta={venta}
              key={venta._id}
            />
          </>
        ))}
        
      </div>
    </main>
  );
};

export default HomePage;
