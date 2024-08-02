"use client";
// @ts-ignore
import { Button } from "@/components/ui/button";
import { ChevronLeft, LogIn, Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import navigationConfig from "../lib/navigationConfig";
import ChevronLeftSolid from "@/assets/svg/ChevronLeftSolid";
import AppLogo from "@/assets/svg/AppLogo";
import CartIcon from "@/components/Cart/CartIcon";
import VectorLiquidoMenu from "@/assets/svg/VectorLiquidoMenu";
import FullNameIcon from "@/assets/svg/FullNameIcon";
import Luna from "@/assets/svg/Luna";
import { Switch } from "@/components/ui/switch";
import DrawerHamburguerMenu from "./menu/page";

export default function Template({
  children,
  closeAction,
  closeButton,
}: {
  children: React.ReactNode;
  closeAction?: () => void;
  closeButton?: React.ReactNode;
}) {
  const Barname = "La Estacion";
  const pathname = usePathname(); // Get the current path
  const pathParts = pathname.split("/");
  const section = pathParts.length > 1 ? pathParts[1] : null;
  const slug = pathParts.length > 1 ? pathParts[2] : null;

  // Now use the slug to get the corresponding configuration
  // @ts-ignore
  const config = section ? navigationConfig["/" + section] : navigationConfig["/home"]; // Replace 'defaultConfig' with your default config

  const goBack = () => {
    window.history.back();
  };

  return (
    <main className="w-full h-full">
      <header className="text-white flex justify-between items-center pb-5 pt-9 px-4">
        {config?.showVectorLiquido && (
          <VectorLiquidoMenu className="absolute top-0 left-0 z-[-1] w-full" />
        )}
        <div className="flex items-center">
          {config?.showGoBack && (
            <Button
              size={"icon"}
              variant={"ghost"}
              className={"size-8"}
              onClick={goBack}
            >
              <ChevronLeftSolid className={""} />
            </Button>
          )}
          {config?.showLogo && <AppLogo className={"size-10"} />}
          {config?.showAppName ? (
            <h1 className="text-xl ml-1 text-primary-foreground">{Barname}</h1>
          ) : // @ts-ignore
            config?.showFullName ? (
              <FullNameIcon className={"size-10"} />
            ) : config?.customName ? (
              <h1 className="text-xl text-primary-foreground">
                {config.customName}
              </h1>
            ) : (
              <h1 className="text-xl font-medium text-primary-foreground">
                {/* @ts-ignore */}
                {decodeURIComponent(slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : section.charAt(0).toUpperCase() + section.slice(1))}
              </h1>
            )}
        </div>
        <div>
          <div className="flex gap-1">
            {config?.showSearch && (
              <Button size={"icon"} variant={"ghost"}>
                <Search />
              </Button>
            )}
            {config?.showCart && <CartIcon />}
            {config?.showHamburgerMenu && <DrawerHamburguerMenu />}
            {config?.showDarkMode && (
              <div className="flex items-center space-x-2">
                <Luna className={""} />
                <Switch
                  id="dark-mode"
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground"
                />
              </div>
            )}
            {config?.showClose && (
              <Button
                size={"icon"}
                variant={"ghost"}
                className={"size-10"}
                onClick={closeAction ? closeAction : goBack}
              >
                <X />
              </Button>
            )}
            {closeButton && closeButton}
          </div>
        </div>
      </header>
      {children}
    </main>
  );
}
