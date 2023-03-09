import React from "react";
import profileImage from "../../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Wrapper from "./Wrapper";
import { FormRow } from "shared/Input";
import { Alert } from "shared/Alert";
import { useAppContext } from "context/appContext";
const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  password: "",
  oldPassword: "",
  newPassword: "",
  isMember: true,
};
const AccountDetailsPage = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, updateUser } =
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
  };
  return (
    <Wrapper>
      <form className="form">
        <div className="account">
          <div className="account-img-container">
            <h5 className="account-title">Profile image</h5>
            <div className="account-img-form">
              <img
                src={profileImage}
                alt="user_image"
                className="account-img"
              />
              <div className="account-img-upload">
                <input
                  type="file"
                  id="fileElem"
                  multiple
                  accept="image/*"
                  className="visually-hidden"
                />
                <label htmlFor="fileElem" className="account-img-label">
                  <i className="fa-solid fa-pen" />
                  <p>Edit</p>
                </label>
              </div>
            </div>
          </div>
          <div className="account-details-container">
            <h5 className="account-title">Profile Details</h5>
            <div className="account-details-form">
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
              <div className="account-change-password">
                <FormRow
                  type="text"
                  labelText="Old password"
                  name="oldPassword"
                  value={values.phone}
                  handleChange={handleChange}
                />

                <FormRow
                  type="text"
                  name="newPassword"
                  labelText="New password"
                  value={values.email}
                  handleChange={handleChange}
                />
                 <FormRow
                  type="text"
                  name="confirmPassword"
                  labelText="Confirm password"
                  value={values.email}
                  handleChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-block"
                disabled={isLoading}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AccountDetailsPage;
