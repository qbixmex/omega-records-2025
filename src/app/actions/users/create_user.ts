"use server";

import prisma from '@/lib/prisma';
import usersSchema from './users_create.schema';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcryptjs';

const createUser = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  const userParsed = usersSchema.safeParse(data);

  if (!userParsed.success) {
    return {
      ok: false,
      message: userParsed.error.errors[0].message,
    };
  }

  const userToSave = {
    ...userParsed.data,
    password: bcrypt.hashSync(userParsed.data.password, 10),
  };

  try {
    const prismaTransaction = await prisma.$transaction(async (transaction) => {

      const createdUser = await transaction.user.create({
        data: { ...userToSave }
      });

      return {
        ok: true,
        message: 'User created successfully',
        user: createdUser,
      };
    });

    // Revalidate Paths
    revalidatePath('/admin/users');

    return prismaTransaction;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: 'Error creating a user',
    };
  }
};

export default createUser;