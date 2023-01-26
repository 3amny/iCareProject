import { Link, useParams } from "react-router-dom";

const SingleClinicPage = () => {
  const { clinicId } = useParams();
  return (
    <>
      <h4> Clinic page</h4>
      <h5>{clinicId}</h5>
    </>
  );
}

export default SingleClinicPage