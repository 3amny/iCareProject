import {Footer} from "../../../widgets/footer";
import { Sidebar } from "../../../widgets/sidebar";
import { Outlet } from "react-router-dom";
import Wrapper from "./Wrapper.js";
export const AdminSharedLayout = () => {
  return (
    <>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </>
  );
}
