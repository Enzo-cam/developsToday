'use client'
// TODO: Fixear errores de validacion
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createUser } from "../actions/registrarse";
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
import { useFormState } from "react-dom";
import useUserStore from "@/store/user/user-store";

const formSchema = z.object({
  fullName: z.string().min(6, {
    message: "Nombre y apellido deben tener mínimo 6 caracteres de longitud.",
  }),
  email: z.string().min(6, {
    message: "Ingrese un mail válido",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener mínimo 8 caracteres, una mayuscula y un numero",
  }),
  roles: z.array(z.literal("client")),
});

const FormRegistrarse = () => {
  const [showPassword, setShowPassword] = useState(false);


  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      password: "",
      email: "",
      roles: ["client"],
    },
  });

  const [state, formAction] = useFormState(createUser, { message: "" , user: { userId: '', email: '', fullName: '', paymentMethods: [] }, status: 0});

  useEffect(() => {
    if (state?.user?.userId) {
      setUser(state.user);
      setTimeout(() => { 
        router.push('/'); 
      }, 2000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.user, setUser, router]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const result = formSchema.safeParse(data);
    if (result.success) {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? value.join(',') : value);
      });
      formAction(formData);
    } else {
      // If validation fails, display error messages
      result.error.issues.forEach((issue) => {
        form.setError(issue.path[0] as keyof z.infer<typeof formSchema>, {
          type: 'manual',
          message: issue.message,
        });
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-5">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Nombre y apellido</FormLabel>
              <FormControl>
                <Input
                  className="focus:outline-none text-base rounded-none border-b-2 border-white text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="focus:outline-none text-base rounded-none border-b-2 border-white text-white"
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
                    className="focus:outline-none text-base rounded-none border-b-2 border-white text-white pr-10"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
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

        <div className="w-full">
          <Button
            type="submit"
            className="w-full bg-[#2E2E30] text-white py-8 text-lg my-6"
          >
            Crear cuenta
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormRegistrarse;