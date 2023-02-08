export const ToggleButton = ({type, onClick, ariaExpanded, ariaControls, className, color}) => {
  return (
    <>
      <button
        type={type}
        aria-controls={ariaControls ? ariaControls : null}
        className={className}
        onClick={onClick}
        aria-expanded={ariaExpanded}
      >
        {ariaExpanded ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars" color={color}></i>
        )}
        <span className="sr-only">Menu</span>
      </button>
    </>
  );
};
