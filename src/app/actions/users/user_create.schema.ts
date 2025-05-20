import { Role } from "@/app/actions/users/role.enum";
import { z } from "zod";

const userCreateSchema = z.object({
  name: z.string().min(3, { message: "Name must contains at least 3 characters" }),
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(6, { message: "Password must contains at least 6 characters" }),
  roles: z.string().transform((value) => JSON.parse(value) as Role[]).optional(),
});

export default userCreateSchema;