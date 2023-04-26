export const FormRowSelect = ({
  name,
  value,
  handleChange,
  labelText,
  readOnly,
  list,
  isRequried,
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
      >
        {isRequried ? <option value="all">---Select---</option> : null}
        {list.map((item, i) => {
          return (
            <option
              key={item._id ? item._id : i}
              value={item._id ? item._id : item}
            >
              {item.name ? item.name : item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
