import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../../utils/constants/nav/nav.constants";
import { useState } from "react";
import { Logo } from "../../../shared/ui";
import DropdownList from "../../../features/navbar/DropdownList";
import { ToggleButton } from "../../../shared/ui/Button/component";

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

  return (
    <Wrapper data-overlay={isOpened}>
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/">
            <Logo />
          </Link>
          <ToggleButton
            ariaExpanded={isOpened}
            onClick={openSidebar}
            color="white"
            className="mobile-nav-toggle"
            ariaControls="primary-navigation"
          />
          <nav
            className="primary-navigation"
            id="primary-navigation"
            data-visible={isOpened}
          >
            <ul className="nav-links">
              {navLinks.map((link) => {
                const { id, text, url, submenu, iClassOpen, iClassClose } =
                  link;
                return (
                  <li
                    key={id}
                    className="link"
                    onMouseEnter={submenu && showDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <NavLink
                      to={url}
                      onClick={
                        submenu ? (event) => event.preventDefault() : null
                      }
                    >
                      {text}
                      {submenu && isHovered ? (
                        <i className={iClassClose} />
                      ) : submenu ? (
                        <i className={iClassOpen} />
                      ) : null}
                    </NavLink>

                    {isHovered && submenu ? (
                      <DropdownList submenu={submenu} />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="nav-btn">
            <Link to="/account/signin">
              <button className="button signin">Sign in</button>
            </Link>
            <Link to="/account/signup">
              <button className="button signup">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  padding-top: 1.5rem;
  .logo {
    width: 150px;
  }
  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mobile-nav-toggle {
    display: none;
  }
  .nav-links {
    display: flex;
    font-size: 18px;
    gap: clamp(var(--size-400), 2.5vw, var(--size-600));
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
  @media screen and (max-width: 45em) {
    .primary-navigation {
      position: fixed;
      inset: 0 0 0 35%;
      flex-direction: column;
      align-items: center;
      padding: min(30vh, 10rem) 2em;
      background: var(--primary-500);
      transform: translateX(100%);
      transition: transform 350ms ease-out;
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
      text-align: center;
      position: relative;
    }
    .primary-navigation[data-visible="true"] {
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
    .nav-btn {
      display: none;
    }
  }
`;
