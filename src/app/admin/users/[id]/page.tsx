import { FC } from "react";
import { auth } from "@/auth.config";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { getUserById } from "@/app/actions/users/get_user";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  params: Promise<{ id: string }>;
};

const UserDetailsPage: FC<Props> = async ({ params }) => {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  const id = (await params).id;
  const response = await getUserById(id);

  if (!response.ok) {
    redirect('/admin/users');
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="flex flex-1 px-4 lg:px-6 relative">
            <Card className="@container/card flex-1 relative">
              <CardHeader>
                <CardTitle className="text-3xl">Detalles de Usuario</CardTitle>
              </CardHeader>
              <CardContent>
                <section className="flex flex-col lg:flex-row gap-5">
                  <section className="self-center flex justify-center items-center w-[200px]">
                    {(response?.user?.image) ? (
                      <Image
                        src={session.user.image as string}
                        alt={session.user.name}
                        width={96}
                        height={96}
                        className="size-[96px] box-content rounded border border-gray-400"
                      />
                    ) : (
                      <div className="self-center flex justify-center items-center border border-gray-400 rounded p-2 box-content size-[150px]">
                        <div className="size-[100px]">
                          <FaUser size={100} className="text-gray-400" />
                        </div>
                      </div>
                    )}
                  </section>
                  <Table className="max-w-lg">
                    <TableBody>
                      <TableRow>
                        <TableHead className="w-[100px]">Nombre</TableHead>
                        <TableCell>{response?.user?.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Correo Electrónico</TableHead>
                        <TableCell>{response?.user?.email}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Roles</TableHead>
                        <TableCell className="inline-flex gap-2">
                          {response?.user?.roles?.map((role) => (
                            <div
                              key={role}
                              className="bg-gray-800 text-gray-200 px-2 py-1 rounded"
                            >{role}</div>
                          ))}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Activo</TableHead>
                        <TableCell>{response?.user?.isActive ? 'Si' : 'No'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </section>
                <section className="absolute left-10 bottom-5">
                  
                </section>
              </CardContent>
              <CardFooter className="absolute bottom-6 left-0">
                <Link
                  href="/admin/users"
                  className={buttonVariants({ variant: 'primary' })}
                >
                  <ArrowLeft />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;