import { z } from "zod";

const usersSchema = z.object({
  name: z
    .string({ message: 'The name must be an string' })
    .min(3, 'The name must contain at lest 3 characters long')
    .max(100, 'The title must be less than 150 characters long'),
  email: z
    .string({ message: 'The email must be an string' })
    .email('The email must be a valid email'),
  password: z
    .string({ message: 'The password must be an string' })
    .min(6, 'The password must contain at lest 6 characters long')
    .max(24, 'The password must be less than 24 characters long')
    .or(z.literal('')),
  isActive: z.string().transform((value) => value === 'true'),
});

export default usersSchema;
