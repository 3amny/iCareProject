export const IconButton = ({
  type,
  onClick,
  ariaControls,
  className,
  color,
  iconClassName,
}) => {
  return (
    <>
      <button
        type={type}
        aria-controls={ariaControls ? ariaControls : null}
        className={className}
        onClick={onClick}
      >
        <i className={iconClassName} color={color}></i>
        <span className="sr-only">Menu</span>
      </button>
    </>
  );
};
