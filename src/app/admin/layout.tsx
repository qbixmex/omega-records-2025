import { FC } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omega Records",
  description: "Music Recording Studio",
  robots: "noindex, nofollow",
};

type Props = Readonly<{ children: React.ReactNode; }>;

const AdminLayout: FC<Props> = async ({ children }) => {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
