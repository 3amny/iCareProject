import { useEffect } from "react";
import { useAppContext } from "context/appContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardClinic } from "shared/Card/component/CardClinic/CardClinic";
import { IoAddCircleSharp } from "react-icons/io5";
export const ClinicsContainer = () => {
  const { clinics, getClinics, numOfPages, totalClinics, isLoading } =
    useAppContext();
  useEffect(() => {
    getClinics();
  }, []);

  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  if (totalClinics === 0) {
    return <h2>No clinic to display....</h2>;
  }

  return (
    <Wrapper>
      <div className="info">
        <h5>
          {totalClinics} clinic{totalClinics > 1 ? "s were" : " was"} found
        </h5>
        <Link to="/admin/clinics/create" className="btn add-btn">
          <IoAddCircleSharp />
          Add clinic
        </Link>
      </div>

      <div className="clinics">
        {clinics.map((clinic) => {
          return <CardClinic key={clinic._id} {...clinic} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 4rem;
  h5 {
    font-weight: 700;
    margin-bottom: 0;
    text-transform: none;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: var(--size-300);
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
  .clinics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media screen and (max-width: 45em) {
    .clinics {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;