import { Role } from "@/app/actions/users/role.enum";
import { z } from "zod";

const userCreateSchema = z.object({
  name: z.string().min(3, { message: "El nombre debe contener por lo menos 3 caracteres" }),
  email: z.string().email({ message: "Email es invalido" }),
  password: z.string().min(6, { message: "Password must contains at least 6 characters" }),
  passwordConfirmation: z
    .string({ message: 'La contraseña debe ser un string' })
    .min(6, 'La contraseña debe contener por lo menos 8 caracteres')
    .max(24, 'La contraseña debe contener debe ser menor a 24 caracteres'),
  roles: z.array(z.nativeEnum(Role)).optional(),
  isActive: z
    .boolean({ message: 'Es Habilitado debe ser un valor boleano' })
    .optional(),
}).refine(data => data.password === data.passwordConfirmation, {
  message: 'Las contraseñas no coinciden',
  path: ['passwordConfirmation'],
});

export default userCreateSchema;