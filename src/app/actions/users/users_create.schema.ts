import { z } from "zod";

const usersCreateSchema = z.object({
  name: z.string().min(3, { message: "Name must contains at least 3 characters" }),
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(6, { message: "Password must contains at least 6 characters" }),
});

export default usersCreateSchema;