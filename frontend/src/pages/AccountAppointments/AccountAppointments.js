import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import { AppointmentContainer } from "shared/Container/component/AppointmentContainer/AppointmentContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentsByUserId } from "features/Appointment/appointmentSlice";

const AccountAppointments = () => {
  const dispatch = useDispatch();
  const { appointments, totalAppointments, isLoading, editAppointmentId } =
    useSelector((store) => store.appointment);
  const { user } = useSelector((store) => store.user);
  const { doctor } = useSelector((store) => store.doctorAuth);
  useEffect(() => {
    dispatch(getAppointmentsByUserId());
  }, [user]);
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

export default AccountAppointments;
