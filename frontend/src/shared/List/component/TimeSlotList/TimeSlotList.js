import React from "react";
import { TimeButton } from "shared/Button";

export const TimeSlotList = ({ timeSlots, onClick }) => {
    
  return (
    <div className="time">
      <div className="time-stack">
        {timeSlots.map((slot, i) => {
          return (
            <TimeButton
              key={i}
              startTime={slot.startTime}
              endTime={slot.endTime}
              onClick={() => onClick(slot.startTime, slot.endTime)}
            />
          );
        })}
      </div>
    </div>
  );
};
