import { auth } from "@/auth.config";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const LoginPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >

      <AppSidebar user={{
        name: session?.user.name,
        email: session?.user.email,
        image: session?.user.image,
      }} />

      <SidebarInset>
        <SiteHeader />
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
      </SidebarInset>
    </SidebarProvider>
  );
};

export default LoginPage;
