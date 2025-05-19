import { z } from "zod";

const userUpdateSchema = z.object({
  name: z.string().min(3, { message: "El nombre debe contener por lo menos 3 caracteres" }),
  email: z.string().email({ message: "Email es invalido" }),
  password: z
    .string({ message: 'La contraseña debe ser un string' })
    .min(6, 'La contraseña debe contener por lo menos 8 caracteres')
    .max(24, 'La contraseña debe contener debe ser menor a 24 caracteres')
    .or(z.literal('')),
  passwordConfirmation: z
    .string({ message: 'La confirmación de la contraseña debe ser un string' })
    .min(6, 'La confirmación de la contraseña debe contener por lo menos 8 caracteres')
    .max(24, 'La confirmación de la contraseña debe ser menor a 24 caracteres')
    .optional()
    .or(z.literal('')),
  isActive: z
    .boolean({ message: 'Es Habilitado debe ser un valor boleano' })
    .optional(),
});

export default userUpdateSchema;