import { auth } from "@/auth.config";
import Profile from "./components/Profile";
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
        <span className="text-blue-500 font-semibold italic">{session?.user?.name}</span>
      </p>
      <Profile />
    </>
  );
};

export  default LoginPage;
