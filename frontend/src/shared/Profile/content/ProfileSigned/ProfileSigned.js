import React from "react";
import profileImage from "assets/images/profile.jpg";
import { IconButton } from "shared/Button";

export const ProfileSigned = ({
  user,
  type,
  btnColor,
  icon,
  btnClass,
  onPress,
}) => {
  return (
    <div className="profile-content">
      <div className="profile">
        <div className="profile-details">
          <div className="main-icon" alt="user_image">
            {user.firstName.charAt(0)}
          </div>
          <div className="name">
            {user.firstName} {user.lastName}
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
