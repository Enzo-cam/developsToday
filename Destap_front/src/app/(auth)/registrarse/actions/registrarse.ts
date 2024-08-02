"use server";
import { cookies } from "next/headers";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener mínimo 8 caracteres",
  }),
});

export async function createUser(
  prevState: { message: string } | undefined,
  formData: { get: (arg0: string) => any }
) {
  const nombreApUser = formData.get("fullName");
  const emailUser = formData.get("email");
  const passwordUser = formData.get("password");

  if (!emailUser || !passwordUser || !nombreApUser) return;

  const registerUser = {
    fullName: nombreApUser,
    email: emailUser,
    password: passwordUser,
    roles: ["client"],
  };

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerUser),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();
    const userData = {
      userId: json._id,
      email: json.email,
      fullName: json.fullName,
      paymentMethods: json.paymentMethods
    };

    cookies().set({
      name: 'tokenUser',
      value: json.token,
      httpOnly: true,
      path: '/',
    });
    return {
      message: "Registro exitoso, serás redirigido al Home", user: userData, status: res.status
    };

  } catch (error) {
    return {
      message: "Todos los campos son requeridos.",
      status: 400,
    };
  }
}