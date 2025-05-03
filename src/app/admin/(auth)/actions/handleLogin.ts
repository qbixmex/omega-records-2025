"use server";

import { signIn } from "@/auth";

const handleLogin = async () => {
  await signIn("google");
};

export default handleLogin;
