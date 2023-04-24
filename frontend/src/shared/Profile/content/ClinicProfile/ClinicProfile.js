import React from "react";
import { Accordion } from "shared/Accordion";
import { Checkbox } from "shared/Input";
export const ClinicProfile = ({ currentClinic }) => {
  return (
    <div className="profile">
      <div className="cl-image">
        <div className="main-icon">{currentClinic.name.charAt(0)}</div>
      </div>
      <div className="cl-details">
        <div className="cl-name">
          <h4>{currentClinic.name}</h4>
        </div>
        <div className="cl-address">
          <p className="cl-city">
            <span>City: </span> {currentClinic.city}
          </p>
          <p className="cl-street">
            <span>Street: </span>
            {currentClinic.street}
          </p>
        </div>
        <div className="cl-verification">
          <Checkbox
            type="checkbox"
            checked={currentClinic.isVerified}
            readOnly={true}
            name="Verified"
          />
        </div>
      </div>
      <div className="cl-overview">
        <Accordion
          title="Overview"
          text="
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
      </div>
    </div>
  );
};
