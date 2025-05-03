"use server";

import { signIn } from "@/auth.config";

const handleLogin = async () => {
  await signIn("google");
};

export default handleLogin;
