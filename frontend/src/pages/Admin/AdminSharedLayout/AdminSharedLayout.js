import { Sidebar } from "widgets/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { adminSideBarLinks } from "utils/constants";
import { useState } from "react";
import { logoutUser } from "features/User/Auth/userSlice";
export const AdminSharedLayout = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openSidebar = () => setIsOpened(!isOpened);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Wrapper>
      <Sidebar
        isOpened={isOpened}
        user={user}
        links={adminSideBarLinks}
        logout={onLogout}
        openSidebar={openSidebar}
      />
      <Outlet />
    </Wrapper>
  );
};
