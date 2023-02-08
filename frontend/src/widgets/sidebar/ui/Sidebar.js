import styled from "styled-components";
import { Logo } from "../../../shared/ui";
import { useState } from "react";
import { ToggleButton } from "../../../shared/ui/Button/component";
export const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openSidebar = () => setIsOpened(!isOpened);
  const msg = "welcome";
  return (
    <Wrapper>
      <div className="container">
        <div className="nav-wrapper">
          <ToggleButton
            ariaExpanded={isOpened}
            onClick={openSidebar}
            color="white"
            className="nav-toggle"
            ariaControls="primary-navigation"
          />
        </div>
        <nav className="primary-navigation"
            id="primary-navigation"
            data-visible={isOpened}>
          


          
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  .logo {
    width: 100px;
  }
`;
