'use client'
//app/addPaymentMethod/page.tsx
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import CardFull from "@/assets/svg/CardFull";
import { Separator } from "@/components/ui/separator";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-4 px-4 bg-[#181A1B] min-h-[80vh] justify-between">
      <div className="flex flex-col w-full justify-between items-start text-white gap-8">
        <Separator />
        <h2 className=" font-normal text-2xl">Añade un método de pago</h2>
        <Button className="w-full gap-4 flex justify-between text-md font-light text-sm" size={'xl'} variant={'secondary'}>
          <div className="flex gap-4 justify-start items-center">
            <CardFull className="w-8 h-6" />
            Tarjeta de débito
          </div>
          <ChevronDown className="ml-auto" />
        </Button>
        <CardInput />

      </div>
      <div className="flex flex-col gap-5">

        <Button className="w-full gap-4 flex justify-center text-md font-light text-sm" size={'xl'} variant={'secondary'}>
          Pagar con tarjeta
        </Button>
        <p className="flex w-full font-thin text-xs justify-around items-center">

          ¿Necesitas hablar con soporte?
          <Button size='sm' variant='linkActive' className="text-xs">Reportar</Button>
        </p>
      </div>
    </main>
  );
}

export function CardInput() {
  return (
    <form className="space-y-6 w-full">
      <div>
        <label className="block text-sm font-medium text-gray-300">Número de la tarjeta</label>
        <InputOTP maxLength={16} className="mt-2 w-full">
          <InputOTPGroup className="w-full">
            {Array.from({ length: 16 }).map((_, index) => (
              <InputOTPSlot
                className={` border-b border-t-0 border-l-0 first:border-l-0 first:rounded-none last:rounded-none rounded-none border-r-0 ${index % 4 === 3 ? 'mr-2' : ''}`}
                index={index}
                key={index}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex justify-between">
        <div>
          <label className="block text-sm font-medium text-gray-300">MM/AA</label>
          <InputOTP maxLength={16} className="mt-2">
            <InputOTPGroup className="gap-2">
              <InputOTPSlot className=" w-6 border-b border-t-0 border-l-0 first:border-l-0 first:rounded-none last:rounded-none rounded-none border-r-0" index={0} />
              <InputOTPSlot className=" w-6 border-b border-t-0 border-l-0 first:border-l-0 first:rounded-none last:rounded-none rounded-none border-r-0" index={1} />
              <InputOTPSeparator isSlash />
              <InputOTPSlot className=" w-6 border-b border-t-0 border-l-0 first:border-l-0 first:rounded-none last:rounded-none rounded-none border-r-0" index={2} />
              <InputOTPSlot className=" w-6 border-b border-t-0 border-l-0 first:border-l-0 first:rounded-none last:rounded-none rounded-none border-r-0" index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Código de seguridad</label>
          <InputOTP maxLength={16} className="mt-2">
            <InputOTPGroup className="gap-2">
              <InputOTPSlot className=" w-6 border-b border-t-0 border-l-0 first:border-l-0 first:rounded-none last:rounded-none rounded-none border-r-0" index={0} />
              <InputOTPSlot className=" w-6 border-b border-t-0 border-l-0 first:border-l-0 first:rounded-none last:rounded-none rounded-none border-r-0" index={1} />
              <InputOTPSlot className=" w-6 border-b border-t-0 border-l-0 first:border-l-0 first:rounded-none last:rounded-none rounded-none border-r-0" index={2} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <Button size='default' variant='linkActive' className=" mt-4 ">Guardar este metodo de pago</Button>
    </form>
  );
}
