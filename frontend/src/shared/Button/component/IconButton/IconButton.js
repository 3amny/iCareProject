export const IconButton = ({
  type,
  onClick,
  ariaControls,
  className,
  color,
  icon,
}) => {
  return (
    <>
      <button
        type={type}
        aria-controls={ariaControls ? ariaControls : null}
        className={className}
        onClick={onClick}
      >
        {icon}
      </button>
    </>
  );
};
