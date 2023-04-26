import dayjs from "dayjs";
import React from "react";
import { Textarea } from "shared/Input";
import styled from "styled-components";

export const ConfirmForm = ({
  endTime,
  startTime,
  date,
  handleSubmit,
  handleClose,
  notes,
  handleInput,
}) => {
  return (
    <Wrapper>
      <div className="confirm-form">
        <div className="ap-data">
          <h5>
            <span>Appointment date: </span>
            {date ? dayjs(date).format("DD MMM YYYY") : null}
          </h5>
          <h5>
            <span> Start time: </span>
            {startTime ? startTime : null}
          </h5>
          <h5>
            <span>End time: </span>
            {endTime ? endTime : null}
          </h5>
        </div>
        <div className="notes-container">
          <Textarea
            name="notes"
            value={notes}
            onChange={handleInput}
            placeholder="You can write notes to doctor "
            className="notes"
          />
        </div>
        <div className="buttons">
          <button type="button" className="btn-danger" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit" className="btn-success" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  h5 {
    span {
      font-weight: 600;
    }
  }
`;
