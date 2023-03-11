import { Link } from "react-router-dom";
import { FormRow, Slider } from "shared/Input/index.js";
import { useState } from "react";
import Wrapper from "./Wrapper.js";
import { CardIcon, CardDoctorSmall } from "shared/Card/index.js";
import { cardItems } from "utils/constants/index.js";
export const LandingPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => setIsChecked(!isChecked);
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <Link to="/doctors/appointment" className="link">
                Book an appointment
              </Link>
            </div>
            <div className="doctor-image">
              <div className="image-container">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Doctor"
                  className="circle-image"
                />
              </div>
            </div>
            <div className="search">
              <div className="search-container">
                <div className="search-title">
                  <p>Find a doctor</p>
                </div>
                <div className="search-details">
                  <FormRow type="name" placeholder="Doctor's name" />
                  <FormRow type="speciality" placeholder="Speciality" />
                  <p> Availability</p>
                  <Slider value={isChecked} onChange={handleChange} />
                  <button type="submit" className="btn-search">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className="section-title">
              <h2>Our Medical Services</h2>
            </div>
            <div className="services">
              <CardIcon items={cardItems} />
            </div>
          </div>
          <div className="third-section">
            <div className="section-title">
              <h2>Our Doctors</h2>
            </div>
            <div className="doctors">
              <CardDoctorSmall/>
            </div>
            <div className="doctor-link">
              <Link to="/api/doctors">See More</Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
