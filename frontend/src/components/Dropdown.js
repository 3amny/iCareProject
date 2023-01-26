import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Dropdown = (props) => {
  return (
    <Wrapper>
      <ul className="dropdown-list">
        {props.submenu.map((sublink) => {
          const { id, text, url } = sublink;
          return (
            <li key={id} className="dropdown-item">
              <NavLink
                to={url}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "var(--primary-700)" : "black",
                  };
                }}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
position: absolute;


`
export default Dropdown;
