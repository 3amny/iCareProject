import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h5 {
    text-align: center;
    font-weight: 600;
  }
  p {
    margin-right: 5px;
    text-align: center;
  }
  .btn {
    margin: 1rem 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  .link {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link-signin {
    color: var(--primary-700);
    text-decoration: underline;
  }
  .form-label {
    font-weight: bold;
  }
`;
export default Wrapper;
