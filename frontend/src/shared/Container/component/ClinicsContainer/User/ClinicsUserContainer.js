import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { PageButtons } from "shared/Button/index.js";
import { CardClinicLong, CardDoctorLong } from "shared/Card/index.js";
import { useSelector } from "react-redux";
import { changePage } from "features/Admin/Clinic/getAll/allClinicsSlice";

export const ClinicsUserContainer = () => {
  const { clinics, totalClinics, isLoading, numOfPages, page } = useSelector(
    (store) => store.allClinics
  );
  const dispatch = useDispatch();

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  if (totalClinics === 0) {
    return <h2>No clinics to display....</h2>;
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
    <Wrapper>
      <h5>
        {totalClinics} clinic{clinics.length > 1 && "s"} found
      </h5>
      <div className="clinic">
        {clinics.map((clinic) => {
          return <CardClinicLong key={clinic._id} {...clinic} />;
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
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .clinics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;  
  }
  @media screen and (max-width: 45em) {
    .clinics {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
