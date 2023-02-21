import styled from "styled-components";
import { Logo } from "../../../shared/ui/Image";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToggleButton } from "../../../shared/ui/Button";
export const NavbarDashboard = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openSidebar = () => setIsOpened(!isOpened);
  return (
    <Wrapper>
      <ToggleButton
        type="button"
        ariaExpanded={isOpened}
        onClick={openSidebar}
        color="white"
        className="nav-toggle"
        ariaControls="primary-navigation"
      />
      <div className="container">
        <div className="nav-wrapper">
          
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background: var(--grey-50);
  height: var(--nav-height);
  .logo {
    width: 150px;
  }
  .nav-wrapper {
    padding-left: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-toggle {
    background: transparent;
    border: none;
    position: absolute;
    left: 200px;
    color: var(--primary-700);
    i{
      font-size: 18px;
    }
  }
`;
