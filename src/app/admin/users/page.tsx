import Link from "next/link";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, User } from 'lucide-react';
import { Button, buttonVariants } from "@/components/ui/button";
import getUsers from "@/app/actions/users/get_users";
import DeleteUser from "./(components)/delete_user";
import { Badge } from "@/components/ui/badge";

const UsersPage = async () => {
  const session = await auth();

  const response = await getUsers();

  if (!session?.user) {
    redirect('/admin/login');
  }  

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="@container/card min-h-[500px]">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-3xl">Lista de Usuarios</CardTitle>
                {session.user?.roles?.includes('admin') && (
                  <Link
                    href="/admin/users/new"
                    className={buttonVariants({ variant: 'primary' })}
                  >Crear</Link>
                )}
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Correo Electrónico</TableHead>
                      <TableHead>Roles</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {response.users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>moonwalker@neveland.com</TableCell>
                        <TableCell className="inline-flex gap-2">
                          {user.roles?.map((role) => (
                            <div
                              key={role}
                              className="bg-gray-800 text-gray-200 px-2 py-1 rounded"
                            >{role}</div>
                          ))}
                        </TableCell>
                        <TableCell>
                          {
                            user.isActive
                              ? <Badge variant="success">activo</Badge>
                              : <Badge variant="secondary">inactivo</Badge>
                          }
                        </TableCell>
                        <TableCell className="inline-flex gap-2">
                          <Button variant="info">
                            <User className="text-sky-50" />
                          </Button>
                          <Button variant="warning">
                            <Pencil className="text-amber-50" />
                          </Button>
                          <DeleteUser userId={user.id as string} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};



export default UsersPage;
