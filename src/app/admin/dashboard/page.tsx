import { auth } from "@/auth.config";
import Link from "next/link";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <>
      <h1 className="text-4xl font-semibold mb-5">Dashboard</h1>
      <p className="text-xl mb-2">
        Welcome&nbsp;
        <Link href="/admin/profile">
          <span className="text-blue-500 hover:text-blue-600 hover:underline font-semibold italic">
            {session?.user?.name}
          </span>
        </Link>
      </p>
    </>
  );
};

export  default LoginPage;
