import React, { useEffect } from "react";
import Wrapper from "pages/AccountDetails/Wrapper";
import profileImage from "assets/images/profile.jpg";
import { FormRow, FormRowSelect } from "shared/Input";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  clearValues,
  handleChange,
  updateDoctorAdmin,
  fetchClinicsOptions,
  fetchSpecialtiesOptions,
  fetchRolesOptions,
} from "features/Admin/Doctor/CRUD/doctorSlice";
const AdminDoctorEditPage = () => {
  const {
    isLoading,
    firstName,
    lastName,
    dateOfBirth,
    phone,
    experience,
    startTime,
    endTime,
    interval,
    email,
    docType,
    clinic,
    editDoctorId,
    clinicsOptions,
    specialtiesOptions,
    rolesOptions,
    role,
  } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClinicsOptions());
    dispatch(fetchSpecialtiesOptions());
    dispatch(fetchRolesOptions());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !email || !experience) {
      toast.error("Please fill all fields");
      return;
    }
    dispatch(
      updateDoctorAdmin({
        doctorId: editDoctorId,
        doctor: {
          firstName,
          lastName,
          dateOfBirth,
          phone,
          experience,
          startTime,
          endTime,
          interval,
          email,
          docType,
          clinic,
        },
      })
    );
  };
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  return (
    <Wrapper>
      <form className="form">
        <div className="account">
          <div className="account-details-container">
            <h5 className="account-title">Profile Details</h5>
            <div className="account-details-form">
              <FormRow
                type="text"
                name="firstName"
                labelText="First Name"
                value={firstName}
                handleChange={handleUserInput}
              />

              <FormRow
                type="text"
                labelText="Last Name"
                name="lastName"
                value={lastName}
                handleChange={handleUserInput}
              />
              <FormRow
                type="date"
                labelText="Date of Birth"
                name="dateOfBirth"
                value={
                  dateOfBirth
                    ? new Date(dateOfBirth).toISOString().slice(0, 10)
                    : ""
                }
                handleChange={handleUserInput}
              />
              <FormRow
                type="text"
                labelText="Phone"
                name="phone"
                value={phone}
                handleChange={handleUserInput}
              />
              <FormRow
                type="email"
                name="email"
                labelText="Email"
                value={email}
                handleChange={handleUserInput}
              />
              <FormRowSelect
                labelText="Specialty"
                name="docType"
                value={docType._id}
                handleChange={handleUserInput}
                list={specialtiesOptions}
              />
              <FormRowSelect
                labelText="Clinic"
                name="clinic"
                value={clinic._id}
                handleChange={handleUserInput}
                list={clinicsOptions}
              />
              <FormRowSelect
                labelText="Role"
                name="role"
                value={role}
                handleChange={handleUserInput}
                list={rolesOptions}
              />
              <FormRow
                type="text"
                labelText="Experience"
                name="experience"
                value={experience}
                handleChange={handleUserInput}
              />
              <FormRow
                type="time"
                labelText="Start Time"
                name="startTime"
                value={startTime}
                handleChange={handleUserInput}
              />
              <FormRow
                type="time"
                labelText="End Time"
                name="endTime"
                value={endTime}
                handleChange={handleUserInput}
              />
              <FormRow
                type="text"
                labelText="Interval"
                name="interval"
                value={interval}
                handleChange={handleUserInput}
              />

              <button
                type="submit"
                className="btn btn-block"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                {isLoading ? "Please wait..." : "Save"}
              </button>
              <button
                className="btn btn-block clear-btn"
                onClick={(e) => {
                  dispatch(clearValues());
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AdminDoctorEditPage;
