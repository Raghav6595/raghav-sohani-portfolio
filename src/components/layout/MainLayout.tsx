import type { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;