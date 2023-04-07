import React, { useEffect } from "react";
import { useState } from "react";
import { FormRow, FormRowSelect } from "shared/Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { list } from "./lib";
import {
  fetchSpecialtiesOptions,
  handleChange,
  toggleMember,
} from "features/Doctor/Auth/doctorSlice";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinicsOptions } from "features/Doctor/Auth/doctorSlice";
import { loginDoctor, registerDoctor } from "features/Doctor/Auth/doctorSlice";
const DoctorSignPage = () => {
  const {
    firstName,
    lastName,
    email,
    phone,
    docType,
    clinic,
    password,
    experience,
    startTime,
    endTime,
    interval,
    isMember,
    clinicsOptions,
    specialtiesOptions,
    doctor,
    isLoading,
  } = useSelector((store) => store.doctor);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClinicsOptions());
    dispatch(fetchSpecialtiesOptions());
  }, []);

  const handleDoctorInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      (!isMember &&
        (!firstName ||
          !lastName ||
          !email ||
          !docType ||
          !clinic ||
          !password ||
          !phone ||
          !experience ||
          !startTime ||
          !endTime))
    ) {
      toast.error("Please fill out the fields");
      return;
    }

    if (isMember) {
      dispatch(loginDoctor({ email: email, password: password }));
      return;
    } else {
      dispatch(
        registerDoctor({
          firstName,
          lastName,
          password,
          email,
          docType,
          clinic,
          phone,
          experience,
          startTime,
          endTime,
          interval,
        })
      );
      return;
    }
  };
  useEffect(() => {
    if (doctor) {
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    }
  }, [doctor, navigate]);
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h5>{isMember ? "SING IN" : "SIGN UP"}</h5>
        {!isMember && [
          <FormRow
            key={list.firstname}
            type="text"
            name="firstName"
            labelText="First Name"
            value={firstName}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.lastname}
            type="text"
            labelText="Last Name"
            name="lastName"
            value={lastName}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.phone}
            type="text"
            labelText="Phone"
            name="phone"
            value={phone}
            handleChange={handleDoctorInput}
          />,
          <FormRowSelect
            key={list.docType}
            labelText="Specialty"
            name="docType"
            value={docType}
            handleChange={handleDoctorInput}
            list={specialtiesOptions}
          />,
          <FormRowSelect
            key={list.clinic}
            labelText="Clinic"
            name="clinic"
            value={clinic}
            handleChange={handleDoctorInput}
            list={clinicsOptions}
          />,
          <FormRow
            key={list.experience}
            type="text"
            labelText="Experience"
            name="experience"
            value={experience}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.startTime}
            type="time"
            labelText="Start Time"
            name="startTime"
            value={startTime}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.endTime}
            type="time"
            labelText="End Time"
            name="endTime"
            value={endTime}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.interval}
            type="text"
            labelText="Appointment duration"
            name="interval"
            value={interval}
            handleChange={handleDoctorInput}
          />,
        ]}

        <FormRow
          key={list.email}
          type="email"
          name="email"
          labelText="Email"
          value={email}
          handleChange={handleDoctorInput}
        />
        <FormRow
          key={list.password}
          type="password"
          labelText="Password"
          name="password"
          value={password}
          handleChange={handleDoctorInput}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {isMember ? "Not a member yet? " : "Already a member? "}
          <button
            type="button"
            onClick={() => dispatch(toggleMember())}
            className="member-btn"
          >
            {isMember ? "Sign up " : "Sign in"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default DoctorSignPage;
