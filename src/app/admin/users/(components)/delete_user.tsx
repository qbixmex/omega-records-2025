'use client';

import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import deleteUser from "@/app/actions/users/delete_user";
import { toast } from "sonner";
import { Trash } from "lucide-react";

const DeleteUser: FC<Readonly<{userId: string}>> = ({ userId }) => {
  const handleDelete = async () => {
    const response = await deleteUser(userId);

    if (response.ok) {
      toast.success(response.message);
    }

    if (!response.ok) {
      toast.error(response.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="danger">
          <Trash className="text-pink-100" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Eliminar Usuario</DialogTitle>
          <DialogDescription>
            <span className="text-amber-500 font-bold">¿ Estas seguro de eliminar este usuario ?</span><br />
            <span className="text-pink-500 font-bold">¡ Esta acción no se puede deshacer !</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <div className="inline-flex gap-2">
              <Button variant="outline" type="button">
                Cancelar
              </Button>
              <Button
                onClick={handleDelete}
                variant="danger"
                type="button"
              >
                Eliminar
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUser;