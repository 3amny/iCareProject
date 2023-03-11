import React from "react";
import profileImage from "../../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Wrapper from "./Wrapper";
import { FormRow } from "shared/Input";
import { Alert } from "shared/Alert";
import { useAppContext } from "context/appContext";

const AccountDetailsPage = () => {
  const { user, isLoading, showAlert, displayAlert, updateUser } =
    useAppContext();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [phone, setPhoneNum] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const [city, setCity] = useState(user?.city);
  const [street, setStreet] = useState(user?.street);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !firstName || !lastName || !phone || !city || !street) {
      displayAlert();
      return;
    }
    updateUser({ firstName, lastName, email, phone, street, city });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        {showAlert && <Alert />}
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
              <FormRow
                type="text"
                name="firstName"
                labelText="First Name"
                value={firstName}
                handleChange={(e) => setFirstName(e.target.value)}
              />

              <FormRow
                type="text"
                labelText="Last Name"
                name="lastName"
                value={lastName}
                handleChange={(e) => setLastName(e.target.value)}
              />

              <FormRow
                type="text"
                labelText="Phone"
                name="phone"
                value={phone}
                handleChange={(e) => setPhoneNum(e.target.value)}
              />

              <FormRow
                type="email"
                name="email"
                labelText="Email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
              <FormRow
                type="text"
                labelText="City"
                name="city"
                value={city}
                handleChange={(e) => setCity(e.target.value)}
              />
              <FormRow
                type="text"
                labelText="Street"
                name="street"
                value={street}
                handleChange={(e) => setStreet(e.target.value)}
              />

              <button
                type="submit"
                className="btn btn-block"
                disabled={isLoading}
              >
                {isLoading ? "Please wait..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AccountDetailsPage;
