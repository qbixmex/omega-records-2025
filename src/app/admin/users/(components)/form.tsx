'use client';

import { FC, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import userCreateSchema from "./user_create.schema";
import userUpdateSchema from "./user_update.schema";
import createUser from "@/app/actions/users/create_user";
import { useRouter } from "next/navigation";
import { User } from "@/interfaces/user.interface";
import { Role } from "@/app/actions/users/role.enum";
import updateUser from "@/app/actions/users/update_user";
import Link from "next/link";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  user?: User | null;
  authRoles: Role[];
}>;

type FormValues = z.infer<typeof userUpdateSchema> | z.infer<typeof userCreateSchema>;

export const UserForm: FC<Props> = ({ user, authRoles }) => {
  const router = useRouter();
  const [popoverOpen, setPopoverOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(user ? userUpdateSchema : userCreateSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      password: user?.password ?? "",
      isActive: user?.isActive ?? true,
      roles: user?.roles as Role[] ?? [],
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password ?? "");
    formData.append("isActive", data.isActive?.toString() ?? "false");
    formData.append("roles", JSON.stringify(data.roles));

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

         {user && authRoles.includes(Role.ADMIN) && (
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => {
                const options = [
                  { value: "admin", label: "Admin" },
                  { value: "user", label: "User" },
                ];
                const selectedRoles: string[] = field.value || [];
  
                return (
                  <FormItem>
                    <FormLabel>Roles</FormLabel>
                    <FormControl>
                      <Popover
                        open={popoverOpen}
                        onOpenChange={setPopoverOpen}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={popoverOpen}
                            className="w-[200px] justify-between"
                            type="button"
                            onClick={(open) => !open}
                          >
                            {selectedRoles.length === 0
                              ? "Select roles..."
                              : options
                                .filter(opt => selectedRoles.includes(opt.value))
                                .map(opt => opt.label)
                                .join(", ")}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search role..." />
                            <CommandList>
                              <CommandEmpty>No role found.</CommandEmpty>
                              <CommandGroup>
                                {options.map(option => (
                                  <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() => {
                                      const exists = selectedRoles.includes(option.value);
                                      const newRoles = exists
                                        ? selectedRoles.filter(v => v !== option.value)
                                        : [...selectedRoles, option.value];
                                      field.onChange(newRoles);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        selectedRoles.includes(option.value)
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {option.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          )} 

          {
            user && authRoles.includes(Role.ADMIN) && (
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Es Activo</FormLabel>
                      <FormDescription>
                        Activa o desactiva la cuenta de usuario
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        className="cursor-pointer"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          }

          <div className="w-full lg:flex gap-3 lg:justify-end">
            <Link
              href="/admin/users"
              className={buttonVariants({ variant: 'outline' })}
            >Cancelar</Link>
            <Button
              type="submit"
              variant="success"
              className="w-full lg:w-auto"
            >Guardar</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;

