import { auth } from "@/auth.config";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SectionCards } from "@/components/section-cards";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <Card className="@container/card min-h-[350px]">
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>
                  <p className="text-2xl space-x-1 font-semibold">
                    <span>Welcome</span>
                    <Link href="/admin/profile">
                      <span className="text-blue-500 hover:text-blue-600 hover:underline">
                        {session?.user?.name}
                      </span>
                    </Link>
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
