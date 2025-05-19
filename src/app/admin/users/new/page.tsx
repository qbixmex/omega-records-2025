import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserForm from "./form";

const UsersPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <Card className="@container/card min-h-[500px]">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Create User</CardTitle>
          </CardHeader>
          <CardContent>
            <UserForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsersPage;