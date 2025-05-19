'use client';

import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import userUpdateSchema from "./user_update.schema";
import userCreateSchema from "./user_create.schema";
import createUser from "@/app/actions/users/create_user";
import { useRouter } from "next/navigation";
import { User } from "@/interfaces/user.interface";
import { Role } from "@/app/actions/users/role.enum";
import updateUser from "@/app/actions/users/update_user";
import Link from "next/link";

type Props = Readonly<{
  user?: User | null;
}>;

type FormValues = z.infer<typeof userUpdateSchema> | z.infer<typeof userCreateSchema>;

export const UserForm: FC<Props> = ({ user }) => {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(user ? userUpdateSchema : userCreateSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      password: user?.password ?? "",
      roles: user?.roles as Role[] ?? [],
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password ?? "");

    const response = user && user.id
      ? await updateUser(user.id, formData)
      : await createUser(formData)

    if (!response.ok) {
      toast.error(response.message, {
        duration: 3000,
        position: "top-right",
        className: "bg-red-500 text-white",
      });
    }

    if (response.ok) {
      toast.success(response.message, {
        duration: 3000,
        position: "top-right",
        className: "bg-green-500 text-white",
      });
    }

    form.reset();
    form.clearErrors();

    router.replace('/admin/users');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-5 lg:max-w-[50%] m-auto mb-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repite Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full lg:flex gap-3 lg:justify-end">
            <Link
              href="/admin/users"
              className={buttonVariants({ variant: 'outline' })}
            >Cancel</Link>
            <Button
              type="submit"
              variant="primary"
              className="w-full lg:w-auto"
            >Guardar</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;

