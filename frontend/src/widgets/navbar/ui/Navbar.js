import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../../utils/constants/nav/nav.constants";
import { useState } from "react";
import Logo from "../../../shared/ui/Logo";
import DropdownList from "../../../features/navbar/DropdownList";

const Navbar = () => {
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
          <button
            type="btn"
            aria-controls="primary-navigation"
            className="mobile-nav-toggle"
            onClick={openSidebar}
            aria-expanded={isOpened}
          >
            {isOpened ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
            <span className="sr-only">Menu</span>
          </button>

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
                    className={submenu ? "link disable" : "link"}
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
    &[data-overlay="true"] {
      content: "";
      position: fixed;
      inset: 0;
      background-image: linear-gradient(rgb(0 0 0 /0), rgb(0 0 0 / 0.8));
    }
    .primary-navigation {
      display: none;
      position: absolute;
      padding: var(--size-700);
      inset: 7rem var(--size-400) auto;
      max-width: 25rem;
      margin-inline: auto;
      background: var(--white);
      box-shadow: 0 0 0.75em rgb(0 0 0 0.05);
    }

    .nav-links {
      display: grid;
      gap: var(--size-400);
      text-align: center;
      font-weight: bold;
    }
    .dropdown-list {
      margin-top: var(--size-400);
      display: grid;
      gap: var(--size-400);
      text-align: center;
      position: relative;
    }
    .primary-navigation[data-visible="true"] {
      display: block;
    }

    .mobile-nav-toggle {
      display: block;
      position: fixed;
      right: var(--size-400);
      background: transparent;
      border: none;
      color: var(--primary-700);
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

export default Navbar;
