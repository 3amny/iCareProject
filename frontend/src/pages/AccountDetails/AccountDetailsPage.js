import React from "react";
import profileImage from "../../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Wrapper from "./Wrapper";
import { FormRow } from "shared/Input";
import { store } from "store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "features/User/Auth/userSlice";

const AccountDetailsPage = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phone: user?.phone || "",
    email: user?.email || "",
    city: user?.city || "",
    street: user?.street || "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, city, street } = userData;
    if (!email || !firstName || !lastName || !phone || !city || !street) {
      toast.error(`Please fill out all fields`);
      return;
    }
    dispatch(updateUser(userData));
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
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
                value={userData.firstName}
                handleChange={handleChange}
              />

              <FormRow
                type="text"
                labelText="Last Name"
                name="lastName"
                value={userData.lastName}
                handleChange={handleChange}
              />

              <FormRow
                type="text"
                labelText="Phone"
                name="phone"
                value={userData.phone}
                handleChange={handleChange}
              />

              <FormRow
                type="email"
                name="email"
                labelText="Email"
                value={userData.email}
                handleChange={handleChange}
              />
              <FormRow
                type="text"
                labelText="City"
                name="city"
                value={userData.city}
                handleChange={handleChange}
              />
              <FormRow
                type="text"
                labelText="Street"
                name="street"
                value={userData.street}
                handleChange={handleChange}
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
