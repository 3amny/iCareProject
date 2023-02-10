import { Link } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../../utils/constants/nav/nav.constants";
import { useState } from "react";
import { Logo } from "../../../shared/ui/Image";
import { LinkButton, ToggleButton } from "../../../shared/ui/Button";
import { NavList } from "../../../shared/ui/List";

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
            className="primary-navigation "
            id="primary-navigation"
            data-visible={isOpened}
          >
            <NavList
              isHovered={isHovered}
              items={navLinks}
              showDropdown={showDropdown}
              closeDropdown={closeDropdown}
              classNameLi="link"
              classNameUl="nav-links"
            />
          </nav>
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
