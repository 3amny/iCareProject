import styled from 'styled-components'


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
    border-top: 5px solid var(--primary-500);
  }
  h5 {
    text-align: center;
    font-weight: 600;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: var(--primary-700);
    text-decoration: underline;
  }
  .form-label{
    font-weight:bold;
  }
`;

export default Wrapper