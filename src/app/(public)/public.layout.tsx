import { FC } from "react";
import TopNavigation from "../components/navigation/top-navigation.component";
import Footer from "../components/footer/footer.component";

type Props = Readonly<{ children: React.ReactNode; }>;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <TopNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
