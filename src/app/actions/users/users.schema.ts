import { z } from "zod";

const usersSchema = z.object({
  name: z.string().min(3, { message: "Name must contains at least 3 characters" }),
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(6, { message: "Password must contains at least 6 characters" }),
  passwordConfirmation: z.string().min(6, { message: "Password Confirmation must contains at least 6 characters" }),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"],
});

export default usersSchema;
