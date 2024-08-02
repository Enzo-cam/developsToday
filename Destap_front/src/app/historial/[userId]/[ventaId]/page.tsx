'use client'
// TODO: Hacerla SS con la data ya cacheada?
// TODO: Levantar SV y fetchear directamente ?
// TODO: Dificil que esta pagina cambie, mas que diga retirado, cancelado
import { useState, useEffect } from "react";
import CardVentaDetail from "@/components/Cards/CardVentaDetail";
import { IVenta } from "@/interfaces/Venta";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const HomePage = ({ params }: Props) => {

  const [venta, setVenta] = useState<{ checkoutResponse?: { details: any[] }; qr?: string }>({})
  const { id } = params;

  useEffect(() => {
    const getVenta = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/api/purchases/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch venta data');
        }
        const data = await response.json(); // Convertir la respuesta a JSON
        return data; // Devolver los datos
      } catch (error) {
        console.error('Error fetching venta data:', error);
        return null; // En caso de error, devolver null
      }
    };
    getVenta().then(data => {
      setVenta(data);
    });
  }, [id]);

  return (
    <main className="flex flex-col gap-4 min-h-screen px-6 bg-[#191b1b41]">
      <div className="flex flex-col w-full justify-between items-start text-white gap-4">
        {/* Componente hasta main */}
        <h2 className="font-medium text-2xl mt-4 ">Compra #IdURL</h2>
        <p className="text-primary-foreground mb-2">
          Compra exitosa - <span className="text-white">04:50AM.</span>
        </p>

        {venta?.checkoutResponse?.details.map((product) => (
          <CardVentaDetail key={product.id} product={product} />
        ))}

        {/*// !!El QR debe llevar a paginas con la data de la venta */}
        {venta?.qr && (
          <Image
            src='/qrCode.png'
            height={800}
            width={360}
            alt="qrCode"
            className="mx-auto mt-4"
          />
        )}
      </div>
    </main>
  );
};

export default HomePage;
