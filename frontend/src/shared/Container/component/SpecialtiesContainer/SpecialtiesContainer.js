import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoAddCircleSharp } from "react-icons/io5";
import { CardSpecialty } from "shared/Card/component/CardSpecialty/CardSpecialty";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAllSpecialties } from "features/Admin/Specialties/specialtySlice";
export const SpecialtiesContainer = () => {
  
  const { specialties, isLoading } = useSelector((store) => store.specialty);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSpecialties());
  }, []);

  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  if (specialties.length === 0) {
    return <h2>No users to display....</h2>;
  }
  return (
    <Wrapper>
      <div className="info">
        <h5>
          {specialties.length} specialt{specialties.length > 1 ? "ies were" : "y was"} found
        </h5>
        <Link to="/admin/specialties/create" className="btn add-btn">
          <IoAddCircleSharp />
          Add specialty
        </Link>
      </div>
      <div className="specialties">
        {specialties.map((specialty) => {
          return <CardSpecialty key={specialty._id} {...specialty} />;
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
  .specialties {
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
    .specialties {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;
