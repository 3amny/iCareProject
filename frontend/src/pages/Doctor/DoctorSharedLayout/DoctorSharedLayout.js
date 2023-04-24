import React from "react";
import { Sidebar } from "widgets/sidebar/Sidebar";

const DoctorSharedLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};

export default DoctorSharedLayout;
