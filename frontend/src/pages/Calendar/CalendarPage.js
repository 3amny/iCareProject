import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import dayjs from "dayjs";
import timeManagement from "assets/images/time_management.svg";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getAvailableTimeSlots,
  setDate,
  setFinalDateValues,
  setTimeSlots,
  clearValues,
  createAppointment,
  handleChange,
} from "features/Appointment/appointmentSlice";
import { TimeSlotsModal } from "widgets/TimeSlotsModal/TimeSlotsModal";
import { toast } from "react-toastify";
import { ConfirmForm } from "widgets";

const CalendarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    timeSlots,
    isLoading,
    date,
    startTime,
    endTime,
    startDate,
    endDate,
    notes,
  } = useSelector((store) => store.appointment);

  const [isTimeSlotsLoaded, setIsTimeSlotsLoaded] = useState(false);
  const [isTimeConfirmed, setIsTimeConfirmed] = useState(false);

  const dateClickHandler = (arg) => {
    const date = dayjs(arg.date).format("YYYY-MM-DD");
    dispatch(setDate({ date }));
    dispatch(getAvailableTimeSlots({ doctorId: id, chosenDate: date }));
  };

  useEffect(() => {
    if (timeSlots.length > 0 && isLoading === false) {
      setIsTimeSlotsLoaded(true);
    }
  }, [timeSlots, isLoading]);

  const handleTimeSlotBack = (e) => {
    e.preventDefault();
    setIsTimeSlotsLoaded(false);
    dispatch(clearValues());
  };
  const handleConfirmBack = (e) => {
    e.preventDefault();
    setIsTimeSlotsLoaded(false);
    setIsTimeConfirmed(false);
    dispatch(clearValues());
  };
  const handleTimeSet = (startTime, endTime) => {
    dispatch(setTimeSlots({ startTime, endTime }));
  };

  let startDateValues;
  let endDateValues;

  const handleTimeConfirm = () => {
    if (startTime && endTime) {
      setIsTimeConfirmed(true);
      if (date) {
        startDateValues = dayjs(`${date}T${startTime}:00`).format(
          "YYYY-MM-DDTHH:mm:ss.SSSZ"
        );
        endDateValues = dayjs(`${date}T${endTime}:00`).format(
          "YYYY-MM-DDTHH:mm:ss.SSSZ"
        );
        dispatch(setFinalDateValues({ startDateValues, endDateValues }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createAppointment({
        doctorId: id,
        startDate: startDate,
        endDate: endDate,
        notes: notes,
      })
    );
  };

  if (isLoading) {
    return <h5>Loading....</h5>;
  }
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  return (
    <Wrapper
      style={
        isTimeSlotsLoaded && !isTimeConfirmed
          ? {
              backgroundImage: `url(${timeManagement})`,
              backgroundSize: "45%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 100px",
            }
          : null
      }
    >
      <div className="container">
        <div className="title">
          <h5>
            {isTimeSlotsLoaded
              ? isTimeConfirmed
                ? "Confirm the appointment"
                : `Choose time slot for ${dayjs(date).format("DD MMM YYYY")}`
              : "Choose the date"}
          </h5>
        </div>
        {isTimeSlotsLoaded ? (
          <div>
            {isTimeConfirmed ? (
              <ConfirmForm
                notes={notes}
                handleInput={(e) => handleInput(e)}
                endTime={endTime}
                startTime={startTime}
                date={date}
                handleClose={handleConfirmBack}
                handleSubmit={handleSubmit}
              />
            ) : (
              <TimeSlotsModal
                handleTimeSet={(startTime, endTime) =>
                  handleTimeSet(startTime, endTime)
                }
                timeSlots={timeSlots}
                onBackTime={handleTimeSlotBack}
                onConfirmTime={handleTimeConfirm}
              />
            )}
          </div>
        ) : (
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={dateClickHandler}
            selectable={true}
            weekends={false}
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.15rem;
    border: 2px solid var(--primary-500);
    box-shadow: var(--shadow-2);
    margin-top: 20px;
    margin-bottom: 40px;
    background: var(--primary-600);
    h5 {
      color: white;
      margin-bottom: 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .fc .fc-view-harness-active > .fc-view {
    box-shadow: var(--shadow-4);
  }
  .fc .fc-toolbar.fc-header-toolbar {
    margin: 1em 0;
  }
  .fc .fc-toolbar-title {
    font-size: 18px;
    font-weight: 550;
  }
  .fc-theme-standard .fc-scrollgrid {
    border: 1px solid var(--primary-600);
  }
  .fc-theme-standard td,
  .fc-theme-standard th {
    border: 1px solid var(--primary-600);
  }
  .fc-day-today {
    background: var(--primary-200) !important;
    border: none !important;
  }

  .fc .fc-button-primary {
    background-color: var(--primary-700);
    border-color: var(--primary-700);
    color: var(--fc-button-text-color);
  }
  .fc .fc-button-primary:disabled {
    background-color: var(--primary-600);
    border-color: var(--primary-600);
    color: var(--fc-button-text-color);
  }
  .fc .fc-button-primary:hover {
    background-color: var(--primary-700);
    border-color: var(--primary-600);
    color: var(--fc-button-text-color);
  }
  .fc-daygrid-event span {
    font-weight: 600;
  }
  .fc-day-other-month {
    opacity: 0.7;
  }

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .time-img {
      width: 50%;
      transform: scale(-1, 1);
    }
  }

  .ap-data {
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
    width: 500px;
    height: 200px;
  }
  .notes:focus {
    border-color: var(--primary-700);
    outline: none;
  }
`;
export default CalendarPage;
