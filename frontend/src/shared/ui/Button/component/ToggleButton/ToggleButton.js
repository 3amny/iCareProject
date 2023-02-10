export const ToggleButton = ({type, onClick, isOpened, className, color}) => {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClick}
      >
        {isOpened ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars" color={color}></i>
        )}
        <span className="sr-only">Menu</span>
      </button>
    </>
  );
};
