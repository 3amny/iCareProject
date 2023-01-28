import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Dropdown = (submenu) => {
  return (
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
  );
};

export default Dropdown;
