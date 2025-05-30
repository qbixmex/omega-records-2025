import { Montserrat, Anton, Open_Sans } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export const anton = Anton({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--font-anton'
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans'
});