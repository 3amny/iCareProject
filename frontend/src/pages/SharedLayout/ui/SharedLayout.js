import { Outlet } from "react-router-dom";
import { Navbar } from "../../../widgets/navbar";
import { Footer } from "../../../widgets/footer";
export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
