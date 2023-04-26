import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/Navbar/Navbar";
import { Footer } from "widgets/Footer/Footer";
export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
