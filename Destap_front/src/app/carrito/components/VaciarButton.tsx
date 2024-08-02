'use client';
// app/carrito/components/VaciarButton.tsx
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import useStore from "@/store/cart/cart-store";
import clsx from 'clsx';

interface VaciarButtonProps {
  className?: string;
}

const VaciarButton: React.FC<VaciarButtonProps> = ({ className }) => {
  const { clearCart } = useStore();
  
  return (
    <div className="text-right">
      <Button 
        className={clsx(
          "bg-[#181A1b] text-[#818181] underline p-0 text-left",
          className
        )}
        onClick={() => clearCart()}
      >
        Vaciar mi carrito
      </Button>
    </div>
  );
};

export default VaciarButton;