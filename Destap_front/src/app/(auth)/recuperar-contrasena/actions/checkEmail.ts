"use server";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export async function checkEmail(
  prevState: { message: string; status?: number } | undefined,
  formData: { get: (arg0: string) => any }
) {
  const emailForm = formData.get("email");
  if (!emailForm) return { message: "Email is required", status: 400 };

  const emailUser = schema.parse({
    email: emailForm,
  });

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/auth/password-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailUser),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Check if there's content to parse
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const json = await res.json();
      return {
        message: json.status || "Se ha enviado un codigo a su email, por favor revise su bandeja de entrada",
        status: res.status,
      };
    } else {
      // If no JSON content, just return the status
      return {
        message: "Se ha enviado un codigo a su email, por favor revise su bandeja de entrada",
        status: res.status,
      };
    }
  } catch (error) {
    console.error("Error in checkEmail:", error);
    return {
      message: "Hubo un error con recuperar tu contraseña, por favor intenta de nuevo.",
      status: 400,
    };
  }
}