'use client';

import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";

export const Profile = () => {

  const { data: session } = useSession();

  return (
    <>
      {
        session && session.user && session.user.image ? (
          <figure>
            <Image
              src={session.user?.image as string}
              alt={`${session.user?.name} Logo`}
              className="border box-content border-gray-400 rounded"
              width={96}
              height={96}
              priority
            />
          </figure>
        ) : (
          <figure className="border border-gray-400 rounded p-2 box-content">
            <FaUser size={80} className="text-gray-400" />
          </figure>
        )
      }
    </>
  );
};

export default Profile;