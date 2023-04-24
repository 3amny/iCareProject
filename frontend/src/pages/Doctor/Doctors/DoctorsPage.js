import { CardDoctorLong } from "shared/Card/index.js";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper.js";
import { getAllDoctors } from "features/Admin/Doctor/getAll/allDoctorsSlice.js";
import { useEffect } from "react";

const DoctorsPage = () => {
  const { doctors, totalDoctors, isLoading } = useSelector(
    (store) => store.allDoctors
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors());
  }, []);
  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  {
    if (totalDoctors === 0) {
      return <h2>No doctors to display....</h2>;
    }
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="doctors-wrapper">
          <div className="search-bar">Search</div>
          <div className="doctors">
            {doctors.map((doctor) => {
              return (
                <CardDoctorLong
                  key={doctor._id}
                  {...doctor}
                  docType={doctor.docType ? doctor.docType.name : ""}
                  clinic={doctor.clinic ? doctor.clinic.name : ""}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default DoctorsPage;
