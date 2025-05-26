import { FC } from "react";
import { Metadata } from "next";
import { montserrat, anton, openSans } from "./fonts";
import AuthProvider from "@/app/admin/(auth)/components/AuthProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Omega Records",
    absolute: "Omega Records - Estudio de Grabación Profesional",
    default: "Omega Records",
  },
  description: "Omega Records es un estudio de grabación y producción musical profesional, especializado en ofrecer servicios de alta calidad para músicos y bandas.",
  robots: "index, follow",
};

type Props = Readonly<{ children: React.ReactNode; }>;

const fontsVariables = [
  montserrat.variable,
  anton.variable,
  openSans.variable
];

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="es" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/png" href="./images/favicon.png" />
        </head>
        <body className={`${fontsVariables.join(' ')} antialiased`}>
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
