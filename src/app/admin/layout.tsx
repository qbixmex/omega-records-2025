import { FC } from "react";
import type { Metadata } from "next";

import Navigation from "./(auth)/components/Navigation";

export const metadata: Metadata = {
  title: "Omega Records",
  description: "Music Recording Studio",
  robots: "noindex, nofollow",
};

type Props = Readonly<{ children: React.ReactNode; }>;

const AdminLayout: FC<Props> = async ({ children }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] justify-center min-h-screen">
      <header className="flex justify-between items-center p-5">
        <Navigation />
      </header>
      <main className="container mx-auto px-5 flex flex-col items-center justify-center">
        {children}
      </main>
      <footer className="p-5">
        <p className="text-gray-400 text-center text-sm">&copy; 2025 Omega Records</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
