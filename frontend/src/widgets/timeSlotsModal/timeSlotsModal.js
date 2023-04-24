import React from "react";
import { HiXMark } from "react-icons/hi2";
import { TimeSlotList } from "shared/List";
import styled from "styled-components";

import { Textarea } from "shared/Input";
import { handleChange } from "features/Appointment/appointmentSlice";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
export const TimeSlotsModal = ({
  handleClose,
  timeSlots,
  notes,
  handleTimeSet,
  startDate,
  endDate,
  isReady,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    dispatch(handleChange({ name, value }));
  };
  return (
    <Wrapper className="modal">
      <div className="overlay" />
      <div className="modal-content">
        <div className="modal-title">
          <h5>
            {!isReady ? "Choose time slots" : "Confirm the appointment date"}
          </h5>
        </div>
        <button onClick={handleClose} className="modal-toggle">
          <HiXMark size={18} />
        </button>
        {!isReady ? (
          <TimeSlotList timeSlots={timeSlots} onClick={handleTimeSet} />
        ) : (
          <div className="modal-confirm">
            <div className="modal-ap-data">
              <p>
                <span>Appointment date: </span>
                {startDate ? dayjs(startDate).format("DD MMM YYYY") : null}
              </p>
              <p>
                <span> Start time: </span>
                {startDate ? dayjs(startDate).format("HH:mm") : null}
              </p>
              <p>
                <span>End time: </span>
                {endDate ? dayjs(endDate).format("HH:mm") : null}
              </p>
            </div>
            <div className="modal-notes">
              <Textarea
                name="notes"
                value={notes}
                onChange={handleInput}
                className="notes"
              />
            </div>
            <div className="buttons">
              <button type="submit" className="btn" onClick={handleSubmit}>
                Confirm
              </button>
              <button type="button" className="btn" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .time-stack {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
    row-gap: 10px;
  }
  .time {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-title {
    display: flex;
    align-items: center;
    justify-content: center;
    h5 {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .btn-time {
    cursor: pointer;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.4rem 0.35rem;
    p {
      font-size: 15px;
      text-align: center;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
  .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.5;
    background: #f1f1f1;
    padding: 14px 50px;
    border-radius: 3px;
    max-width: clamp(400px, 30vw, 800px);
  }

  .modal-toggle {
    top: 18px;
    display: block;
    position: fixed;
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
  .buttons {
    display: flex;
    justify-content: space-between;
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
