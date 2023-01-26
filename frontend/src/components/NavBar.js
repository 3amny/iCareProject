import logo from "../logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import { links } from "../utils/nav-menu";
import { useState } from "react";
import useMediaQuery from "../utils/hooks/useMediaQuery";
const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  function showDropdown() {
    setIsHovered(true);
  }
  function closeDropdown() {
    setIsHovered(false);
  }
  const [isOpened, setIsOpened] = useState(false);
  const openSidebar = () => setIsOpened(!isOpened);

  const isMobile = useMediaQuery("(max-width: 40em)");
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button
            type="btn"
            aria-controls="nav-links"
            className="nav-toggle"
            onClick={openSidebar}
            aria-expanded={isOpened}
          >
            {isOpened ? (
              <i className="fa-solid fa-xmark" style={{ color: "#fff" }}></i>
            ) : (
              <i
                className="fa-solid fa-bars"
                style={{ color: "var(--primary-700)" }}
              ></i>
            )}
            <span className="sr-only">Menu</span>
          </button>
        </div>
        <div className="nav-primary" id="nav-primary">
          <ul className="nav-links" id="nav-links" data-visible={isOpened}>
            {links.map((link) => {
              const { id, text, url, submenu, iClassOpen, iClassClose } = link;
              return (
                <>
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
                      style={({ isActive }) => {
                        return {
                          color:
                            isActive && isMobile !== true
                              ? "var(--primary-700)"
                              : isMobile === true
                              ? "#fff"
                              : "#000",
                        };
                      }}
                    >
                      {text}
                      {submenu && isHovered ? (
                        <i className={iClassClose} />
                      ) : submenu ? (
                        <i className={iClassOpen} />
                      ) : null}
                    </NavLink>

                    {isHovered && submenu ? (
                      <div className="dropdown">
                        <ul className="dropdown-list">
                          {submenu.map((sublink) => {
                            const { id, text, url } = sublink;
                            return (
                              <li key={id} className="dropdown-link">
                                <NavLink
                                  to={url}
                                  style={({ isActive }) => {
                                    return {
                                      color:
                                        isActive && isMobile !== true
                                          ? "var(--primary-700)"
                                          : isMobile === true
                                          ? "#fff"
                                          : "#000",
                                    };
                                  }}
                                >
                                  {text}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                </>
              );
            })}
          </ul>

        </div>
        
        <div>

       
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 150px;
    }
  }
  .nav-toggle {
    display: none;
  }
  .link {
    font-size: 18px;
    margin-left: 30px;
    .disable {
      cursor: none;
    }
    .dropdown-icon {
      margin-left: 2px;
      color: var(--primary-700);
    }
  }

  .nav-links {
    display: flex;
    justify-content: center;
    .dropdown {
      position: absolute;
    }
  }

  @media screen and (max-width: 40em) {
    .nav-center {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
      display: block;
    }
    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 150px;
      }
    }
    .nav-toggle {
      display: block;
      background: transparent;
      border: none;
      color: var(--primary-700);
      cursor: pointer;
      i {
        font-size: 1.5rem;
      }
      z-index: 9999;
    }
    .nav-links {
      position: fixed;
      inset: 0 0 0 40%;
      background: var(--primary-700);
      flex-direction: column;
      padding: min(5vh, 10rem) 2em;
      transform: translateX(100%);
      transition: transform 350 ease-out;
      .dropdown {
        position: relative;
      }
    }
    .nav-links[data-visible="true"] {
      transform: translateX(0%);
    }
    .link {
      font-size: 25px;
      .dropdown-icon {
        color: #fff;
        margin-left: 4px;
      }
    }
  }
`;

export default NavBar;
