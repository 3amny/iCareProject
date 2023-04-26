import { Link } from "react-router-dom";
import Wrapper from "./Wrapper.js";
import { CardIcon } from "shared/Card/index.js";
import { cardItems } from "utils/constants/index.js";
import landing from "assets/images/landing.svg";
export const LandingPage = () => {
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
                healthcare management. With our easy-to-use platform, you can
                easily manage your doctor's schedule and book appointments
                online from anywhere, at any time.
              </p>
              <Link to="/api/doctors" className="link">
                Find a doctor
              </Link>
            </div>
            <div className="main-img-section">
              <img src={landing} alt="Doctor" className="hero-img" />
            </div>
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
        </div>
      </div>
    </Wrapper>
  );
};
