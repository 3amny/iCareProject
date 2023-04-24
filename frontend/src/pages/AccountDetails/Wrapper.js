import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  .form {
    max-width: 450px;
    border-top: 5px solid var(--primary-500);
  }
  h5 {
    text-align: center;
    font-weight: 600;
  }
  p {
    margin-right: 5px;;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }

  .form-label {
    font-weight: bold;
  }
  
`;

export default Wrapper;
