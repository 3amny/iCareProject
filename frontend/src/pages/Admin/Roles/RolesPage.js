import React from "react";
import Wrapper from "./Wrapper";
import { Role } from "shared/Search/component/SearchRole/Role";
import { RolesContainer } from "shared/Container/component/RolesContainer/RolesContainer";
const RolesPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <RolesContainer />
      </div>
    </Wrapper>
  );
};


export default RolesPage;
