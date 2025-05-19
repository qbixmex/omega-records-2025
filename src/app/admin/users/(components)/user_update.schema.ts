import { z } from "zod";

const userUpdateSchema = z.object({
  name: z.string().min(3, { message: "Name must contains at least 3 characters" }),
  email: z.string().email({ message: "Email is invalid" }),
  password: z
    .string({ message: 'The password must be an string' })
    .min(6, 'The password must contain at lest 8 characters long')
    .max(24, 'The password must be less than 24 characters long')
    .or(z.literal('')),
  passwordConfirmation: z
    .string({ message: 'The password confirmation must be an string' })
    .min(6, 'The password confirmation must contain at lest 8 characters long')
    .max(24, 'The password confirmation must be less than 24 characters long')
    .optional()
    .or(z.literal('')),
});

export default userUpdateSchema;