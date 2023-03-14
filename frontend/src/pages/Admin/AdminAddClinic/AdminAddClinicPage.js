import React from "react";
import { useAppContext } from "context/appContext";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { FormRow } from "shared/Input";
import { Alert } from "shared/Alert";
function AdminAddClinicPage() {
  const {
    isEditing,
    organization,
    email,
    phone,
    city,
    street,
    isVerified,
    handleChange,
    showAlert,
    displayAlert,
    isLoading,
    clearValues,
    createClinic,
    updateClinicAdmin,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!organization || !phone || !city || !street || !email) {
      displayAlert();
      return;
    }

    if (isEditing) {
      updateClinicAdmin();
      return;
    }
    createClinic();
  };
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className="form">
        <h5>{isEditing ? "Edit Clinic" : "Add Clinic"}</h5>
        {showAlert && <Alert />}
        <FormRow
          type="text"
          name="organization"
          labelText="Organization"
          value={organization}
          handleChange={handleUserInput}
        />

        <FormRow
          type="email"
          labelText="Email"
          name="email"
          value={email}
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
          type="text"
          labelText="City"
          name="city"
          value={city}
          handleChange={handleUserInput}
        />
        <FormRow
          type="text"
          labelText="Street"
          name="street"
          value={street}
          handleChange={handleUserInput}
        />
        <FormRow
          type="checkbox"
          labelText="Verified"
          name="isVerified"
          checked={isVerified}
          handleChange={handleUserInput}
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
