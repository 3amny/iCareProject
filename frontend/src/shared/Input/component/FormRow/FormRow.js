export const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  readOnly,
  checked
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        checked={checked}
        name={name}
        onChange={handleChange}
        readOnly={readOnly}
        className={type === "checkbox" ? "form-input-checkbox" : "form-input"}
        placeholder={placeholder ? placeholder : null}
      />
    </div>
  );
};
