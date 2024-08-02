import Image from "next/image";
import { IProduct } from "@/interfaces/product";

interface Props {
  product: IProduct;
}



const CardVentaDetail = ({product}: Props) => {
    return (
        <div className="flex flex-col w-full justify-between items-start text-white gap-4">
        <VentaDetail 
            product={product}
        />

      
    </div>
    )
}


const VentaDetail = ({ product }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center border-b pb-4 border-neutral-700">
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

            <div className="col-span-2 flex flex-col gap-1">
            <p className="font-bold">Fernet por tu cola</p>
            <p className="text-sm text-gray-300">SubDescripcion item</p>
            <p className="font-medium text-primary-foreground ">
                ${product.price}.00
            </p>
            </div>
        </div>
  );
};

export default CardVentaDetail;
