import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserForm from "../(components)/form";
import { Role } from "@/app/actions/users/role.enum";

const UsersPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <div className="flex-1 flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex-1 flex px-4 lg:px-6">
        <Card className="@container/card flex-1 place-content-start md:place-content-center">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Crear Usuario</CardTitle>
          </CardHeader>
          <CardContent>
            <UserForm authRoles={session.user.roles as Role[]} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsersPage;