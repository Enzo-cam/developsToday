// TODO: Validacion de formulario en el Front
// TODO: Cazar errores del back y front y mostrarlos bien definidos
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Metadata } from "next";
import FormRegistrarse from "./Components/FormRegistrarse";

export const metadata: Metadata = {
  title: 'Registrate en D!',
  description: 'Registrate y lleva un mejor control de tus compras'
}

const Page = () => {
  return (
    <div className="mx-10 my-10">
      <h1 className="text-2xl font-semibold mb-10">Crea tu cuenta</h1>
      <FormRegistrarse />
      <div className="flex flex-col items-center gap-4">
        <p className="text-[#818181]">-----------O-----------</p>

        <h3>Registrarme con</h3>
        <div className="flex gap-4 text-primary-foreground text-xl">
          <div className="bg-primary p-4">
            <FaGoogle />
          </div>
          <div className="bg-primary p-4">
            <FaFacebook />
          </div>
        </div>

        <h3 className="text-[#818181] mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-white">
            Inicia sesion ahora
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Page;

