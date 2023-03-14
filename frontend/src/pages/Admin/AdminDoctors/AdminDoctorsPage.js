import React from "react";
import { SearchDoctor, SearchUser } from "shared/Search";
import Wrapper from "./Wrapper";
import { DoctorsContainer } from "shared/Container";
const AdminDoctorsPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <SearchDoctor />
        <DoctorsContainer/>
      </div>
    </Wrapper>
  );
};

export default AdminDoctorsPage;
