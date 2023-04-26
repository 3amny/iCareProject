import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaClinicMedical } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
export const CardDoctorLong = ({
  _id,
  firstName,
  lastName,
  docType,
  clinic,
  experience,
}) => {
  return (
    <Wrapper>
      <header>
        <Link to={`/api/doctors/${_id}`} className="button muted-button">
          <div className="main-icon">{firstName.charAt(0)}</div>
        </Link>
        <div className="info">
          <h5>
            Dr. {firstName} {lastName}
          </h5>
          <p>{docType}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <div className="details">
            <span className="icon">
              <FaClinicMedical />
            </span>
            <span className="text">{clinic} </span>
          </div>
          <div className="details">
            <span className="icon">
              <MdOutlineWork />
            </span>
            <span className="text">{experience} </span>
          </div>
        </div>
        <footer>
          <div className="actions">
            <Link to={`/api/doctors/${_id}`} className="btn">
              See more
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;

  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  footer {
    margin-top: 1rem;
  }
  &:hover .actions {
    visibility: visible;
  }
  .details {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    .icon {
      font-size: 1rem;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      svg {
        color: var(--grey-400);
      }
    }
    .text {
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
    }
  }
`;
