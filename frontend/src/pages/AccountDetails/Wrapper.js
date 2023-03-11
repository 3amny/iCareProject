import styled from "styled-components";

const Wrapper = styled.main`
  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }

  input.visually-hidden:is(:focus, :focus-within) + label {
    outline: thin dotted;
  }
  .account {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  .account h5 {
    text-align: center;
  }
  .account-img {
    max-width: clamp(100px, 60vw, 200px);
    height: auto;
    border-radius: 10px;
    border: 1px white;
  }
  .account-title {
    color: var(--fontColor);
    text-decoration: underline;
  }
  .account-img-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }
  .account-img-form {
    position: relative;
    max-width: clamp(300px, 30vw, 500px);
  }
  .account-img-upload {
    position: absolute;
    top: 70%;
    left: -10%;
  }
  .account-img-upload label {
    display: flex;
    align-items: center;
    color: white;
  }
  .account-img-upload label {
    background: var(--primary-700);
    border-radius: var(--size-300);
    letter-spacing: var(--letterSpacing);
    padding: 0.2rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
  }
  .account-img-upload label i {
    margin-right: 5px;
  }
  .account-img-upload p {
    margin: 0 !important;
  }
  .account-details-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }

  .form-row {
    width: clamp(300px, 20vw, 400px);
    max-width: 500px;
  }
  .btn {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 45em) {
    .account {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .account-img-container {
      margin-bottom: 20px;
    }
  }
`;

export default Wrapper;
