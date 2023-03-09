import React from "react";
import profile from "./../../../../../assets/images/profile.jpg";
import styled from "styled-components";

export const CardDoctorLong = () => {
  return (
    <Wrapper>
      <div className="doc-container">
        <div className="doc-image">
          <img src={profile} alt="doctor" />
        </div>
        <div className="doc-profile">
          <div className="doc-name">
            <h3>Dr. Robert Henry</h3>
            <p className="doc-speciality">Cardiologist</p>
            <p>Hospital</p>
          </div>
          <hr
            style={{
              color: "var(--primary-700)",
              backgroundColor: "var(--primary-700)",
            }}
          />
          <div className="doc-details">
            <div className="doc-exp">
              <p>5 years of experience</p>
            </div>
            <div className="doc-rating">
              stars <span>(102)</span>
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

  .doc-image {
    display: flex;
    align-items: center;
    img {
      max-width: clamp(100px, 30vw, 200px);
      width: 150px;
    }
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
`;
