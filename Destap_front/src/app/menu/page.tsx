"use client";
// TODO: corregir menu cuando esta lkogueado y cuando no
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/user/user-store";
import ChevronLeftSolid from "@/assets/svg/ChevronLeftSolid";
import { Button } from "@/components/ui/button";
import { IoHomeOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import {
  LogIn,
  UserPlus,
  ArrowLeftToLine,
  Folder,
  Frown,
  List,
  Menu,
  Pen,
  X,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Template from "../template";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import {
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

function HomePage() {
  const { user } = useUserStore((state) => ({
    user: state.user,
  }));

  return (
    <div className="flex flex-col gap-4 px-4 w-full h-full">
      <div className="flex flex-col w-full justify-between items-start text-white gap-5">
        <div className="gap-2 flex flex-col">
          
          {user.fullName ? (
            <h2 className="font-normal text-2xl py-8">
              Hola {user.fullName}, esperemos que disfrutes de{" "}
              <span className="text-primary-foreground">Destap!</span>
            </h2>
          ) : (
            <>
              <h2 className="font-normal text-2xl text-center pt-14 mb-4">
                Te invitamos a loguearte para tener una mejor experiencia con
                Destap!
              </h2>

              <Button
                href="/login"
                variant="secondary"
                className="text-base py-2 pl-3 pr-4 w-full h-12 rounded-none flex justify-between font-light"
              >
                <div className="flex gap-6 justify-center items-center">
                  <LogIn />
                  Iniciar sesión
                </div>
                <ChevronLeftSolid className="size-4 transform rotate-180" />
              </Button>
              <Button
                href="/registrarse"
                variant="secondary"
                className="text-base py-2 px-4 w-full h-12 rounded-none flex justify-between font-light"
              >
                <div className="flex gap-6 justify-center items-center">
                  <UserPlus />
                  Registrarse
                </div>
                <ChevronLeftSolid className="size-4 transform rotate-180" />
              </Button>
            </>
          )}
        </div>
        <h3 className="text-xl font-normal">Menu</h3>

        {/* button section */}
        <div className="bg-secondary rounded-md px-3 [&>*]:border-[#D9D9D9]/10 [&>*:not(:last-child)]:border-b w-full">
          <Button
            href="/"
            variant="secondary"
            className="text-base p-2 w-full h-12 rounded-none flex justify-between font-light"
          >
            <div className="flex gap-6 justify-center items-center">
              <IoHomeOutline />
              Ir al inicio
            </div>
            <ChevronLeftSolid className="size-4 transform rotate-180" />
          </Button>
          {user.fullName && (
            <>
              <Button
                href="/profile"
                variant="secondary"
                className="text-base p-2 w-full h-12 rounded-none flex justify-between font-light"
              >
                <div className="flex gap-6 justify-center items-center">
                  <Pen size={16} />
                  Editar mi perfil
                </div>
                <ChevronLeftSolid className="size-4 transform rotate-180" />
              </Button>

              <Link
                href={`/historial/${user.userId}`}
                className="text-base p-2 w-full h-12 rounded-none flex justify-between font-light items-center"
              >
                <div className="flex gap-6 justify-center items-center">
                  <List size={16} />
                  Historial de compra
                </div>
                <ChevronLeftSolid className="size-4 transform rotate-180" />
              </Link>

              <Button
                href="/paymentMethods"
                variant="secondary"
                className="text-base p-2 w-full h-12 rounded-none flex justify-between font-light"
              >
                <div className="flex gap-6 justify-center items-center">
                  <Folder size={16} />
                  Mis métodos de pago
                </div>
                <ChevronLeftSolid className="size-4 transform rotate-180" />
              </Button>
            </>
          )}
          <Button
            variant="secondary"
            className="text-base p-2 w-full h-12 rounded-none flex justify-between font-light"
          >
            <div className="flex gap-6 justify-center items-center">
              <Frown size={16} />
              Reporta un problema
            </div>
            <ChevronLeftSolid className="size-4 transform rotate-180" />
          </Button>

          {user.userId && (
            <Button
              variant="secondary"
              className="text-base p-2 w-full h-12 rounded-none justify-start gap-6 font-light"
            >
              <ArrowLeftToLine size={16} />
              <CerrarSesionDialog />
            </Button>
          )}
        </div>
        <Separator></Separator>
        {/* button section */}
        <div className="bg-secondary rounded-md py-2 px-3 [&>*]:border-[#D9D9D9]/10 [&>*:not(:last-child)]:border-b w-full">
          <Button
            variant="secondary"
            className="text-base p-2 w-full h-12 rounded-none justify-between font-light"
          >
            Terminos y Condiciones
            <ChevronLeftSolid className="size-4 transform rotate-180" />
          </Button>
          <Button
            variant="secondary"
            className="text-base p-2 w-full h-12 rounded-none justify-between font-light"
          >
            Contacto
            <ChevronLeftSolid className="size-4 transform rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function DrawerHamburguerMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mt-0 h-full">
        <Template
          closeButton={
            <DrawerClose>
              <Button size={"icon"} variant={"ghost"} className={"size-10"}>
                <X />
              </Button>
            </DrawerClose>
          }
        >
          <HomePage />
        </Template>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerHamburguerMenu;

const CerrarSesionDialog = () => {
  const router = useRouter();
  const clearUser = useUserStore((state) => state.clearUser);

  const onClickCerrar = () => {
    clearUser();
    router.refresh();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent text-white text-base font-light p-0 m-0">
          Cerrar sesión en Destap!
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-white border-2 rounded-md bg-secondary max-w-md p-4 text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AlertDialogHeader className="text-center">
          <h2 className="text-lg font-bold">
            ¿Seguro que deseas cerrar sesión?
          </h2>
          <p className="mt-2 text-sm text-gray-400 text-wrap">
            Tendrá que volver a loguearse para usar todos los beneficios de
            Destap!
          </p>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-center items-center gap-5 mt-4">
          <AlertDialogCancel className="text-primary-foreground font-semibold">
            No, mantener
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onClickCerrar}
            className="bg-primary-foreground text-black font-semibold p-2 rounded-sm"
          >
            Sí, cerrar sesión
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
