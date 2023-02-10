import React from "react";
import profileImage from "../../../../../assets/images/profile.jpg";
export const ProfileSigned = ({ firstName, lastName, icon }) => {
  return (
    <div className="profile-content">
      <div className="profile">
        <div className="profile-details">
          <img src={profileImage} alt="user_image"/>
          <div className="name">
            {firstName} {lastName}
          </div>
        </div>
        <i className={icon} />
      </div>
    </div>
  );
};
