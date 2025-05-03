import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Profile from "./components/Profile";

const LoginPage = async () => {
  const session = await auth();

  if(!session) {
    redirect("/admin/login");
  }

  return (
    <>
      <h1 className="text-4xl font-semibold mb-5">Dashboard Page</h1>
      <p className="text-xl mb-2">
        Welcome&nbsp;
        <span className="text-blue-500 font-semibold italic">{session.user?.name}</span>
      </p>
      <Profile />
      
    </>
  );
};

export default LoginPage;
