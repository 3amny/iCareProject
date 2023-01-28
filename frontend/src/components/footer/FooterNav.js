import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { linksFooter } from "../../utils/nav-menu";

const FooterNav = () => {
  return (
    <Wrapper>
      <ul class="flow" aria-label="Footer">
        {linksFooter.map((link) => {
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
  gap: clamp(var(--size-200), 30vw, var(--size-900));
  a {
    color: var(--fontColor);
    text-decoration: none;
    font-size: 14px;
  }
  a:where(:hover, :focus) {
    color: var(--primary-700);
  }
 
`;
export default FooterNav;
