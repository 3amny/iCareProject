import { Link } from "react-router-dom";
import Wrapper from "./Wrapper.js";
import { CardIcon, CardDoctorSmall } from "shared/Card/index.js";
import { cardItems } from "utils/constants/index.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "features/Reviews/reviewSlice.js";
import landing from "assets/images/landing.svg";
import landingReview from "assets/images/landing_review.svg";
export const LandingPage = () => {
  const dispatch = useDispatch();
  const { allReviews } = useSelector((store) => store.review);
  useEffect(() => {
    dispatch(getAllReviews({ limit: null }));
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <div className="landing-wrapper">
          <div className="main-section">
            <div className="catch-phrase">
              <h2>
                <span>We care</span>
                <br />
                about your health
              </h2>
              <p>
                Welcome to iCare, your one-stop solution for hassle-free
                healthcare management.
                <br /> With our easy-to-use platform, you can easily manage your
                doctor's schedule and <br /> book appointments online from
                anywhere, at any time.
              </p>
              <Link to="/doctors/appointment" className="link">
                Book an appointment
              </Link>
            </div>

            <img
              src={landing}
              style={{ width: "600px" }}
              alt="Doctor"
              className="circle-image"
            />
          </div>
          <div className="second-section">
            <div className="section-title">
              <h2>Our Advantages</h2>
            </div>
            <div className="services">
              <CardIcon items={cardItems} />
            </div>
          </div>
          <hr />
          <div className="third-section">
            <div className="section-title phrase">
              <h1>
                "Revolutionize your healthcare management with iCare - because
                your health deserves to be hassle-free!"
              </h1>
              <h4>Alina Ian, CEO of iCare</h4>
            </div>
          </div>
          <hr />
          <div
            className="fourth-section"
            style={{
              backgroundImage: `url(${landingReview})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "500px",
              
            }}
          >
            <div className="section-title">
              <h2>What people think</h2>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
