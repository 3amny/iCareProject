import React from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { PageButtons } from "shared/Button/index.js";
import { CardDoctorLong } from "shared/Card/index.js";
import { useSelector } from "react-redux";
import { changePage } from "features/Admin/Doctor/getAll/allDoctorsSlice";
export const DoctorsUserContainer = () => {
  const { doctors, totalDoctors, isLoading, numOfPages, page } = useSelector(
    (store) => store.allDoctors
  );
  const dispatch = useDispatch();

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  if (totalDoctors === 0) {
    return <h2>No doctors to display....</h2>;
  }

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < numOfPages) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  return (
    <Wrapper className="container">
      <h5>
        {totalDoctors} doctor{doctors.length > 1 && "s"} found
      </h5>
      <div className="doctors">
        {doctors.map((doctor) => {
          return (
            <CardDoctorLong
              key={doctor._id}
              {...doctor}
              docType={doctor.docType ? doctor.docType.name : ""}
              clinic={doctor.clinic ? doctor.clinic.name : ""}
            />
          );
        })}
      </div>

      {numOfPages > 1 && (
        <PageButtons
          numOfPages={numOfPages}
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
          changePage={(pageNum) => dispatch(changePage(pageNum))}
        />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 4rem 0;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .doctors {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;  
  }
  @media screen and (max-width: 45em) {
    .doctors {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
