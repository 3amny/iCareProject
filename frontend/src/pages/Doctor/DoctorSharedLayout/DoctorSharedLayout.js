import { Sidebar } from "widgets/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutDoctor } from "features/Doctor/Auth/doctorAuthSlice";
import { doctorSideBarLinks } from "utils/constants/sidebar/doctorSidebar.constants";

const DoctorSharedLayout = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openSidebar = () => setIsOpened(!isOpened);
  const { doctor } = useSelector((store) => store.doctorAuth);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutDoctor());
  };

  return (
    <Wrapper>
      <Sidebar
        isOpened={isOpened}
        user={doctor}
        links={doctorSideBarLinks}
        logout={() => onLogout()}
        openSidebar={openSidebar}
      />
      <Outlet />
    </Wrapper>
  );
};

export default DoctorSharedLayout;
