export type Role = "admin" | "user";

export interface User {
  id?: string;
  name: string;
  email: string;
  emailVerified?: Date;
  password: string;
  roles: Role[];
  isActive: boolean;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}