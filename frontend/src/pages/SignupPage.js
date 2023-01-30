import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { FormRow, Alert } from "../shared/ui";

const initialState = {
  firstname: "",
  lastname: "",
  password: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  isMember: false,
  showAlert: true,
};

const SignupPage = () => {
  const [values, setValues] = useState(initialState);
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefaule();
    console.log(e.target);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h5>{values.isMember ? "SING IN" : "SIGN UP"}</h5>
        {values.showAlert && <Alert />}
        {values.isMember &&
          [(
            <FormRow
              type="text"
              name="firstname"
              value={values.firstname}
              handleChange={handleChange}
            />
          ),
          (
            <FormRow
              type="text"
              name="lastname"
              value={values.lastname}
              handleChange={handleChange}
            />
          ),
          (
            <FormRow
              type="text"
              name="city"
              value={values.city}
              handleChange={handleChange}
            />
          ),
          (
            <FormRow
              type="text"
              name="street"
              value={values.street}
              handleChange={handleChange}
            />
          )]}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Register
        </button>
        <p>
          {values.isMember? 'Not a member yet ' : 'Already a member?'}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
          >
           {values.isMember ? 'Register': 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
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
`;
export default SignupPage;
