import Link from "next/link";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, X } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button";

const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="@container/card min-h-[350px]">
              <CardHeader>
                <CardTitle className="text-3xl">User Details</CardTitle>
              </CardHeader>
              <CardContent>
                <section className="lg:flex lg:gap-5 mb-10">
                  <section className="flex justify-center items-center mb-5 md:block w-[100px]">
                    {(session?.user.image) ? (
                      <figure>
                        <Image
                          src={session.user.image as string}
                          alt={session.user.name}
                          width={96}
                          height={96}
                          className="size-[96px] box-content rounded border border-gray-400"
                        />
                      </figure>
                    ) : (
                      <figure className="flex justify-center items-center border border-gray-400 rounded p-2 box-content size-[150px]">
                        <FaUser size={100} className="text-gray-400" />
                      </figure>
                    )}
                  </section>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableHead className="w-[100px]">Nombre</TableHead>
                        <TableCell>{session?.user.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Correo Electrónico</TableHead>
                        <TableCell>{session?.user.email}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Roles</TableHead>
                        <TableCell className="inline-flex gap-2">
                          {session?.user.roles?.map((role) => (
                            <div
                              key={role}
                              className="bg-gray-800 text-gray-200 px-2 py-1 rounded"
                            >{role}</div>
                          ))}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHead>Es Activo ?</TableHead>
                        <TableCell>
                          {session.user.isActive ? <Check className="text-green-500" /> : <X className="text-pink-500" />}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </section>
                <section>
                  <Link
                    href="/admin/dashboard"
                    className={buttonVariants({ variant: 'primary' })}
                  >
                    <ArrowLeft />
                  </Link>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;