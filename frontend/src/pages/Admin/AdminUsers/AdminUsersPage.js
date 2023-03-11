import React from "react";
import { SearchUser } from "shared/Search";
import Wrapper from "./Wrapper";
import { UsersContainer } from "shared/Container/component/UsersContainer";
const AdminUsersPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <SearchUser />
        <UsersContainer />
      </div>
    </Wrapper>
  );
};

export default AdminUsersPage;
