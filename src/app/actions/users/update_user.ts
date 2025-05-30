"use server";

import prisma from '@/lib/prisma';
import userUpdateSchema from './user_update.schema';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcryptjs';

const updateUser = async (id: string, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const userParsed = userUpdateSchema.safeParse(data);

  if (!userParsed.success) {
    return {
      ok: false,
      message: userParsed.error.errors[0].message,
    };
  }

  const userToSave = userParsed.data;

  try {
    const prismaTransaction = await prisma.$transaction(async (transaction) => {

      const updatedUser = await transaction.user.update({
        where: { id },
        data: {
          ...userToSave,
          password: userToSave.password ? bcrypt.hashSync(userToSave.password, 10) : undefined,
        },
      });

      return {
        ok: true,
        message: 'Usuario actualizado correctamente',
        category: updatedUser,
      };
    });
    
    // Revalidate Paths
    revalidatePath('/admin/users');

    return prismaTransaction;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: 'Error al actualizar el usuario',
    };
  }
};

export default updateUser;
