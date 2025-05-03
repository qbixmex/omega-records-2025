import { FC } from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Omega Records",
  description: "Music Recording Studio",
  robots: "noindex, nofollow",
};

type Props = Readonly<{ children: React.ReactNode; }>;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] justify-center min-h-screen">

    <header className="inline-flex justify-center p-5">
      <Image
        src="/images/omega-records-logo.png"
        alt="Omega Records Logo"
        width={238}
        height={80}
        priority
      />
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

export default RootLayout;
