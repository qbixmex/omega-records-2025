import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Construction, Pencil, Trash, User } from 'lucide-react';
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const UsersPage = async () => {
  const session = await auth();

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
                <CardTitle className="text-3xl">Users List</CardTitle>
                {session.user?.roles?.includes('admin') && (
                  <Link
                    href="/admin/users/new"
                    className={buttonVariants({ variant: 'primary' })}
                  >Create</Link>
                )}
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Roles</TableHead>
                      <TableHead>Is Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Michael Jackson</TableCell>
                      <TableCell>moonwalker@neveland.com</TableCell>
                      <TableCell className="inline-flex gap-2">
                        {['user', 'admin']?.map((role) => (
                          <div
                            key={role}
                            className="bg-gray-800 text-gray-200 px-2 py-1 rounded"
                          >{role}</div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {
                          true
                            ? <Check className="text-green-500" />
                            : <X className="text-pink-500" />
                        }
                      </TableCell>
                      <TableCell className="inline-flex gap-2">
                        <Button variant="info">
                          <User className="text-sky-50" />
                        </Button>
                        <Button variant="warning">
                          <Pencil className="text-amber-50" />
                        </Button>
                        <Button variant="danger">
                          <Trash className="text-pink-100" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mike Shinoda</TableCell>
                      <TableCell>mike@linkinpark.com</TableCell>
                      <TableCell className="inline-flex gap-2">
                        {['user']?.map((role) => (
                          <div
                            key={role}
                            className="bg-gray-800 text-gray-200 px-2 py-1 rounded"
                          >{role}</div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {
                          false
                            ? <Check className="text-green-500" />
                            : <X className="text-pink-500" />
                        }
                      </TableCell>
                      <TableCell className="inline-flex gap-2">
                        <Button variant="info">
                          <User className="text-sky-50" />
                        </Button>
                        <Button variant="warning">
                          <Pencil className="text-amber-50" />
                        </Button>
                        <Button variant="danger">
                          <Trash className="text-pink-100" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Daniel González</TableCell>
                      <TableCell>daniel@gmail.com</TableCell>
                      <TableCell className="inline-flex gap-2">
                        {['user', 'admin']?.map((role) => (
                          <div
                            key={role}
                            className="bg-gray-800 text-gray-200 px-2 py-1 rounded"
                          >{role}</div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {
                          true
                            ? <Check className="text-green-500" />
                            : <X className="text-pink-500" />
                        }
                      </TableCell>
                      <TableCell className="inline-flex gap-2">
                        <Button variant="info">
                          <User className="text-sky-50" />
                        </Button>
                        <Button variant="warning">
                          <Pencil className="text-amber-50" />
                        </Button>
                        <Button variant="danger">
                          <Trash className="text-pink-100" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="flex flex-col items-center justify-center mt-10">
                  <h2 className="text-5xl font-semibold text-amber-500">En Construcción</h2>
                  <Construction size={200} className="text-amber-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;