import { z } from "zod";

export const FormEmailSchema = z.object({
  email: z.string().min(6, {
    message: "Ingrese un mail válido",
  }),
});

export const FormCodeSchema = z.object({
  code: z.string().length(6, { message: "El código debe tener 6 dígitos" }),
});

export const FormNewPassSchema = z
.object({
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  repeatedPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
})
.refine((data) => data.newPassword === data.repeatedPassword, {
  message: "Las contraseñas no coinciden",
  path: ["repeatedPassword"],
});
