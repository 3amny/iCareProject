import styled from "styled-components";

const Wrapper = styled.main`
  .landing-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  .main-section {
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 35px;
  }
  .main-img-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-img {
    width: 100%;
  }
  .catch-phrase {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .catch-phrase p {
    color: #a7a7a7;
  }
  h2 {
    color: #404040;
    font-weight: bold;
    text-transform: none;
    margin-bottom: 0;
  }
  span {
    color: var(--primary-700);
  }

  .link {
    border-radius: var(--size-300);
    padding: 0.5rem;
    text-decoration: none;
    background: var(--primary-600);
    color: white;
    box-shadow: var(--shadow-3);
    a {
      color: white;
    }
  }

  .second-section {
    margin-top: 35px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .section-title {
    margin-bottom: 35px;
  }
  .card {
    display: grid;
    grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
    gap: 20px;
    margin-bottom: 20px;
  }
  .card-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: start;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    padding: 10px 20px;
    border-top: 2px solid var(--primary-700);
    background-color: white;
  }
  .card-container:hover {
    box-shadow: var(--shadow-4);
  }
  .card-icon {
    font-size: 30px;
    color: var(--primary-600);
  }
  .card-content {
    h3 {
      font-size: 16px;
      font-weight: 700;
      color: var(--fontColor);
    }
    p {
      color: var(--fontSmColor);
      font-size: 14px;
      font-weight: 600;
    }
  }
  .third-section {
    margin-top: 35px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  hr {
    width: 100%;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid var(--primary-700);
    margin: 1em 0;
    padding: 0;
  }
  .phrase {
    display: flex;
    flex-direction: column;
    h1 {
      font-family: var(--landingFont);
      font-weight: 700;
      color: var(--primary-700);
    }
    h4 {
      text-align: end;
    }
  }
  .fourth-section {
    margin-top: 35px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 45em) {
    .main-section {
      display: flex;
      flex-direction: column;
    }
    .main-img-section {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .link {
      margin-bottom: 30px;
    }
    .search {
      top: 0px;
      left: 0px;
    }
    .card {
      display: grid;
      grid-template-columns: 50% 50%;
    }
    .section-title {
      h2 {
        font-size: 30px;
      }
    }
  }
`;
export default Wrapper;
