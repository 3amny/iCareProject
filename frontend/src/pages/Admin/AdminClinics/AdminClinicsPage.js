import React, { useEffect } from "react";
import { SearchClinic } from "shared/Search";
import { ClinicsContainer } from "shared/Container";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getAllClinics } from "features/Admin/Clinic/getAll/allClinicsSlice";
const AdminClinicsPage = () => {
  const { page, search, sort } = useSelector((store) => store.allClinics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClinics());
  }, [page, search, sort]);

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
