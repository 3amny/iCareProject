import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import styled from "styled-components";

export const Accordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="accordion">
        <div className="title" onClick={() => toggleAccordion()}>
          <h5>{title}</h5>
          <span>{!isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
        </div>
        {isOpen ? (
          <div className="content">
            <p>{text}</p>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  .accordion {
    box-shadow: var(--shadow-3);
  }
  .title {
    background: var(--primary-700);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    cursor: pointer;
    h5 {
      padding: 1rem;
      margin-bottom: 0;
    }
    span {
      padding: 0 1rem;
    }
  }
  .content {
    padding: 0.5rem 1rem;
  }
`;
