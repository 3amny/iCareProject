import styled from "styled-components";

const Wrapper = styled.main`
  .landing-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  .main-section {
    display: grid;
    grid-template-columns: 60% 40%;
    margin-bottom: 35px;
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
  .doctor-image {
    z-index: -1;
  }

  .search {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    left: 40px;
    border-radius: 20px;
    padding: 0.3rem 0.6rem;
    box-shadow: var(--shadow-3);
    z-index: 1;
  }
  .search-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    padding: 10px 0;
  }
  .search-title {
    margin: 0;
    font-weight: bold;
  }
  .search p {
    margin: 0;
  }
  .search-details {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-details p {
    margin-right: 10px;
    color: #5b5b5b;
    font-weight: 500;
  }
  .form-row {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
  .form-row input {
    background: #edecec;
  }
  .switch-container {
    display: flex;
    align-items: center;
  }
  .switch {
    margin-right: 10px;
    margin-bottom: 0;
  }
  .form-row {
    margin-bottom: 0;
  }
  .btn-search {
    cursor: pointer;
    color: var(--white);
    background: var(--primary-600);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 5px 10px;
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
    .doctor-image {
      display: none;
    }
    .main-section {
      display: flex;
      flex-direction: column;
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
