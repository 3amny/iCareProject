import { Link } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "utils/constants/nav/nav.constants";
import { useState } from "react";
import { Logo } from "shared/Image";
import { LinkButton, ToggleButton } from "shared/Button";
import { NavList } from "shared/List";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "features/User/Auth/userSlice";
import { ProfileSignedNav } from "shared/Profile";
import { MdLogout } from "react-icons/md";
import { FiUser } from "react-icons/fi";
export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const showDropdown = () => setIsHovered(true);
  const closeDropdown = () => setIsHovered(false);

  const [isOpened, setIsOpened] = useState(false);
  const openSidebar = () => setIsOpened(!isOpened);
  const [isOpenedProfile, setIsOpenedProfile] = useState(false);
  const openProfileInfo = () => setIsOpenedProfile(!isOpenedProfile);
  const dispatch = useDispatch();

  const { user} = useSelector((store) => store.user);
  return (
    <Wrapper data-overlay={isOpened}>
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="nav-logo">
            <Logo />
          </Link>
          <ToggleButton
            isOpened={isOpened}
            ariaExpanded={isOpened}
            onClick={openSidebar}
            color="white"
            className="mobile-nav-toggle"
            ariaControls="nav-container"
          />
          <div
            className="nav-container"
            id="nav-container"
            data-visible={isOpened}
          >
            <nav className="primary-navigation">
              <NavList
                isHovered={isHovered}
                items={navLinks}
                showDropdown={showDropdown}
                closeDropdown={closeDropdown}
                classNameLi="link"
                classNameUl="nav-links"
              />
            </nav>
            {!user || user.role !== "642509196383af1ca69c2e9b" ? (
              <div className="nav-btn">
                <LinkButton
                  url="/account/signin"
                  className="button signin"
                  text="Sign in"
                  type="button"
                />
                <LinkButton
                  url="/account/signup"
                  className="button signup"
                  text="Sign up"
                  type="button"
                />
              </div>
            ) : (
              <div className="nav-profile">
                <ProfileSignedNav
                  firstName={user.firstName}
                  icon={<FiUser className="nav-userIcon" />}
                  expandProfile={openProfileInfo}
                />
                {isOpenedProfile ? (
                  <div className="profile-dropdown">
                    <div className="list">
                      <Link to="account/details" className="profile-link">
                        Account
                      </Link>
                      <Link to="account/appointments" className="profile-link">
                        Appointments
                      </Link>
                      <button
                        className="profile-logout"
                        onClick={() => dispatch(logoutUser())}
                      >
                        <MdLogout className="logout-icon" />
                        Logout
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  padding-top: 1.5rem;
  .nav-logo svg {
    width: 150px;
  }
  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-container {
    display: flex;
    align-items: center;
  }
  nav {
    margin-right: clamp(var(--size-300), 1vw, var(--size-500));
  }

  .nav-links {
    display: flex;
    font-size: 18px;
    gap: clamp(var(--size-300), 1vw, var(--size-500));
    font-weight: bold;
  }
  .nav-links a {
    color: var(--fontColor);
  }
  .nav-links a:hover,
  .nav-links a:focus {
    color: var(--primary-700);
  }
  .dropdown-list {
    display: grid;
    gap: var(--size-100);
    position: absolute;
  }
  .button {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid white;
    border-radius: var(--size-300);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    display: inline-block;
    margin-right: 5px;
    width: 100px;
  }
  .signin {
    color: var(--white);
    background: var(--primary-700);
  }

  .signup {
    border: 1px solid var(--primary-700);
    color: var(--primary-700);
    background: var(--white);
  }
  .signup a:hover,
  .signup a:focus {
    color: var(--primary-700);
  }
  .signin a:hover,
  .signin a:focus {
    color: var(--primary-500);
  }
  .profile {
    display: flex;
    align-items: center;
  }
  .profile .nav-userIcon {
    margin-right: 10px;
    color: white;
  }
  .profile-content {
    cursor: pointer;
    background: var(--primary-700);
    border-radius: var(--size-300);
    letter-spacing: var(--letterSpacing);
    padding: 0.2rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    display: inline-block;
    width: 120px;
  }
  .profile-dropdown {
    position: relative;
  }
  .profile-dropdown .list {
    display: grid;
    gap: var(--size-400);
    position: absolute;
    margin-top: 5px;
    padding: 0.2rem 0.75rem;
  }
  .list .logout-icon {
    margin-right: 5px;
    color: var(--fontColor);
  }
  .profile-link {
    font-weight: bold;
    line-height: 1.15;
    text-decoration: none;
    font-size: 16px;
    color: var(--fontColor);
  }
  .profile-link:hover,
  .profile-link:focus {
    color: var(--primary-700);
  }
  .profile-logout {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: start;
    color: var(--primary-700);
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .profile-logout .logout-icon {
    width: 14px;
    color: var(--primary-700);
    margin-right: 2px;
  }
  .name {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  .mobile-nav-toggle {
    display: none;
  }
  @media screen and (max-width: 45em) {
    .nav-container {
      position: fixed;
      inset: 0 0 0 35%;
      flex-direction: column;
      align-items: center;
      padding: min(30vh, 10rem) 2em;
      background: var(--primary-500);
      transform: translateX(100%);
      transition: transform 350ms ease-out;
      box-shadow: 0 5px 5px 3px;
      z-index: 99;
    }

    .nav-container[data-visible="true"] {
      transform: translateX(0%);
    }
    .mobile-nav-toggle {
      display: block;
      position: fixed;
      right: var(--size-400);
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 10000;
      width: fit-content;
    }
    .nav-close {
      color: white;
    }
    .nav-open {
      color: var(--primary-700);
    }

    .nav-links {
      display: grid;
      gap: var(--size-400);
      text-align: center;
      font-weight: bold;
    }
    .nav-links a {
      color: var(--white);
    }
    .nav-links a:hover,
    .nav-links a:focus {
      color: var(--primary-700);
    }
    .dropdown-list {
      margin-top: var(--size-400);
      display: grid;
      gap: var(--size-400);
      position: relative;
    }

    .nav-btn {
      margin-top: var(--size-400);
    }
    .nav-profile {
      margin-top: 18px;
    }
    .profile-content {
      background: white;
    }
    .profile-dropdown {
      margin-top: var(--size-300);
    }
    .list {
      gap: var(--size-500);
    }
    .profile-link,
    .profile-logout,
    .profile-logout .logout-icon {
      color: white;
    }

    .profile .nav-userIcon {
      color: var(--primary-700);
    }
    .name {
      color: var(--primary-700);
    }
    .profile-dropdown .list {
      gap: var(--size-500);
    }
    .mobile-nav-toggle {
      display: block;
      position: fixed;
      right: var(--size-400);
      background: transparent;
      border: none;
      cursor: pointer;
      .nav-close,
      .nav-open {
        width: var(--size-500);
      }
      z-index: 9999;
    }
  }
`;
