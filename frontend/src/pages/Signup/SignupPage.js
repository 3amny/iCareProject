import React, { useEffect } from "react";
import { useState } from "react";
import { FormRow } from "shared/Input";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper.js";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "features/User/Auth/userSlice.js";
const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  phone: "",
  dateOfBirth: "",
};

const SignupPage = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, password, email, phone, dateOfBirth } = values;
    console.log(dateOfBirth);
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !phone ||
      !dateOfBirth
    ) {
      toast.error("Please fill out the fields");
      return;
    }
    dispatch(
      registerUser({
        firstName,
        lastName,
        password,
        email,
        phone,
        dateOfBirth,
      })
    );
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h5>SIGN UP</h5>
        {/* {showAlert && <Alert />} */}
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
          type="date"
          labelText="Date of Birth"
          name="dateOfBirth"
          value={values.dateOfBirth}
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
          {isLoading ? "Please wait..." : "Submit"}
        </button>
        <div className="link">
          <p>Already a memeber? </p>
          <Link to="/account/signin" className="link-signin">
            Sing in
          </Link>
        </div>
        <div className="link-doc">
          <p>Are you a doctor?</p>
          <Link to="/account/doctor/signup" className="link-signin">
            Come here
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};

export default SignupPage;
