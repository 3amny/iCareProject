import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/navbar/Navbar";
import { Footer } from "widgets/footer/Footer";
export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
