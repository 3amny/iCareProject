export const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  readOnly,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        readOnly={readOnly}
        className="form-input"
        placeholder={placeholder ? placeholder : null}
      />
    </div>
  );
};
