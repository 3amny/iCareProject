import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavList } from "shared/List";
import { Link, useNavigate } from "react-router-dom";
import { adminSideBarLinks } from "utils/constants";
import { Logo } from "shared/Image";
import { IconButton } from "shared/Button";
import { ProfileSigned } from "shared/Profile";
import { MdLogout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "features/User/Auth/userSlice";
export const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openSidebar = () => setIsOpened(!isOpened);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Wrapper className={isOpened ? "active" : null}>
      <div className="container">
        <div className="sidebar-wrapper">
          <div className="logo-wrapper">
            <Link to="/">
              <Logo fillColor="white" />
            </Link>
          </div>
          <IconButton
            type="button"
            color="white"
            className="sidebar-toggle"
            onClick={openSidebar}
            icon={<RxHamburgerMenu />}
          />
          <nav className="primary-navigation">
            <NavList
              items={adminSideBarLinks}
              classNameUl="sidebar-list"
              classNameLi="sidebar-el"
              span={true}
            />
          </nav>
          <ProfileSigned
            firstName="John"
            lastName="Wattson"
            type="button"
            icon={<MdLogout />}
            btnClass="profile-logout"
            onClick={() => dispatch(logoutUser())}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background: var(--primary-500);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 80px;
  transition: all 0.5s ease;

  &.active {
    width: 250px;
  }
  &.active .logo-wrapper svg {
    opacity: 1;
  }
  .logo-wrapper svg {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      width: 120px;
    }
    pointer-events: none;
    cursor: none;
  }

  .sidebar-wrapper {
    padding-top: 1rem;
  }
  .sidebar-toggle {
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    position: absolute;
    left: 40%;
    top: 37px;
  }
  .sidebar-toggle svg {
    width: 20px;
    color: white;
  }
  &.active .sidebar-toggle {
    left: 85%;
  }
  ul {
    margin-top: 30px;
  }
  ul li {
    position: relative;
    height: 50px;
    margin: 0 5px;
    list-style: none;
    width: 100%;
    line-height: 50px;
    border-radius: 12px;
  }
  ul li .tooltip {
    position: absolute;
    top: 0;
    left: 126px;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    height: 35px;
    width: 125px;
    line-height: 35px;
    text-align: center;
    background: var(--primary-500);
    color: var(--white);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
    display: block;
  }
  &.active ul li .tooltip {
    display: none;
  }
  ul li:hover .tooltip {
    opacity: 1;
    transition: all 0.5s ease;
    top: 50%;
  }
  ul li a {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 12px;
    height: 50px;
    transition: all 0.4s ease;
    font-size: 18px;
    white-space: nowrap;
  }
  ul li a:hover {
    background: #fff;
    color: var(--primary-500);
  }
  ul li a svg {
    min-width: 50px;

    line-height: 50px;
    text-align: center;
  }
  &.active .text {
    opacity: 1;
    pointer-events: auto;
  }
  .text {
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;
  }
  .profile-content {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .profile-content .profile {
    position: relative;
    padding: 10px 6px;
    height: 60px;
    background: var(--primary-700);
  }
  &.active .profile-content .profile {
  }
  .profile-content .profile .profile-details {
    display: flex;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
  }
  &.active .profile .profile-details {
    opacity: 1;
    pointer-events: auto;
  }
  .profile .profile-details img {
    object-fit: cover;
    height: 45px;
    width: 45px;
    border-radius: 12px;
  }
  .profile .profile-details .name {
    margin-left: 10px;
    font-weight: 400;
    font-size: 15px;
  }

  .profile .profile-logout {
    position: absolute;
    background: transparent;
    border: none;
    padding: 0;
    height: 60px;
    transform: translateY(-50%);
    top: 50%;
    left: 40%;
    transition: all 0.5s ease;
  }
  .profile-logout svg {
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    width: 20px;
    color: white;
  }
  &.active .profile-logout {
    left: 85%;
    pointer-events: auto;
  }
`;
