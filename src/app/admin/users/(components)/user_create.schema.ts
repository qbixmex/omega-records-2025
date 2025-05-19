import { Role } from "@/app/actions/users/role.enum";
import { z } from "zod";

const userCreateSchema = z.object({
  name: z.string().min(3, { message: "Name must contains at least 3 characters" }),
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(6, { message: "Password must contains at least 6 characters" }),
  passwordConfirmation: z
    .string({ message: 'The password confirmation must be an string' })
    .min(6, 'The password confirmation must contain at lest 8 characters long')
    .max(24, 'The password confirmation must be less than 24 characters long')
    .optional()
    .or(z.literal('')),
  roles: z.array(z.nativeEnum(Role)).optional(),
}).refine(data => data.password === data.passwordConfirmation, {
  message: 'The passwords must match',
  path: ['passwordConfirmation'],
});

export default userCreateSchema;