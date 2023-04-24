import React from "react";

export const Textarea = ({ name, onChange, className, value}) => {
  return (
    <textarea
      className={className}
      minLength={20}
      maxLength={300}
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  );
};
