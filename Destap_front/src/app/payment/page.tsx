"use client";
import React, { useState } from "react";
import Cash from "../../assets/svg/Cash";
import Credit from "../../assets/svg/Credit";
import Galperin from "../../assets/svg/Galperin";
import { Button } from "../../components/ui/button";
import { usePathname } from "next/navigation";
import ConcentricCircles from "../../components/PaymentAnimation/paymentanimation";
import useStore from "../../store/cart/cart-store";

export default function Home() {
  const path = usePathname();
  const [debug, setDebug] = useState(false);
  const [status, setStatus] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const { cart } = useStore((state) => ({
    cart: state.cart,
  }));

  function handleAnimation(statusProp: string) {
    setStatus(statusProp);
    setDebug(true);
  }

  function handleOptionClick(option: string | undefined) {
    setSelectedOption(option);
  }

  function handleGoBack() {
    setDebug(false);
    setStatus('');
  }

  return (
    <main className="flex flex-col gap-4 px-4 bg-[#181A1B]">
      {debug ? (
        <ConcentricCircles status={status} handleGoBack={handleGoBack} cart={cart} />
      ) : (
        <div className="flex flex-col w-full justify-between items-start text-white gap-6">
          <h2 className="font-normal text-xl">Seleccione su método de pago</h2>
          <div className="flex flex-col w-full gap-2">
            <Button
              className="w-full gap-4 flex justify-start text-md pointer-events-auto"
              size={"xl"}
              variant={selectedOption === "galperin" ? "outlinePrimary" : "outline"}
              onClick={() => handleOptionClick("galperin")}
            >
              <Galperin className={"w-8 h-6"} />
              Tu billetera de Mercado Pago
            </Button>
            <div className="w-full border-t border-[#A6A6A61F]" />
            <Button
              className="w-full gap-4 flex justify-start text-md"
              size={"xl"}
              variant={selectedOption === "credit" ? "outlinePrimary" : "outline"}
              onClick={() => handleOptionClick("credit")}
            >
              <Credit className={"w-8 h-6"} />
              Tu tarjeta de crédito/Débito
            </Button>
            <div className="w-full border-t border-[#A6A6A61F]" />
            <Button
              className="w-full gap-4 flex justify-start text-md"
              size={"xl"}
              variant={selectedOption === "cash" ? "outlinePrimary" : "outline"}
              onClick={() => handleOptionClick("cash")}
            >
              <Cash className={"w-8 h-6"} />
              Efectivo
            </Button>
          </div>
          <Button variant='secondary' size='xl' className="w-full mt-3" onClick={() => handleAnimation(selectedOption || 'error')}>
            Siguiente
          </Button>
        </div>
      )}
    </main>
  );
}