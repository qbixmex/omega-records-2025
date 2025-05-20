import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserForm from "../../(components)/form";
import { FC } from "react";
import { getUserById } from "@/app/actions/users/get_user";
import { Role } from "@/app/actions/users/role.enum";

type Props = {
  params: Promise<{ id: string }>;
};

const EditUser: FC<Props> = async ({ params }) => {
  const session = await auth();
  
  if (!session?.user) {
    redirect('/admin/login');
  }

  const id = (await params).id;
  const response = await getUserById(id);

  return (
    <div className="flex-1 flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex-1 flex px-4 lg:px-6">
        <Card className="@container/card flex-1 place-content-start md:place-content-center">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Actualizar Usuario</CardTitle>
          </CardHeader>
          <CardContent>
            <UserForm
              user={response.user}
              authRoles={session.user.roles as Role[]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditUser;