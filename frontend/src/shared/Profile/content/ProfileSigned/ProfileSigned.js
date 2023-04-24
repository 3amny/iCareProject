import React from "react";
import profileImage from "assets/images/profile.jpg";
import { IconButton } from "shared/Button";

export const ProfileSigned = ({
  firstName,
  lastName,
  type,
  btnColor,
  icon,
  btnClass,
  onPress
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
          icon={icon}
          onClick={onPress}
        />
      </div>
    </div>
  );
};
