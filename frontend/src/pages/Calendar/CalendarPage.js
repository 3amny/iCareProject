import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getAvailableTimeSlots,
  setDate,
  setFinalDateValues,
  setIsReady,
  setTimeSlots,
  clearValues,
  createAppointment,
} from "features/Appointment/appointmentSlice";
import { TimeSlotsModal } from "widgets/timeSlotsModal/timeSlotsModal";
import { toast } from "react-toastify";

const CalendarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const {
    timeSlots,
    isLoading,
    date,
    startTime,
    endTime,
    startDate,
    endDate,
    isReady,
    notes,
  } = useSelector((store) => store.appointment);

  const dateClickHandler = (e) => {
    const date = dayjs(e.date).format("YYYY-MM-DD");
    dispatch(getAvailableTimeSlots({ doctorId: id, chosenDate: date }));
    dispatch(setDate({ date }));
    if (isLoading != true && timeSlots != null) {
      setIsOpen(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!date, !startTime, !endTime)) {
      toast.error("Please provide all values ");
    }
    dispatch(
      createAppointment({
        doctorId: id,
        startDate: startDate,
        endDate: endDate,
        notes: notes,
      })
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [isOpen]);

  const handleTimeSet = (startTime, endTime) => {
    dispatch(setTimeSlots({ startTime, endTime }));
  };

  if (date && startTime && endTime && !isReady) {
    const startDateValues = dayjs(`${date}T${startTime}:00`).toISOString();
    const endDateValues = dayjs(`${date}T${endTime}:00`).toISOString();

    dispatch(setFinalDateValues({ startDateValues, endDateValues }));
    dispatch(setIsReady());
  }

  const handleClose = () => {
    setIsOpen(false);
    dispatch(clearValues());
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <h5>Choose date</h5>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={(e) => dateClickHandler(e)}
          selectable={true}
          weekends={false}
        />
        {isOpen && !isLoading ? (
          <TimeSlotsModal
            handleTimeSet={(starTime, endTime) =>
              handleTimeSet(starTime, endTime)
            }
            isReady={isReady}
            handleClose={handleClose}
            timeSlots={timeSlots}
            startDate={startDate}
            endDate={endDate}
            handleSubmit={handleSubmit}
          />
        ) : null}
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
    border: 2px solid var(--primary-600);
    box-shadow: var(--shadow-2);
    h5 {
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
`;
export default CalendarPage;
