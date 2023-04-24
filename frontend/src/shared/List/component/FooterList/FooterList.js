import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { footerLinks } from "utils/constants";

export const FooterList= () => {
  return (
    <Wrapper>
      <ul className="flow" aria-label="Footer">
        {footerLinks.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id} className="link">
              <NavLink to={url}>{text}</NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  columns: 2;
  column-width: clamp(var(--size-300), 10vw, var(--size-600));
  gap: clamp(var(--size-200), 30vw, var(--size-900));
  a {
     color: #fff;
    text-decoration: none;
    font-size: 14px;
  }
  a:where(:hover, :focus) {
    color:  var(--primary-500);
  }
  li{
    width: fit-content;
  }
`;

