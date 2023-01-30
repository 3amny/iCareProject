import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Banner } from "../shared/ui";
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="banner-error">
        <Banner />
        <div className="text-error">
          <h2>Ohh! Page Not Found</h2>
          <p>We can't seem to find page you're looking for...</p>
          <Link to="/">
            <button className="btn">Back home</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .banner{
    max-width: 80%;
  }
  .banner-error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
 
  @media screen and (max-width: 45rem){
    img{
      max-width: 100%;
    }
    .banner-error {
    text-align: center;
    }
    h2{
      font-size: 5vw;
    }
    p{
      font-size: 3vw;
    }
  }
`;
export default ErrorPage;
