import React from "react";
import { Link } from "react-router-dom";
import { FormRow } from "shared/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  createRole,
  handleChange,
  updateRole,
  clearValues,
} from "features/Admin/Roles/RoleSlice";
import { toast } from "react-toastify";
import styled from "styled-components";

function CreateRolePage() {
  const { isLoading, isEditing, name, editRoleId } = useSelector(
    (store) => store.role
  );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      console.log(name);
      toast.error("Please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        updateRole({
          roleId: editRoleId,
          role: { name },
        })
      );
      return;
    }

    dispatch(
      createRole({
        name,
      })
    );
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    dispatch(handleChange({ name, value }));
  };
  return (
    <Wrapper>
      <form className="form">
        <h5>{isEditing ? "Edit Role" : "Add Role"}</h5>
        <FormRow
          type="text"
          name="name"
          labelText="Title"
          value={name}
          handleChange={handleInput}
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
          <Link to="/admin/roles" className="link-signin">
            Go Back
          </Link>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h5 {
    text-align: center;
    font-weight: 600;
  }
  p {
    margin-right: 5px;
    text-align: center;
  }
  .btn {
    margin: 1rem 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  .link {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link-signin {
    color: var(--primary-700);
    text-decoration: underline;
  }
  .form-label {
    font-weight: bold;
  }
`;
export default CreateRolePage;
