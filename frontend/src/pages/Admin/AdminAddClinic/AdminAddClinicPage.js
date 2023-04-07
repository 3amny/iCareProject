import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { FormRow } from "shared/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChange,
  clearValues,
  createClinicAdmin,
  updateClinicAdmin,
} from "features/Admin/Clinic/CRUD/clinicAdminSlice";
function AdminAddClinicPage() {
  const {
    isLoading,
    isEditing,
    name,
    email,
    phone,
    city,
    street,
    isVerified,
    editClinicId,
  } = useSelector((store) => store.clinicAdmin);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !city || !street || !email) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        updateClinicAdmin({
          clinicId: editClinicId,
          clinic: { name, email, phone, city, street, isVerified },
        })
      );
      return;
    }

    dispatch(
      createClinicAdmin({
        name,
        email,
        phone,
        city,
        street,
        isVerified,
      })
    );
  };
  const handleClinicInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    dispatch(handleChange({ name, value }));
  };
  return (
    <Wrapper>
      <form className="form">
        <h5>{isEditing ? "Edit Clinic" : "Add Clinic"}</h5>
        <FormRow
          type="text"
          name="name"
          labelText="Organization"
          value={name}
          handleChange={handleClinicInput}
        />

        <FormRow
          type="email"
          labelText="Email"
          name="email"
          value={email}
          handleChange={handleClinicInput}
        />

        <FormRow
          type="text"
          labelText="Phone"
          name="phone"
          value={phone}
          handleChange={handleClinicInput}
        />
        <FormRow
          type="text"
          labelText="City"
          name="city"
          value={city}
          handleChange={handleClinicInput}
        />
        <FormRow
          type="text"
          labelText="Street"
          name="street"
          value={street}
          handleChange={handleClinicInput}
        />
        <FormRow
          type="checkbox"
          labelText="Verified"
          name="isVerified"
          checked={isVerified}
          handleChange={handleClinicInput}
        />

        <div className="btn-container">
          <button
            type="submit"
            className="btn btn-block submit-btn"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="btn btn-block clear-btn"
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              clearValues();
            }}
          >
            Clear
          </button>
        </div>

        <div className="link">
          <Link to="/admin/clinics" className="link-signin">
            Go Back
          </Link>
        </div>
      </form>
    </Wrapper>
  );
}

export default AdminAddClinicPage;
