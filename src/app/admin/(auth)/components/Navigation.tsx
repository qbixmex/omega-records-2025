'use client';

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { logout } from "../actions/handleLogout";

export const Navigation = () => {

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  return (
    <>
      <Image
        src="/images/omega-records-logo.png"
        alt="Omega Records Logo"
        width={238}
        height={80}
        priority
      />
      {isAuthenticated && (
        <section className="flex gap-5">
          <Link
            href="/admin/dashboard"
            className="text-gray-400 font-semibold italic hover:text-gray-500 hover:underline"
          >Dashboard</Link>

          <button
            className="inline-flex items-center gap-2 cursor-pointer"
            onClick={() => logout()}
            title="Sign Out"
          >
            <span className="text-sm font-semibold italic">Logout</span>
            <MdLogout size={25} />
          </button>
        </section>
      )}
    </>
  );
};

export default Navigation;