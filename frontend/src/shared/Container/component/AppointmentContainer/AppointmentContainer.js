import React from "react";
import { CardUserAppointment } from "shared/Card/component/CardUserAppointment/CardUserAppointment";
import { CardDoctorAppointment } from "shared/Card/component/CardDoctorAppointment/CardDoctorAppointment";
import styled from "styled-components";

export const AppointmentContainer = ({
  totalAppointments,
  appointments,
  handleDelete,
  isUser,
}) => {
  return (
    <Wrapper>
      <h5>
        {totalAppointments} appointment
        {totalAppointments > 1 ? "s were" : " was"} found
      </h5>
      <div className="appointments">
        {appointments.map((appointment) => {
          return isUser ? (
            <CardUserAppointment
              key={appointment._id}
              {...appointment}
              handleDelete={handleDelete}
            />
          ) : (
            <CardDoctorAppointment
              key={appointment._id}
              {...appointment}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .appointments {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media screen and (max-width: 45em) {
    .appointments {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;
