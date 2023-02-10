import React from "react";
import { Link } from "react-router-dom";
import Wrapper  from "./Wrapper.js";
import { Banner } from "../../../shared/ui/Image";

export const ErrorPage = () => {
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
