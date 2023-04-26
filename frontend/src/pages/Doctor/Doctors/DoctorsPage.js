import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper.js";
import { getAllDoctors } from "features/Admin/Doctor/getAll/allDoctorsSlice.js";
import { useEffect } from "react";
import { SearchDoctor } from "shared/Search/index.js";
import { DoctorsUserContainer } from "shared/Container/index.js";

const DoctorsPage = () => {
  const { page, search, searchSpecialty, searchClinics, sort } = useSelector(
    (store) => store.allDoctors
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors());
  }, [page, search, searchSpecialty, searchClinics, sort]);

  return (
    <Wrapper>
      <div className="container">
        <SearchDoctor />
        <DoctorsUserContainer />
      </div>
    </Wrapper>
  );
};
export default DoctorsPage;
