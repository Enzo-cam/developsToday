// TODO: Setear el user con su respectiva data
// TODO: Armar el context con la data del user
// TODO: Testear historial de pedidos con el token o ID del user
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Metadata } from "next";
import FormLogin from "./Components/FormLogin";

export const metadata: Metadata = {
  title: 'Inicia sesion en D!',
  description: 'Inicia sesion para tener mejor registro de tus compras'
}

const HomePage = () => {
  return (
    <div className="mx-7 my-32">
      <h1 className="text-2xl font-medium mb-8">Inicia sesión en Destap!</h1>
      <FormLogin />


      <div className="flex flex-col items-center gap-4">
        <p className="text-[#c9c8c8] font-bold">-----0-----</p>

        <h3>Ingresar con</h3>
        <div className="flex gap-4 text-primary-foreground text-2xl">
          <div className="bg-primary p-4">
            <FaGoogle />
          </div>
          <div className="bg-primary p-4">
            <FaFacebook />
          </div>
        </div>

        <h3 className="text-[#818181] mt-6">
          ¿No tienes cuenta?{" "}
          <Link href="/registrarse" className="text-white underline">
            Crear una cuenta
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
