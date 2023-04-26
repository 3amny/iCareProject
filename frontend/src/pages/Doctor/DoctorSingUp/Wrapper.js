import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  .logo {
    width: 80px;
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    background: var(--primary-600);
    box-shadow: var(--shadow-3);
  }
  .form-input {
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
  }
  h5 {
    text-align: center;
    font-weight: 600;
    color: var(--white);
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
    color: var(--white);
  }
  .btn {
    margin-top: 1rem;
    background: var(--primary-400);
    font-weight: 600;
    color: var(--white);
  }
  .member-btn {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: var(--white);
    text-decoration: underline;
  }
  .form-label {
    font-weight: bold;
    color: var(--white);
  }
`;

export default Wrapper;
