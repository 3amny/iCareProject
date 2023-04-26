import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper.js";
import { useEffect } from "react";
import { getAllClinics } from "features/Admin/Clinic/getAll/allClinicsSlice.js";
import { SearchClinic } from "shared/Search/index.js";
import { ClinicsUserContainer } from "shared/Container/component/ClinicsContainer/User/ClinicsUserContainer.js";

const ClinicsPage = () => {
  const { search, sort, page } = useSelector((store) => store.allClinics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClinics());
  }, [page, search, sort]);
  return (
    <Wrapper>
      <div className="container">
        <SearchClinic />
        <ClinicsUserContainer />
      </div>
    </Wrapper>
  );
};

export default ClinicsPage;
