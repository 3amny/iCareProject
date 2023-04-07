import { getAllRoles } from "features/Admin/Roles/RoleSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoAddCircleSharp } from "react-icons/io5";
import { CardRole } from "shared/Card/component/CardRole/CardRole";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const RolesContainer = () => {
  
  const { roles, isLoading } = useSelector((store) => store.role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRoles());
  }, []);

  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  if (roles.length === 0) {
    return <h2>No users to display....</h2>;
  }
  return (
    <Wrapper>
      <div className="info">
        <h5>
          {roles.length} role{roles.length > 1 ? "s were" : " was"} found
        </h5>
        <Link to="/admin/roles/create" className="btn add-btn">
          <IoAddCircleSharp />
          Add role
        </Link>
      </div>
      <div className="roles">
        {roles.map((role) => {
          return <CardRole key={role._id} {...role} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 4rem;

  & > h5 {
    font-weight: 700;

  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: var(--size-300);
  }
  .roles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .add-btn {
    color: var(--primary-700);
    background: var(--primary-300);
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
  @media screen and (max-width: 45em) {
    .roles {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;
