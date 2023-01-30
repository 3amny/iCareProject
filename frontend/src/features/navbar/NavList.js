import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/constants/nav/nav.constants.js";
const NavList = (isHovered, showDropdown, closeDropdown, isOpened) => {
  return (
    <nav
      className="primary-navigation"
      id="primary-navigation"
      data-visible={isOpened}
    >
      <ul className="nav-links">
        {navLinks.map((link) => {
          const { id, text, url, submenu, iClassOpen, iClassClose } = link;
          return (
            <li
              key={id}
              className={submenu ? "link disable" : "link"}
              onMouseEnter={submenu && showDropdown}
              onMouseLeave={closeDropdown}
            >
              <NavLink
                to={url}
                onClick={submenu ? (event) => event.preventDefault() : null}
              >
                {text}
                {submenu && isHovered ? (
                  <i className={iClassClose} />
                ) : submenu ? (
                  <i className={iClassOpen} />
                ) : null}
              </NavLink>

              {isHovered && submenu ? (
                <ul className="dropdown-list">
                  {submenu.map((sublink) => {
                    const { id, text, url } = sublink;
                    return (
                      <li key={id} className="link">
                        <NavLink to={url}>{text}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
