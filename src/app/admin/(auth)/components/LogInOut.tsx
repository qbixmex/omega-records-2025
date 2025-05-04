'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { MdLogout, MdLogin } from "react-icons/md";
import { LuLoader } from "react-icons/lu";

export const LogInOut = () => {

  const { status } = useSession();

  return (
    <>
      {
        (status === "loading")
          ? <LuLoader size={30} className="animate-spin [animation-duration:2.5s]" />
          : (status === "unauthenticated")
            ? (
              <button
                className="inline-flex items-center gap-2 cursor-pointer"
                onClick={() => signIn()}
                title="Sign In"
              >
                <span className="text-sm font-semibold italic">Login</span>
                <MdLogin size={25} />
              </button>
            ) : (
              <button
                className="inline-flex items-center gap-2 cursor-pointer"
                onClick={() => signOut()}
                title="Sign Out"
              >
                <span className="text-sm font-semibold italic">Logout</span>
                <MdLogout size={25} />
              </button>
            )
      }
    </>
  );
};

export default LogInOut;