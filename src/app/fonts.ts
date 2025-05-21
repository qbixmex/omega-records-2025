import { Montserrat, Anton } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export const anton = Anton({
  weight: ['400'],
  variable: '--font-anton'
});