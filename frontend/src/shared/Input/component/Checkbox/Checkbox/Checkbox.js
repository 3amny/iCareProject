import React from "react";

export const Checkbox = ({ type, checked, readOnly, handleChange, name }) => {
  return (
    <div className="checkbox">
      <p>
        <span>{name}:</span>
      </p>
      <input
        type={type}
        checked={checked}
        onChange={handleChange}
        readOnly={readOnly}
        className={
          type === "checkbox" ? "form-input-checkbox-sm" : "form-input"
        }
      />
    </div>
  );
};
