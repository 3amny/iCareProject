import React from "react";
import { NavLink } from "react-router-dom";
const DropdownList = (props) => {
  return (
    <ul className="dropdown-list">
      {props.submenu.map((sublink) => {
        const { id, text, url } = sublink;
        return (
          <li key={id} className="link">
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownList;
