import { User } from "@/interfaces/user.interface";
import prisma from "@/lib/prisma";

type ResponseFetchUsers = {
  ok: boolean;
  users: User[];
  message: string;
};

export const getUsers = async (): Promise<ResponseFetchUsers> =>
{
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        roles: true,
        isActive: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
      skip: 0,
      take: 100,
    }) as User[];

    return {
      ok: true,
      users,
      message: "Users fetched successfully 👍",
    };
  } catch(error) {
    console.error(error);
    return {
      ok: false,
      users: [],
      message: "Something went wrong !, check logs for details",
    };
  }
};

export default getUsers;
