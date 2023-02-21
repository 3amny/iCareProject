export const ProfileSignedNav = ({
  firstName,
  lastName,
  iconClass,
  expandProfile,
  isOpened,
}) => {
  return (
      <div className="profile-content" onClick={expandProfile}>
        <div className="profile">
          <i className={iconClass} />
          <div className="profile-details">
            <div className="name">
              {firstName} {lastName}
            </div>
          </div>
        </div>
      </div>

  );
};
