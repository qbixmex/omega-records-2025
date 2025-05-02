import type { Metadata } from "next";
import "./globals.css";
import { FC } from "react";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Omega Records",
  description: "Music Recording Studio",
  robots: "index, follow",
};

type Props = Readonly<{ children: React.ReactNode; }>;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
