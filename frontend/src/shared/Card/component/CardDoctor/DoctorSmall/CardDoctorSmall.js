import React from "react";
import profile from "./../../../../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardDoctorSmall = ({items}) => {
  return (
    <Wrapper className="card-doc">
      <div className="doc-container">
        <div className="doc-image">
          <img src={profile} alt="doctor" />
        </div>
        <div className="doc-name">
          <h3>Dr.Robert Henry</h3>
          <p>Cardiologist</p>
        </div>
        <div className="doc-rating">
          stars <span>(102)</span>
        </div>
        <div className="link">
          <Link to="/doctors/:id">Book an appointment</Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .doc-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    padding: 10px 20px;
  }

  .doc-image img {
    max-width: clamp(100px, 30vw, 150px);
    max-height: clapm(150px, 30vw, 200px);
    border-radius: 5px;
  }
  .doc-name {
    h3 {
      font-size: 25px;
      color: var(--fontColor);
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
      margin-bottom: 5px;
      color: var(--fontSmColor);
    }
  }
  .doc-rating {
    span {
      color: var(--fontColor);
      font-weight: bold;
    }
  }
`;
