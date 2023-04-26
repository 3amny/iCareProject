import React from "react";
import { TimeSlotList } from "shared/List";
import styled from "styled-components";
export const TimeSlotsModal = ({
  timeSlots,
  handleTimeSet,
  onBackTime,
  onConfirmTime,
}) => {
  return (
    <Wrapper>
      <div className="content">
        <TimeSlotList timeSlots={timeSlots} onClick={handleTimeSet} />
        <div className="buttons">
          <button className="btn-danger" onClick={onBackTime}>
            Go back
          </button>
          <button className="btn-success" onClick={onConfirmTime}>
            Confirm
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-close {
    display: flex;
    margin: 20px 0px;
    align-items: center;
    justify-content: center;
  }

  .btn-time {
    cursor: pointer;
    color: var(--primary-600);
    width: clamp(200px, 30vw, 400px);
    height: clamp(20px, 10vw, 40px);
    background: white;
    border: 1px solid var(--primary-600);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem 0.4rem;
    box-shadow: var(--shadow-3);
    p {
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
  .btn-time:hover {
    background: var(--primary-600);
    color: white;
  }
  .btn-time.active {
    background: var(--primary-700);
    color: white;
  }
  .content {
    margin-top: 30px;
  }

  .modal-toggle {
    top: 18px;
    display: block;
    right: var(--size-400);
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 9999;

    width: fit-content;
    svg {
      color: var(--primary-700);
    }
  }
  .modal-confirm {
    display: flex;
    flex-direction: column;
  }
  .modal-ap-data {
    p {
      margin-top: 5px;
      margin-bottom: 10px;
      span {
        font-weight: bold;
      }
    }
  }
  .time-stack {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
    row-gap: 10px;
    margin-bottom: 20px;
  }
  .time {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-notes {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .notes {
    flex-grow: 1;
    resize: none;
    height: 80px;
    border-radius: 0.5em;
    padding: 0.5em;
    font-size: inherit;
    font-family: inherit;
    border: 2px solid var(--primary-500);
    line-height: 1.4;
  }
  .notes:focus {
    border-color: var(--primary-700);
    outline: none;
  }
`;
