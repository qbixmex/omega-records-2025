'use client';

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { logout } from "../actions/handleLogout";
import { ModeToggle } from "@/components/dark-light-switcher";
import { LayoutDashboard } from 'lucide-react';
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <section className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip delayDuration={250}>
              <TooltipTrigger>
                <Link
                  href="/admin/dashboard"
                  className={buttonVariants({ variant: "outline" })}
                  title="Dashboard"
                >
                  <LayoutDashboard />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left">
                Dashboard
              </TooltipContent>
            </Tooltip>

            <ModeToggle />
          
            <Tooltip delayDuration={250}>
              <TooltipTrigger asChild>
                <Button
                  className="cursor-pointer"
                  onClick={() => logout()}
                  variant="outline"
                  title="Sign Out"
                >
                  <MdLogout size={25} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Logout
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </section>
      )}
    </>
  );
};

export default Navigation;