import React from "react";
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
        <h5 className="title">Profile Details</h5>

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

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Please wait..." : "Save"}
        </button>
      </form>
    </Wrapper>
  );
};

export default AccountDetailsPage;
