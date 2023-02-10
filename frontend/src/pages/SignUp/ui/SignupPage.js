import React, { useEffect } from "react";
import { useState } from "react";
import { FormRow } from "../../../shared/ui/Input";
import { Alert } from "../../../shared/ui/Alert";
import { useAppContext } from "../../../context/appContext";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper.js";
const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  phone: "",
};

export const SignupPage = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, password, email, phone } = values;
    if (!email || !password || !firstName || !lastName || !phone) {
      displayAlert();
      return;
    }
    const currentUser = { firstName, lastName, password, email, phone };
    registerUser(currentUser);
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h5>SIGN UP</h5>
        {showAlert && <Alert />}
        <FormRow
          type="text"
          name="firstName"
          labelText="First Name"
          value={values.firstName}
          handleChange={handleChange}
        />

        <FormRow
          type="text"
          labelText="Last Name"
          name="lastName"
          value={values.lastName}
          handleChange={handleChange}
        />

        <FormRow
          type="text"
          labelText="Phone"
          name="phone"
          value={values.phone}
          handleChange={handleChange}
        />

        <FormRow
          type="email"
          name="email"
          labelText="Email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          labelText="Password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <div className="link">
          <p>Already a memeber? </p>
          <Link to="/account/signin" className="link-signin">
            Sing in
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};
