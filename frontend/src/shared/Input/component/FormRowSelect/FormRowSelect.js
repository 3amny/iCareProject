export const FormRowSelect = ({
  name,
  value,
  handleChange,
  labelText,
  readOnly,
  list,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >  <option value="">----Select----</option>
        {list.map((item) => {
          return (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
