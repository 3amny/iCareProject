import React from "react";
import { SearchClinic } from "shared/Search";
import { ClinicsContainer } from "shared/Container";
import Wrapper from "./Wrapper";
const AdminClinicsPage = () => {
  return (
    <Wrapper>
   
        <SearchClinic />
        <ClinicsContainer />
  
    </Wrapper>
  );
};

export default AdminClinicsPage;
