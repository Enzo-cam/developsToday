"use client";
// TODO: Setear al usuario en la app en sí
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import useUserStore from "@/store/user/user-store";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginUser } from "../actions/login";

const formSchema = z.object({
  email: z.string().min(6, {
    message: "Ingrese un mail válido",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener mínimo 8 caracteres",
  }),
});

const FormLogin = () => {
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);


  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [state, formAction] = useFormState(loginUser, {
    message: "",
    status: 0,
    user: { userId: "", email: "", fullName: "", paymentMethods: [] },
  });

  useEffect(() => {
    if (state?.user?.userId) {
      setUser(state.user);
      setTimeout(() => { router.push("/"); }, 2000);
    }

    if(state?.status === 401) {
      setIsLoading(false);
    }
  }, [state?.user, setUser, router, state?.status]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (isLoading) return; // Prevent multiple submissions

    const result = formSchema.safeParse(data);
    if (result.success) {
      setIsLoading(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formAction(formData);
    } else {
      result.error.issues.forEach((issue) => {
        form.setError(issue.path[0] as "email" | "password", {
          type: 'manual',
          message: issue.message,
        });
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} action={formAction} className="space-y-4">
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

<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="text-base">Contraseña</FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            className="focus:outline-none bg-black text-white font-semibold border-none pr-10"
            placeholder="*********"
            {...field}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </FormControl>
      <FormMessage className="text-red-600" />
    </FormItem>
  )}
/>

        {state?.message && (
          <p
            className={`text-base text-center font-semibold ${
              state.status === 201 ? "text-green-600" : "text-red-600"
            }`}
          >
            {state.message}
          </p>
        )}

        <div className="text-right">
          <Link
            href="/recuperar-contrasena"
            className="text-[#818181] text-right"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <div className="w-full">

        <Button disabled={isLoading} type="submit" className="w-full bg-[#2E2E30] text-white py-8 text-lg my-6">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                Ingresando a Destap!
              </>
            ) : (
              "Ingresar" 
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormLogin;
