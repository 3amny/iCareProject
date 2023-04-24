export const ProfileSignedNav = ({
  firstName,
  icon,
  expandProfile,
}) => {
  return (
    <div className="profile-content" onClick={expandProfile}>
      <div className="profile">
        {icon}
        <div className="profile-details">
          <div className="name">
            {firstName}
          </div>
        </div>
      </div>
    </div>
  );
};
