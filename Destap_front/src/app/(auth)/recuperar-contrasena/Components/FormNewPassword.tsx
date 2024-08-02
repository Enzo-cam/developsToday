import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { resetPassword } from "../actions/resetPassword";
import { FormNewPassSchema } from "@/lib/FormPasswordSchema";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Eye, EyeOff } from "lucide-react";


interface Props {
  token: string;
  getBack: () => void;
  verifiedEmail: string;
}

const FormNewPassword = ({ token, verifiedEmail, getBack }: Props) => {
  const form = useForm<z.infer<typeof FormNewPassSchema>>({
    resolver: zodResolver(FormNewPassSchema),
  });
  const router = useRouter();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const [state, formAction] = useFormState(resetPassword, { message: "", status: 0 });

  const onSubmit = form.handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("newPassword", data.newPassword);
    formData.append("repeatedPassword", data.repeatedPassword);

    formData.append("email", verifiedEmail);
    formData.append("token", token);
    await formAction(formData);
  });

  useEffect(() => {
    if (state.status === 201) {
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  } , [state.status]);

  return (
    <Form {...form}>
      <h1 className="text-2xl font-semibold">Crea tu nueva contraseña</h1>
      <form onSubmit={onSubmit}>
        <div className="space-y-4 mt-6">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Nueva contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      className="focus:outline-none bg-black text-white font-semibold border-none pr-10"
                      placeholder="*********"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
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
  
          <FormField
            control={form.control}
            name="repeatedPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">
                  Repita su nueva contraseña
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showRepeatedPassword ? "text" : "password"}
                      className="focus:outline-none bg-black text-white font-semibold border-none pr-10"
                      placeholder="*********"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowRepeatedPassword(!showRepeatedPassword)}
                    >
                      {showRepeatedPassword ? (
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
              className={`text-base text-center ${
                state.status === 201 ? "text-green-600" : "text-red-600"
              }`}
            >
              {state.message}
            </p>
          )}
        </div>
  
        <div className="flex gap-2 items-center mt-72">
          <Button
            type="button"
            onClick={getBack}
            className="text-2xl bg-[#2E2E30] text-green py-8"
          >
            <IoArrowBackCircleOutline />
          </Button>
          <Button
            type="submit"
            className="w-full bg-[#2E2E30] text-white py-8 text-lg"
          >
            Crear nueva contraseña
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormNewPassword;
