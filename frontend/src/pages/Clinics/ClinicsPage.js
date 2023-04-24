import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper.js";
import { useEffect } from "react";
import { getAllClinics } from "features/Admin/Clinic/getAll/allClinicsSlice.js";
import { CardClinicLong } from "shared/Card";

const ClinicsPage = () => {
  const { clinics, totalClinics, isLoading } = useSelector(
    (store) => store.allClinics
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClinics());
  }, []);
  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  {
    if (totalClinics === 0) {
      return <h2>No clinics to display....</h2>;
    }
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="clinics-wrapper">
          <div className="search-bar">Search</div>
          <div className="clinics">
            {clinics.map((clinic) => {
              return <CardClinicLong key={clinic._id} {...clinic} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClinicsPage;
