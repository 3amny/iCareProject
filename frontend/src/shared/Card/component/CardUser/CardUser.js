import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import {
  deleteUserAdmin,
  setEditUser,
} from "features/Admin/User/CRUD/userAdminSlice";
export const CardUser = ({
  firstName,
  lastName,
  city,
  street,
  phone,
  dateOfBirth,
  role,
  email,
  _id,
  createdAt,
}) => {
  const dispatch = useDispatch();
  let date = dayjs(createdAt).format("MMMM D, YYYY");
  return (
    <Wrapper className="container">
      <div className="user-primary-info">
        <h5>
          Id: <span>{_id}</span>
        </h5>
        <h5>
          Created at: <span>{date}</span>
        </h5>
      </div>
      <div className="user-info">
        <div className="user-name">
          <h5>
            Full Name:
            <span>
              {firstName} {lastName}
            </span>
          </h5>
        </div>
        <div className="user-birth">
          <h5>
            Date of Birth:
            <span>{dayjs(dateOfBirth).format("DD/MM/YYYY")}</span>
          </h5>
        </div>
        <div className="user-location">
          <h5>
            City: <span>{city}</span>
          </h5>
          <h5>
            Street: <span>{street}</span>
          </h5>
        </div>
        <h5>
          Phone: <span>{phone}</span>
        </h5>
        <h5>
          Email: <span>{email}</span>
        </h5>
        <h5>
          Role: <span>{role.name}</span>
        </h5>
      </div>
      <div className="user-actions">
        <Link
          to="/admin/users/edit"
          className="btn edit-btn"
          onClick={() =>
            dispatch(
              setEditUser({
                editUserId: _id,
                firstName,
                lastName,
                city,
                street,
                phone,
                role,
                email,
                dateOfBirth,
              })
            )
          }
        >
          Edit
        </Link>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => dispatch(deleteUserAdmin(_id))}
        >
          Delete
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 2px solid var(--primary-700);
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  h5 {
    letter-spacing: 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700;
    text-transform: none;
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }

  .user-primary-info {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }
  .user-info {
    padding: 1rem 1.5rem;
    align-items: center;
  }
  .user-actions {
    padding: 0 1.5rem;
    padding-bottom: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .user-actions {
    visibility: visible;
  }
`;
