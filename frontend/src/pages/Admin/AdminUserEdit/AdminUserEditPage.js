import React, { useEffect } from "react";
import Wrapper from "pages/AccountDetails/Wrapper";
import profileImage from "assets/images/profile.jpg";
import { FormRow, FormRowSelect } from "shared/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  clearValues,
  fetchRolesOptions,
  handleChange,
  updateUserAdmin,
} from "features/Admin/User/CRUD/userAdminSlice";
import { toast } from "react-toastify";
const AdminUserEditPage = () => {
  const {
    isLoading,
    email,
    firstName,
    lastName,
    phone,
    city,
    street,
    role,
    editUserId,
    rolesOptions,
    dateOfBirth,
  } = useSelector((store) => store.userAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRolesOptions());
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !email ||
      !firstName ||
      !lastName ||
      !phone ||
      !city ||
      !street ||
      !dateOfBirth
    ) {
      toast.error("Please fill all fields");
      return;
    }
    dispatch(
      updateUserAdmin({
        userId: editUserId,
        user: {
          email,
          firstName,
          lastName,
          phone,
          city,
          street,
          role,
          dateOfBirth,
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
              <FormRowSelect
                type="text"
                labelText="Role"
                name="role"
                value={role}
                list={rolesOptions}
                handleChange={handleUserInput}
              />
              {/*add appointments array if exist */}
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
                disabled={isLoading}
                onClick={() => {
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

export default AdminUserEditPage;
