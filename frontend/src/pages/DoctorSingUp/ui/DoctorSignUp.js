import React, { useEffect } from "react";
import { useState } from "react";
import { FormRow } from "../../../shared/ui/Input";
import { Alert } from "../../../shared/ui/Alert";
import { useAppContext } from "../../../context/appContext";
import { useNavigate } from "react-router-dom";
import { initialState, list } from "../lib";
import Wrapper from "./Wrapper";

export const DoctorSignUp = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerDoctor,
    loginDoctor,
  } = useAppContext();
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      password,
      email,
      phone,
      experience,
      isMember,
      startTime,
      endTime,
      interval,
    } = values;
    if (
      !email ||
      !password ||
      (!isMember &&
        (!firstName ||
          !lastName ||
          !email ||
          !password ||
          !phone ||
          !experience ||
          !startTime ||
          !endTime))
    ) {
      displayAlert();
      return;
    }

    const currentDoctor = {
      firstName,
      lastName,
      password,
      email,
      phone,
      experience,
      startTime,
      endTime,
      interval,
    };
    if (isMember) {
      loginDoctor(currentDoctor);
    } else {
      registerDoctor(currentDoctor);
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    }
  }, [user, navigate]);
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h5>{values.isMember ? "SING IN" : "SIGN UP"}</h5>
        {showAlert && <Alert />}
        {!values.isMember && [
          <FormRow
            key={list.firstname}
            type="text"
            name="firstName"
            labelText="First Name"
            value={values.firstName}
            handleChange={handleChange}
          />,
          <FormRow
            key={list.lastname}
            type="text"
            labelText="Last Name"
            name="lastName"
            value={values.lastName}
            handleChange={handleChange}
          />,
          <FormRow
            key={list.phone}
            type="text"
            labelText="Phone"
            name="phone"
            value={values.phone}
            handleChange={handleChange}
          />,
          <FormRow
            key={list.experience}
            type="text"
            labelText="Experience"
            name="experience"
            value={values.experience}
            handleChange={handleChange}
          />,
          <FormRow
            key={list.startTime}
            type="time"
            labelText="Start Time"
            name="startTime"
            value={values.startTime}
            handleChange={handleChange}
          />,
          <FormRow
            key={list.endTime}
            type="time"
            labelText="End Time"
            name="endTime"
            value={values.endTime}
            handleChange={handleChange}
          />,
          <FormRow
            key={list.interval}
            type="text"
            labelText="Appointment duration"
            name="interval"
            value={values.interval}
            handleChange={handleChange}
          />,
        ]}

        <FormRow
          key={list.email}
          type="email"
          name="email"
          labelText="Email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          key={list.password}
          type="password"
          labelText="Password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet? " : "Already a member? "}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Sign up " : "Sign in"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
