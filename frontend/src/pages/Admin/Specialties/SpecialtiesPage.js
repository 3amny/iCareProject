import React from "react";
import { SpecialtiesContainer } from "shared/Container/component/SpecialtiesContainer/SpecialtiesContainer";
import styled from "styled-components";
const SpecialtiesPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <SpecialtiesContainer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main``;
export default SpecialtiesPage;
