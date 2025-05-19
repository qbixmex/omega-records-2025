"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const deleteUser = async (id: string) => {
  try {
    const userDeleted = await prisma.user.delete({
      where: { id },
    });

    if (!userDeleted) {
      return {
        ok: false,
        message: `User not found with id: ${id}`,
      };
    }

    // Revalidate Paths
    revalidatePath('/admin/users');

    return {
      ok: true,
      message: "User deleted successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: `Unable to delete a user, check the logs for more information`,
    };
  }
};

export default deleteUser;
