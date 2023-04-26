import React, { useEffect } from "react";
import { useState } from "react";
import Wrapper from "pages/AccountDetails/Wrapper";
import { FormRow, FormRowSelect } from "shared/Input";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import {
  fetchClinicsOptions,
  fetchSpecialtiesOptions,
  updateDoctor,
} from "features/Doctor/Auth/doctorAuthSlice";

const DoctorAccountDetails = () => {
  const { isLoading, doctor, clinicsOptions, specialtiesOptions } = useSelector(
    (store) => store.doctorAuth
  );
  useEffect(() => {
    dispatch(fetchClinicsOptions());
    dispatch(fetchSpecialtiesOptions());
  }, []);

  const dispatch = useDispatch();
  const [doctorData, setUserData] = useState({
    firstName: doctor?.firstName || "",
    lastName: doctor?.lastName || "",
    phone: doctor?.phone || "",
    email: doctor?.email || "",
    city: doctor?.city || "",
    street: doctor?.street || "",
    dateOfBirth: dayjs(doctor?.dateOfBirth).format("YYYY-MM-DD") || null,
    experience: doctor?.experience || "",
    clinic: doctor?.clinic._id || "",
    docType: doctor?.docType._id || "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...doctorData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, city, street, dateOfBirth } =
      doctorData;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !phone ||
      !city ||
      !street ||
      !dateOfBirth
    ) {
      toast.error(`Please fill out all fields`);
      return;
    }
    dispatch(updateDoctor(doctorData));
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h5 className="title">Profile Details</h5>

        <FormRow
          type="text"
          name="firstName"
          labelText="First Name"
          value={doctorData.firstName}
          handleChange={handleChange}
        />

        <FormRow
          type="text"
          labelText="Last Name"
          name="lastName"
          value={doctorData.lastName}
          handleChange={handleChange}
        />
        <FormRow
          type="date"
          labelText="Date of Birth"
          name="dateOfBirth"
          value={doctorData.dateOfBirth}
          handleChange={handleChange}
        />
        <FormRowSelect
          type="text"
          labelText="Clinic"
          name="clinic"
          value={doctorData.clinic}
          list={clinicsOptions}
          handleChange={handleChange}
  
        />
        <FormRowSelect
          type="text"
          labelText="Specialty"
          name="docType"
          value={doctorData.docType}
          list={specialtiesOptions}
          handleChange={handleChange}
    
        />
        <FormRow
          type="text"
          labelText="Phone"
          name="phone"
          value={doctorData.phone}
          handleChange={handleChange}
        />

        <FormRow
          type="email"
          name="email"
          labelText="Email"
          value={doctorData.email}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          labelText="City"
          name="city"
          value={doctorData.city}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          labelText="Street"
          name="street"
          value={doctorData.street}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Please wait..." : "Save"}
        </button>
      </form>
    </Wrapper>
  );
};

export default DoctorAccountDetails;
