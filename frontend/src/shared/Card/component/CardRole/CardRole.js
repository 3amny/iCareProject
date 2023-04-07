import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { deleteRole, setEditRole } from "features/Admin/Roles/RoleSlice";

export const CardRole = ({ name, _id, createdAt }) => {
  const dispatch = useDispatch();
  let date = dayjs(createdAt).format("MMMM D, YYYY");
  return (
    <Wrapper className="container">
      <div className="role-primary-info">
        <h5>
          Id: <span>{_id}</span>
        </h5>
      </div>
      <div className="role-info">
        <div className="role-name">
          <h5>
            Title:
             <span> {name}</span>
          </h5>
          <h5>
            Created at: <span>{date}</span>
          </h5>
        </div>
      </div>
      <div className="user-actions">
        <Link
          to="/admin/roles/create"
          className="btn edit-btn"
          onClick={() =>
            dispatch(
              setEditRole({
                editRoleId: _id,
                name,
              })
            )
          }
        >
          Edit
        </Link>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => dispatch(deleteRole(_id))}
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

  .role-primary-info {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }
  .role-info {
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
