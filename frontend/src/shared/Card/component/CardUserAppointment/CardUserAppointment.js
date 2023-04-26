import dayjs from "dayjs";
import {
  deleteUserAppointment,
} from "features/Appointment/appointmentSlice";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const CardUserAppointment = ({
  _id,
  doctor,
  notes,
  status,
  startDate,
  user,
  endDate,
}) => {
  const dispatch = useDispatch();
  return (
    <Wrapper className="container">
      <div className="app-primary-info">
        <h5 className="date">
          Date:<span>{`${dayjs(startDate).format("DD MMM YYYY")}`}</span>{" "}
        </h5>
        <h5 className="status">
          Status:<span>{status}</span>
        </h5>
        <h5 className="start-time">
          Start Time:<span>{`${dayjs(startDate).format("HH:mm")}`}</span>{" "}
        </h5>
        <h5 className="end-time">
          End Time:<span>{`${dayjs(endDate).format("HH:mm")}`}</span>{" "}
        </h5>
        <h5 className="notes">
          Notes:
          <span>{notes}</span>
        </h5>
      </div>
      <div className="app-info">
        <div className="doctor-info">
          <h5>
            Doctor's name:
            <span>
              {doctor.firstName} {doctor.lastName}
            </span>
          </h5>
          <h5>
            Specialty: <span>{doctor.docType.name}</span>
          </h5>
          <h5>
            Experience: <span>{doctor.experience}</span>
          </h5>
          <h5>
            Phone: <span>{doctor.phone}</span>
          </h5>
        </div>
        <div className="clinic">
          <h5>
            Clinic: <span>{doctor.clinic.name}</span>
          </h5>
          <h5>
            Address: <span>{doctor.clinic.street}</span>
          </h5>
        </div>
      </div>
      <div className="app-actions">
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => dispatch(deleteUserAppointment(_id))}
        >
          Delete
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 2px solid var(--primary-700);
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  h5 {
    letter-spacing: 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700;
    text-transform: none;
  }
  span {
    margin: 0 10px;
    font-size: 16px;
    font-weight: 400;
  }
  .grey {
    color: var(--grey-100);
  }
  .green {
    color: var(--green-dark);
  }
  .app-primary-info {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "date status"
      "start-time end-time"
      "notes notes";
    align-items: center;
    gap: 0.5rem;
  }
  .status {
    grid-area: status;
  }
  .date {
    grid-area: date;
  }
  .start-time {
    grid-area: start-time;
  }
  .end-time {
    grid-area: end-time;
  }
  .notes {
    grid-area: notes;
  }
  .app-info {
    padding: 1rem 1.5rem;
    align-items: center;
  }
  .app-actions {
    padding: 0 1.5rem;
    padding-bottom: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .clinic-actions {
    visibility: visible;
  }
`;
