import React from "react";
import profileImage from "../../../../../assets/images/profile.jpg";
import { IconButton } from "../../../Button";

export const ProfileSigned = ({
  firstName,
  lastName,
  type,
  btnColor,
  iconClass,
  btnClass,
  onClick
}) => {

  return (
    <div className="profile-content">
      <div className="profile">
        <div className="profile-details">
          <img src={profileImage} alt="user_image" />
          <div className="name">
            {firstName} {lastName}
          </div>
        </div>
        <IconButton
          type={type}
          color={btnColor}
          className={btnClass}
          iconClassName={iconClass}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
