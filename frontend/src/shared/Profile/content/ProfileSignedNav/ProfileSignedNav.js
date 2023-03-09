export const ProfileSignedNav = ({
  firstName,
  lastName,
  icon,
  expandProfile,
}) => {
  return (
    <div className="profile-content" onClick={expandProfile}>
      <div className="profile">
        {icon}
        <div className="profile-details">
          <div className="name">
            {firstName} {lastName}
          </div>
        </div>
      </div>
    </div>
  );
};
