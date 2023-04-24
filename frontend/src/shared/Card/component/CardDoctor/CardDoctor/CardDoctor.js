import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { deleteDoctorAdmin, setEditDoctor } from "features/Admin/Doctor/CRUD/doctorSlice";

export const CardDoctor = ({
  firstName,
  lastName,
  phone,
  role,
  dateOfBirth,
  experience,
  startTime,
  endTime,
  interval,
  email,
  _id,
  createdAt,
  docType,
  clinic,
}) => {
  let date = dayjs(createdAt).format("MMMM D, YYYY");
  const dispatch = useDispatch();
  return (
    <Wrapper className="container">
      <div className="doctor-primary-info">
        <h5>
          Id: <span>{_id}</span>
        </h5>
        <h5>
          Created at: <span>{date}</span>
        </h5>
      </div>
      <div className="doctor-info">
        <div className="doctor-name">
          <h5>
            Full Name:
            <span>
              {firstName} {lastName}
            </span>
          </h5>
          <h5>
            <span>Specialty: {docType}</span>
          </h5>
          <h5>
            <span>Experience: {experience}</span>
          </h5>
          <h5>
            <span>Clinic: {clinic}</span>
          </h5>
        </div>
        <h5>DOB: {dateOfBirth}</h5>
        <h5>
          Phone: <span>{phone}</span>
        </h5>
        <h5>
          Email: <span>{email}</span>
        </h5>
        <h5>
          Start Time: <span>{startTime}</span>
        </h5>
        <h5>
          End Time: <span>{endTime}</span>
        </h5>
        <h5>
          Interval: <span>{interval}</span>
        </h5>
        <h5>
          Role: <span>{role}</span>
        </h5>
      </div>
      <div className="doctor-actions">
        <Link
          to="/admin/doctors/edit"
          className="btn edit-btn"
          onClick={() =>
            dispatch(
              setEditDoctor({
                firstName,
                lastName,
                phone,
                role,
                dateOfBirth,
                experience,
                startTime,
                endTime,
                interval,
                email,
                editClinicId: _id,
                createdAt,
                docType,
                clinic,
              })
            )
          }
        >
          Edit
        </Link>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => dispatch(deleteDoctorAdmin(_id))}
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
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }

  .doctor-primary-info {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }
  .doctor-info {
    padding: 1rem 1.5rem;
    align-items: center;
  }
  .doctor-actions {
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
  &:hover .doctor-actions {
    visibility: visible;
  }
`;
