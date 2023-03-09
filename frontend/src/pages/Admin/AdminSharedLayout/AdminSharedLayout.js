import { Sidebar } from "widgets/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Wrapper from "./Wrapper";
export const AdminSharedLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};
