import {
  handleChange,
  clearFilters,
} from "features/Admin/Doctor/getAll/allDoctorsSlice";
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormRow, FormRowSelect } from "shared/Input";
import styled from "styled-components";

export const SearchDoctor = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    search,
    searchClinics,
    sort,
    sortOptions,
    searchSpecialty,
  } = useSelector((store) => store.allDoctors);
  const { clinics } = useSelector((store) => store.allClinics);
  const { specialties } = useSelector((store) => store.specialty);

  const [localSearch, setLocalSearch] = useState("");
  const debounce = () => {
    let timeoutId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dispatch(
          handleChange({ name: e.target.name, value: e.target.value }, 1000)
        );
      });
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className="form">
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            labelText="Search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          <FormRowSelect
            type="text"
            labelText="Specialty"
            name="searchSpecialty"
            value={searchSpecialty}
            handleChange={handleSearch}
            list={specialties}
            isRequried={true}
          />
          <FormRowSelect
            type="text"
            labelText="Clinic"
            name="searchClinics"
            value={searchClinics}
            handleChange={handleSearch}
            list={clinics}
            isRequried={true}
          />
          <FormRowSelect
            type="text"
            name="sort"
            labelText="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
            isRequried={false}
          />
        </div>
        <button
          className="btn btn-block btn-danger"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          Clear values
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form {
    border-top: 3px solid var(--primary-700);
  }
  .form-center {
    display: grid;
    grid-template-columns: 40% 30% 30%;
  }
  h4 {
    margin: 0;
  }
  .form-row {
    margin: 20px 10px;
  }
`;
