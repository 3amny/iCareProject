import { CardDoctorLong } from "shared/Card/index.js";
import { FormRow } from "shared/Input/index.js";
import Wrapper from "./Wrapper.js";

const DoctorsPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="doctors-wrapper">
          <div className="search-bar">
           Search
          </div>
          <div className="doctors">
            <CardDoctorLong/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default DoctorsPage;
