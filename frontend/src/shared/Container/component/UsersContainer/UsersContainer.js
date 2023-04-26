import {
  changePage,
  getAllUsers,
} from "features/Admin/User/getAll/allUsersSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageButtons } from "shared/Button";
import { CardUser } from "shared/Card";
import styled from "styled-components";
export const UsersContainer = () => {
  const { users, totalUsers, isLoading } = useSelector(
    (store) => store.allUsers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  if (totalUsers === 0) {
    return <h2>No users to display....</h2>;
  }

  return (
    <Wrapper>
      <h5>
        {totalUsers} user{users.length > 1 ? "s were" : " was"} found
      </h5>
      <div className="users">
        {users.map((user) => {
          return <CardUser key={user._id} {...user} />;
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
  .users {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media screen and (max-width: 45em) {
    .users {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;
