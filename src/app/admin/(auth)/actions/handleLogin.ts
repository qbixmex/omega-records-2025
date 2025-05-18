"use server";

import { signIn } from "@/auth.config";

export const handleLoginGoogle = async () => {
  await signIn("google");
};
