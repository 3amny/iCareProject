import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardClinicLong = ({ name, phone, city, street, _id }) => {
  return (
    <Wrapper>
      <div className="clinic-container">
        <div className="clinic-image">
          <Link to={`/api/clinics/${_id}`}>
            <div className="main-icon">{name.charAt(0)}</div>
          </Link>
        </div>
        <div className="clinic-profile">
          <div className="clinic-name">
            <h4>{name}</h4>
          </div>
          <hr
            style={{
              color: "var(--primary-700)",
              backgroundColor: "var(--primary-700)",
            }}
          />
          <div className="clinic-details">
            <div className="clinic-address">
              <p>{street}</p>
              <p>{city}</p>
            </div>
            <div className="clinic-phone">
              <p>{phone}</p>
            </div>
            <div className="link">
              <Link to={`/api/clinics/${_id}`} className="button muted-button">
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .clinic-container {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 2%;
    width: 60vw;
    max-width: clamp(var(--fixed-width), 60vw, var(--fluid-width));
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    padding: 2rem 2.5rem;
    margin: 2rem auto;
    transition: var(--transition);
  }
  .main-icon {
    width: clamp(60px, 10vw, 80px);
    height: clamp(60px, 10vw, 80px);
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 1.5rem;
  }
  .clinic-image {
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .clinic-name {
    h3 {
      margin-bottom: 0;
    }
  }
  .clinic-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(auto);
  }
  .clinic-address {
    grid-column: 1;
  }
  .clinic-phone {
    grid-column: 1;
  }
  .clinic-link {
    grid-column: 2;
    text-align: end;
  }
  p {
    margin-bottom: 0;
    margin-top: 5px;
    color: var(--fontColor);
  }
  @media screen and (max-width: 45em) {
    .clinic-details {
      display: block;
    }

    .clinic-address .clinic-phone .clinic-link {
      grid-column: auto;
    }
  }
`;
