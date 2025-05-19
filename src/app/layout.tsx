import { FC } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import AuthProvider from "@/app/admin/(auth)/components/AuthProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Omega Records",
  description: "Music Recording Studio",
  robots: "index, follow",
};

type Props = Readonly<{ children: React.ReactNode; }>;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="es" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/png" href="./images/favicon.png" />
        </head>
        <body className={`${montserrat.variable} antialiased`}>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster position="top-right" richColors />
            </ThemeProvider>
          </AuthProvider>
        </body>
      </html>
  );
};

export default RootLayout;
