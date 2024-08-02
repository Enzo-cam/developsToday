"use client";
// TODO: Fixear estilos y que quede lo mas parecido y prolijo en cuanto a mensajes y etceteras
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { Loader2 } from "lucide-react";
import { checkEmail } from "../actions/checkEmail";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEmailSchema } from "@/lib/FormPasswordSchema";
import { useEffect } from "react";

interface Props {
  setEmail: (email: string) => void;
}

const FormEmail = ({ setEmail }: Props) => {
  const form = useForm<z.infer<typeof FormEmailSchema>>({
    resolver: zodResolver(FormEmailSchema),
  });

  const [isLoading, setIsLoading] = useState(false);  

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);  
    }, 4000);
  };

  const [state, formAction] = useFormState(checkEmail, {
    message: "",
    status: 0,
  });

  useEffect(() => {
    if (state.status === 201) {
      const email = form.getValues().email;
      setEmail(email);
    }
  }, [state.status]);


  return (
    <Form {...form}>
      <h1 className="text-2xl font-semibold">Recupera tu contraseña</h1>
      <p className="text-gray-400">
        ¿Olvidaste tu contraseña?. Sigue estos pasos y recupera el acceso a tu
        cuenta en cuestión de minutos.
      </p>
      <form onSubmit={handleClick} action={formAction} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="focus:outline-none bg-black text-white font-semibold border-none"
                  placeholder="mlopez@mail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        {
          isLoading && (
            <p className="text-base text-primary-foreground">Un código de 6 digitos estará disponible en tu mail</p>
          )
        }
        {
          state?.status !== 201 &&
          <p className="text-base text-red-600 font-semibold">
            {state?.message}
          </p>
        }

        <div className="w-full">
          <Button disabled={isLoading} type="submit" className="w-full bg-[#2E2E30] text-white py-8 text-lg my-6">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                {/* Loader mientras está cargando */}
                Enviando...
              </>
            ) : (
              "Siguiente" 
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormEmail;
