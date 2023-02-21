import { Link } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../../utils/constants/nav/nav.constants";
import { useState } from "react";
import { Logo } from "../../../shared/ui/Image";
import { LinkButton, ToggleButton } from "../../../shared/ui/Button";
import { NavList } from "../../../shared/ui/List";
import { useAppContext } from "../../../context/appContext.js";
import { ProfileSignedNav } from "../../../shared/ui/Profile";
export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  function showDropdown() {
    setIsHovered(true);
  }
  function closeDropdown() {
    setIsHovered(false);
  }
  const [isOpened, setIsOpened] = useState(false);
  const openSidebar = () => setIsOpened(!isOpened);
  const [isOpenedProfile, setIsOpenedProfile] = useState(false);
  const openProfileInfo = () => setIsOpenedProfile(!isOpenedProfile);
  const { user, logoutUser } = useAppContext();

  return (
    <Wrapper data-overlay={isOpened}>
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/">
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
            {!user || user.role !== 'User' ? (
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
                  lastName={user.lastName}
                  iconClass="fa-regular fa-user"
                  expandProfile={openProfileInfo}
                />
                {isOpenedProfile ? (
                  <div className="profile-dropdown-list">
                    <Link to="/account/details" className="profile-link">
                      <i className="fa-solid fa-file-invoice" />
                      Account
                    </Link>
                    <Link to="/account/details" className="profile-link">
                      <i className="fa-regular fa-calendar-check" />
                      My Appointments
                    </Link>
                    <button className="profile-logout" onClick={logoutUser}>
                      <i className="fa-solid fa-right-from-bracket" /> Logout
                    </button>
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
  svg {
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
  .profile i {
    margin-right: 5px;
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
    margin-right: 5px;
    width: 120px;
  }
  .profile-dropdown-list {
    display: grid;
    gap: var(--size-100);
    position: absolute;
    justify-items: start;
  }
  .profile-link {
    display: flex;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.75;
    align-items: center;
  }
  .profile-logout {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .name {
    color: white;
    font-size: 15px;
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
      i {
        font-size: var(--size-500);
      }
      z-index: 9999;
    }
    .fa-xmark {
      color: white;
    }
    .fa-bars {
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
    .profile-content {
      margin-top: var(--size-400);
      background: white;
    }
    .profile i {
      color: var(--primary-700);
    }
    .name {
      color: var(--primary-700);
    }
    .mobile-nav-toggle {
      display: block;
      position: fixed;
      right: var(--size-400);
      background: transparent;
      border: none;
      cursor: pointer;
      i {
        font-size: var(--size-500);
      }
      z-index: 9999;
    }
  }
`;
