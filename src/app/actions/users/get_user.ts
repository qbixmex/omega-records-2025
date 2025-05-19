import { User } from "@/interfaces/user.interface";
import prisma from "@/lib/prisma";

type ResponseFetchUser = {
  ok: boolean;
  user: User | null;
  message: string;
};

export const getUserById = async (id: string): Promise<ResponseFetchUser> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        image: true,
        email: true,
        roles: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      }
    }) as User | null;

    if (!user) {
      return {
        ok: false,
        user: null,
        message: "User not found with id: " + id,
      };
    }

    return {
      ok: true,
      user: user,
      message: "User fetched successfully 👍",
    };
  } catch(error) {
    console.error(error);
    return {
      ok: false,
      user: null,
      message: "Something went wrong !, check logs for details",
    };
  }
};
