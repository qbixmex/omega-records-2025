'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import usersSchema from "@/app/actions/users/users.schema";
import createUser from "@/app/actions/users/create_user";
import { useRouter } from "next/navigation";

export const UserForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof usersSchema>>({
    resolver: zodResolver(usersSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof usersSchema>) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    const result = await createUser(formData);

    if (result.ok) {
      toast.success(result.message);
    }

    if (!result.ok) {
      toast.error(result.message);
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
                <FormLabel>Name</FormLabel>
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
                <FormLabel>Email</FormLabel>
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
                <FormLabel>Password</FormLabel>
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
                <FormLabel>Repeat Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />          

          <div className="w-full lg:flex lg:justify-end">
            <Button
              type="submit"
              variant="primary"
              className="w-full lg:w-auto"
            >Submit</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;

