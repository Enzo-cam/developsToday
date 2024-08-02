'use client'
// TODO: Tarjeta con Icon mientras
// TODO: Poder editar la tarjeta guardada - Darle funcionalidad del modal p/ borrar la tarjeta
//app/paymentMethods/page.tsx
// !Fixear hydratation
import { Button } from "@/components/ui/button";
import { ChevronDown, Minus, Plus } from "lucide-react";
import CardFull from "@/assets/svg/CardFull";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-4 px-4 bg-[#181A1B]">
      <div className="flex flex-col w-full justify-between items-start text-white gap-8">
        <h1 className="font-normal text-2xl">Tarjetas Guardadas</h1>
        <Accordion type="single" collapsible className="flex flex-col w-full gap-4">
          <DropdownItem
            title="Tarjeta de débito Brubank"
            content="**** **** **** 546"
          />
          <Separator />
          <DropdownItem
            title="Tarjeta de débito Lemon"
            content="**** **** **** 123"
          />
          <Separator />
          <DropdownItem
            title="Tarjeta de crédito"
            content="**** **** **** 789"
          />
        </Accordion>
      </div>
    </main>
  );
}

const DropdownItem = ({ title, content }: { title: string, content: string }) => (
  <AccordionItem value={title}>
    <AccordionHeader>
      <AccordionTrigger >
        <Button className="w-full gap-4 flex justify-between text-md font-light text-sm" size={'xl'} variant={'secondary'}>
          <div className="flex gap-4 justify-start items-center">
            <CardFull className="w-8 h-6" />
            {title}
          </div>
          <ChevronDown className="ml-auto" />
        </Button>
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent className="p-4 text-gray-400 flex flex-col items-start">
      <div>
        <h2 className="text-foreground">Número de la tarjeta:</h2>
        <h3 style={{ letterSpacing: "clamp(0.5em, 0.25em + 0.5vw, 2em)" }} className=" text-muted h-9 border-b flex justify-center items-center tracking-[calc(0.5em + ((1vw - 0.5em) / 2))]">
          {content}
        </h3>
      </div>
      <DeletePaymentMethodDialog />
    </AccordionContent>
  </AccordionItem >
);


const DeletePaymentMethodDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='default' variant='linkActive' className=" mt-4 ">Eliminar datos</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-secondary border-none rounded-md p-6 max-w-sm mx-auto">
        <AlertDialogHeader className="text-center">
          <h2 className="text-lg font-bold">¿Seguro que deseas eliminar este método de pago?</h2>
          <p className="mt-2 text-sm text-gray-400">Los datos de la tarjeta se eliminaran definitivamente de Destap!</p>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-center items-center gap-4 mt-4">
          <AlertDialogCancel variant='link'>
            No, conservar
          </AlertDialogCancel>
          <AlertDialogAction variant='primary' >Sí, eliminar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
