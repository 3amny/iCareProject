import React, { useEffect } from "react";
import { SearchDoctor, SearchUser } from "shared/Search";
import Wrapper from "./Wrapper";
import { DoctorsContainer } from "shared/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "features/Admin/Doctor/getAll/allDoctorsSlice";
const AdminDoctorsPage = () => {
  const { page, search, searchSpecialty, searchClinics, sort } = useSelector(
    (store) => store.allDoctors
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors());
  }, [page, search, searchSpecialty, searchClinics, sort]);

  return (
    <Wrapper>
      <SearchDoctor />
      <DoctorsContainer />
    </Wrapper>
  );
};

export default AdminDoctorsPage;
