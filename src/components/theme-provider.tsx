"use client"

import { ComponentProps } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

type Props = ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
