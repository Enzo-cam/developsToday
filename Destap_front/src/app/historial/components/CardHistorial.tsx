'use client'
import Link from "next/link"
import { IVenta } from "@/interfaces/Venta"

interface Props {
  venta: IVenta 
}

function getHour(createdAtString: string | number | Date) {
  const createdAtDate = new Date(createdAtString);

  const hour = createdAtDate.getHours().toString().padStart(2, '0');
  const minutes = createdAtDate.getMinutes().toString().padStart(2, '0');

  const timeWithMinutes = `${hour}:${minutes}`;

  return timeWithMinutes;
}

// TODO: darle mas forma, que quede como en el figma

const CardHistorial = ({venta}: Props) => {

  return (
    <div className="flex justify-between border-t-2 w-full pt-4 items-center px-1">
        <div>
            <p>{getHour(venta.createdAt)} | Zavod</p>
            <p className="text-sm text-muted">3 Articulos</p>
        </div>


        <Link href={`/${venta._id}`} className="text-primary-foreground text-sm">
            <p className="underline underline-offset-2">Ver QR</p>
        </Link>
    </div>
  )
}

export default CardHistorial