"use server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid Email"),
  token: z.string(),
  newPassword: z.string().min(8, "Password must be at least 8 characters long"),
  repeatedPassword: z.string().min(8, "Password must be at least 8 characters long"),
}).refine((data) => data.newPassword === data.repeatedPassword, {
  message: "Passwords do not match",
  path: ["repeatedPassword"],
});

export async function resetPassword(
  prevState: { message: string; status?: number } | undefined,
  formData: FormData
) {

  const email = formData.get("email") as string;
  const token = formData.get("token") as string;
  const newPassword = formData.get("newPassword") as string;
  const repeatedPassword = formData.get("repeatedPassword") as string;


  if (!email || !token || !newPassword || !repeatedPassword) {
    return { message: "All fields are required", status: 400 };
  }

  try {
    const validatedData = schema.parse({
      email,
      token,
      newPassword,
      repeatedPassword
    });


    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/auth/password-reset/confirm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: validatedData.email,
        token: validatedData.token,
        newPassword: validatedData.newPassword,
      }),
    });


    if (res.status === 201) {
      return {
        message: "Se ha regenerado una nueva contraseña, serás redirigido al login de Destap!",
        status: 201,
      };
    } else if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP error! Status: ${res.status}, Body: ${errorText}`);
    } else {
      // This branch is for any other successful status codes
      return {
        message: "Operación completada con éxito.",
        status: res.status,
      };
    }
  } catch (error) {
    console.error("Error in resetPassword:", error);
    if (error instanceof z.ZodError) {
      return {
        message: error.errors[0].message,
        status: 400,
      };
    }
    return {
      message: "An error occurred while processing your request.",
      status: 500,
    };
  }
}