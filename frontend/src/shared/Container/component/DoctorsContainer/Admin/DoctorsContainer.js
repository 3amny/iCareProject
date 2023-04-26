import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { CardDoctor } from "shared/Card/component/CardDoctor/CardDoctor/CardDoctor";
import { useSelector } from "react-redux";
import { getAllDoctors } from "features/Admin/Doctor/getAll/allDoctorsSlice";
import { PageButtons } from "shared/Button";
export const DoctorsContainer = () => {
  const { doctors, totalDoctors, isLoading, numOfPages, page } = useSelector(
    (store) => store.allDoctors
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors());
  }, []);
  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  {
    if (totalDoctors === 0) {
      return <h2>No doctors to display....</h2>;
    }
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
        {totalDoctors} user{totalDoctors > 1 ? "s were" : " was"} found
      </h5>
      <div className="doctors">
        {doctors.map((doctor) => {
          return <CardDoctor key={doctor._id} {...doctor} />;
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
