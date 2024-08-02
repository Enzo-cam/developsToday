"use server";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  code: z.string(),
});

export async function checkCode(
  prevState: { message: string; status?: number; tempToken?: string } | undefined,
  formData: FormData
) {

  const codeForm = formData.get("code");
  const emailForm = formData.get("email")
  if (!codeForm) return { message: "Code is required", status: 400 };

  try {
    const emailToRecover = schema.parse({
      email: emailForm,
      code: codeForm,
    });

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/auth/password-reset/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailToRecover),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();
    if (json.tempToken) {
      return {
        message: "Código verificado exitosamente",
        status: res.status,
        tempToken: json.tempToken,
      };
    } else {
      return {
        message: "Se ha verificado el código, pero no se recibió un token temporal",
        status: res.status,
      };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: "Datos de entrada inválidos",
        status: 400,
      };
    }
    return {
      message: "Ocurrió un error al procesar su solicitud",
      status: 400,
    };
  }
}