import { auth } from "@/auth.config";
import LoginForm from "../admin/(auth)/login/LoginForm";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if(session?.user) {
    redirect('/admin/dashboard');
  }

  return (
    <LoginForm />
  );
};

export default LoginPage;
