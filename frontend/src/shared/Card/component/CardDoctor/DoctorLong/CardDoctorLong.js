import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
      <div className="doc-container">
        <div className="doc-image">
          <Link to={`/api/doctors/${_id}`} className="button muted-button">
            <div className="main-icon">{firstName.charAt(0)}</div>
          </Link>
        </div>

        <div className="doc-profile">
          <div className="doc-name">
            <h4>
              Dr.{firstName} {lastName}
            </h4>
            <p className="doc-speciality">{docType}</p>
            <p>{clinic}</p>
          </div>
          <hr
            style={{
              color: "var(--primary-700)",
              backgroundColor: "var(--primary-700)",
            }}
          />
          <div className="doc-details">
            <div className="doc-exp">
              <p>{experience}</p>
            </div>
            <div className="doc-rating">
              stars <span>(102)</span>
            </div>
            <div className="link">
              <Link to={`/api/doctors/${_id}`} className="button muted-button">
                {" "}
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
  .doc-container {
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
  .doc-image {
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .doc-name {
    h3 {
      margin-bottom: 0;
    }
  }
  p {
    margin-bottom: 0;
    margin-top: 5px;
    color: var(--fontColor);
  }
  .doc-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(auto);
  }
  .doc-exp {
    grid-column: 1;
  }
  .doc-rating {
    grid-column: 1;
  }
  .doc-link {
    grid-column: 2;
    text-align: end;
  }
  @media screen and (max-width: 45em) {
  .doc-details {
    display: block;
  }
  
  .doc-exp, .doc-rating, .doc-link {
    grid-column: auto;
  }
}
`;
