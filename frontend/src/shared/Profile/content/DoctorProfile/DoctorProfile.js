import React from "react";
import { Accordion } from "shared/Accordion";
import { LinkButton } from "shared/Button";
import { Checkbox } from "shared/Input";

export const DoctorProfile = ({ currentDoctor }) => {
  return (
    <div className="profile">
      <div className="doc-image">
        <div className="main-icon">
          <span>{currentDoctor.firstName.charAt(0)}</span>
        </div>
      </div>
      <div className="doc-details">
        <div className="doc-name">
          <h4>
            Dr.{currentDoctor.firstName} {currentDoctor.lastName}
          </h4>
        </div>
        <div className="doc-occupation">
          <p className="doc-speciality">
            <span>Specialty: </span> {currentDoctor.docType.name}
          </p>
          <p className="doc-clinic">
            <span>Clinic: </span> {currentDoctor.clinic.name}
          </p>
          <p className="doc-exp">
            <span>Experience: </span>
            {currentDoctor.experience}
          </p>
        </div>
        <div className="doc-verification">
          <Checkbox
            type="checkbox"
            checked={currentDoctor.isVerified}
            readOnly={true}
            name="Verified"
          />
        </div>
      </div>
      <div className="doc-overview">
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
      <div className="doc-appointment">
        <LinkButton
          url={`/api/doctors/${currentDoctor._id}/appointment`}
          type="button"
          text="Request appointment"
          className="btn link"
        />
      </div>
    </div>
  );
};
