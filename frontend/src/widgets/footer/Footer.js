import styled from "styled-components";
import { Logo } from "shared/Image";
import { Link } from "react-router-dom";
import { FooterList, SocialList } from "shared/List";

export const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="primary-footer-wrapper">
          <div className="primary-footer-logo-social">
            <Link to="/">
              <Logo fillColor=" #f5f5f5" />
            </Link>
            <SocialList />
          </div>
          <div className="primary-footer-nav">
            <FooterList />
          </div>
          <div className="primary-footer-copyrights">
            <p>&copy;{new Date().getFullYear()} iCare. All rights reserved.</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--primary-700);
  padding-block: var(--size-500);
  svg {
    width: 100px;
  }
  .primary-footer-nav {
    grid-area: footer-nav;
    font-weight: 400;
    font-size: 15px;
  }

  .primary-footer-wrapper {
    display: grid;
    gap: var(--size-300);
    grid-template-areas: "footer-nav" "logo-social" "footer-copyrights";
  }

  .primary-footer-logo-social {
    grid-area: logo-social;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-400);
    .icons svg {
      width: var(--size-600);
      aspect-ratio: 1;
      color: #fff;
    }
  }
  .primary-footer-copyrights {
    grid-area: footer-copyrights;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 600;
    font-size: 12px;
    color: #fff;
  }
  .social-list {
    display: flex;
    gap: var(--size-600);
  }
  .icons svg :where(:hover, :focus){
    color: var(--primary-500);
  }

  @media (min-width: 45em) {
    .primary-footer-wrapper {
      width: 100%;
      grid-template-areas: "logo-social footer-nav" "footer-copyrights footer-copyrights";
    }

    .primary-footer-logo-social {
      justify-content: space-between;
      gap: var(--size-400);

    }
  }

  @media (max-width: 45em) {
    .primary-footer-wrapper > * {
      margin-inline: auto;
    }
  }
`;
