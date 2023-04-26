import { getAppointmentsByDoctorId } from "features/Appointment/appointmentSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppointmentContainer } from "shared/Container/component/AppointmentContainer/AppointmentContainer";
import Wrapper from "pages/AccountAppointments/Wrapper";
const DoctorAppoinments = () => {
  const dispatch = useDispatch();
  const { appointments, totalAppointments, isLoading, editAppointmentId } =
    useSelector((store) => store.appointment);
  const { user } = useSelector((store) => store.user);
  const { doctor } = useSelector((store) => store.doctorAuth);
  useEffect(() => {
    dispatch(getAppointmentsByDoctorId());
  }, [doctor]);
  const isUser = user && !doctor ? true : false;

  if (isLoading) {
    return <h5>Loading....</h5>;
  }
  return (
    <Wrapper>
      <div className="container">
        <AppointmentContainer
          appointments={appointments}
          totalAppointments={totalAppointments}
          isUser={isUser}
        />
      </div>
    </Wrapper>
  );
};

export default DoctorAppoinments;
