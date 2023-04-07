import React from "react";
import { SearchClinic } from "shared/Search";
import { ClinicsContainer } from "shared/Container";
import Wrapper from "./Wrapper";
const AdminClinicsPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <SearchClinic />
        <ClinicsContainer />
      </div>
    </Wrapper>
  );
};

export default AdminClinicsPage;
