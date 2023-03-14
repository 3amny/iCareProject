import React from "react";
import { useAppContext } from "context/appContext";
import { useEffect } from "react";
import styled from "styled-components";
import { CardDoctor } from "shared/Card/component/CardDoctor/CardDoctor/CardDoctor";
export const DoctorsContainer = () => {
  const { doctors, getDoctors, numOfPages, totalDoctors, isLoading } =
    useAppContext();
  useEffect(() => {
    getDoctors();
  }, []);

  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  {
    if (totalDoctors === 0) {
      return <h2>No doctors to display....</h2>;
    }
  }
  return (
    <Wrapper>
      <h5>
        {totalDoctors} user{totalDoctors > 1 ? "s were" : " was"} found
      </h5>
      <div className="doctors">
        {doctors.map((doctor) => {
          return <CardDoctor key={doctor._id} {...doctor} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .doctors {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media screen and (max-width: 45em) {
    .doctors {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;
