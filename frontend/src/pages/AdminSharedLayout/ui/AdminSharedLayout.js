
import { Sidebar } from "../../../widgets/sidebar";
import { Outlet } from "react-router-dom";
export const AdminSharedLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
