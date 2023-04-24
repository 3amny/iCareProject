import React, { useEffect } from "react";
import { useState } from "react";
import Wrapper from "./Wrapper";
import { FormRow, FormRowSelect } from "shared/Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { list } from "./lib";
import {
  fetchSpecialtiesOptions,
  handleChange,
  toggleMember,
  fetchClinicsOptions,
  registerDoctor,
  loginDoctor,
} from "features/Doctor/Auth/doctorAuthSlice";
import { useDispatch, useSelector } from "react-redux";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  docType: "",
  clinic: "",
  password: "",
  experience: "",
  startTime: "",
  endTime: "",
  interval: "",
};
const DoctorSignPage = () => {
  const [values, setValues] = useState(initialState);
  const { isMember, clinicsOptions, specialtiesOptions, doctor, isLoading } =
    useSelector((store) => store.doctorAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClinicsOptions());
    dispatch(fetchSpecialtiesOptions());
  }, [dispatch]);

  const handleDoctorInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
    } = values;
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
            value={values.firstName}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.lastname}
            type="text"
            labelText="Last Name"
            name="lastName"
            value={values.lastName}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.phone}
            type="text"
            labelText="Phone"
            name="phone"
            value={values.phone}
            handleChange={handleDoctorInput}
          />,
          <FormRowSelect
            key={list.docType}
            labelText="Specialty"
            name="docType"
            value={values.docType}
            handleChange={handleDoctorInput}
            list={specialtiesOptions}
          />,
          <FormRowSelect
            key={list.clinic}
            labelText="Clinic"
            name="clinic"
            value={values.clinic}
            handleChange={handleDoctorInput}
            list={clinicsOptions}
          />,
          <FormRow
            key={list.experience}
            type="text"
            labelText="Experience"
            name="experience"
            value={values.experience}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.startTime}
            type="time"
            labelText="Start Time"
            name="startTime"
            value={values.startTime}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.endTime}
            type="time"
            labelText="End Time"
            name="endTime"
            value={values.endTime}
            handleChange={handleDoctorInput}
          />,
          <FormRow
            key={list.interval}
            type="text"
            labelText="Appointment duration"
            name="interval"
            value={values.interval}
            handleChange={handleDoctorInput}
          />,
        ]}

        <FormRow
          key={list.email}
          type="email"
          name="email"
          labelText="Email"
          value={values.email}
          handleChange={handleDoctorInput}
        />
        <FormRow
          type="password"
          labelText="Password"
          name="password"
          value={values.password}
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
