import React from "react";
import { NavLink } from "react-router-dom";
import { DropdownList } from "../../../List";
export const NavList = ({
  isHovered,
  items,
  showDropdown,
  closeDropdown,
  classNameUl,
  classNameLi,
  span,
}) => {
  return (
    <ul className={classNameUl}>
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className={classNameLi}
            onMouseEnter={item.submenu && showDropdown}
            onMouseLeave={closeDropdown}
          >
            <NavLink
              to={item.url}
              onClick={item.submenu ? (event) => event.preventDefault() : null}
            >
              {item.icon ? <i className={item.icon} /> : null}
              <span className="text">
                {item.text}
                {item.submenu && isHovered ? (
                  <i className={item.iClassClose} />
                ) : item.submenu ? (
                  <i className={item.iClassOpen} />
                ) : null}
              </span>
            </NavLink>

            {isHovered && item.submenu ? (
              <DropdownList
                classNameUl="dropdown-list"
                items={item.submenu}
                classNameLi="link"
              />
            ) : null}
            {span ? <span className="tooltip">{item.text}</span> : null}
          </li>
        );
      })}
    </ul>
  );
};
