import { Link, useParams } from "react-router-dom";

const SignleDoctorPage = () => {
  const { doctorId } = useParams();
  return (
    <>
      <h4> Doctor page</h4>
      <h5>{doctorId}</h5>
    </>
  );
};

export default SignleDoctorPage;
