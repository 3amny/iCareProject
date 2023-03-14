import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import { Checkbox, FormRow } from "shared/Input";
import { useAppContext } from "context/appContext";
export const CardClinic = ({
  organization,
  email,
  city,
  street,
  phone,
  reviews,
  _id,
  createdAt,
  isVerified,
}) => {
  let date = dayjs(createdAt).format("MMMM D, YYYY");
  const { setEditClinic, deleteClinicAdmin } = useAppContext();

  return (
    <Wrapper className="container">
      <div className="clinic-primary-info">
        <h5>
          Id: <span>{_id}</span>
        </h5>
        <h5>
          Created at: <span>{date}</span>
        </h5>
      </div>
      <div className="clinic-id"></div>
      <div className="clinic-info">
        <div className="clinic-name">
          <h5>
            Organization: <span>{organization}</span>
          </h5>
        </div>
        <div className="clinic-location">
          <h5>
            City: <span>{city}</span>
          </h5>
          <h5>
            Street: <span>{street}</span>
          </h5>
        </div>
        <h5>
          Phone: <span>{phone}</span>
        </h5>
        <h5>
          Email: <span>{email}</span>
        </h5>
        <Checkbox
          type="checkbox"
          checked={isVerified}
          readOnly={true}
          name="Verified"
        />
      </div>
      <div className="clinic-actions">
        <Link
          to="/admin/clinics/create"
          className="btn edit-btn"
          onClick={() => setEditClinic(_id)}
        >
          Edit
        </Link>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => deleteClinicAdmin(_id)}
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
    font-size: 16px;
    font-weight: 400;
  }
  .checkbox {
    display: inline-flex;
    justify-content: center;
    h5 {
      margin-right: 6px;
    }
  }
  .form-input-checkbox-sm {
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
  }
  .clinic-primary-info {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }
  .clinic-info {
    padding: 1rem 1.5rem;
    align-items: center;
  }
  .clinic-actions {
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
