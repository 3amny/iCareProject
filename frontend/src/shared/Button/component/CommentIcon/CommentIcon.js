export const CommentIcon = ({
  color,
  Icon,
  isActive,
  children,
  size,
  onClick,
  ...props
}) => {
  return (
    <>
      <button
        className={`btn-i icon-btn ${isActive ? "icon-btn-active" : ""} ${
          color || ""
        }`}
        onClick={onClick}
        {...props}
      >
        <span className={`${children != null ? "mr-1" : ""}`}>
          <Icon size="15px" />
        </span>
        {children}
      </button>
    </>
  );
};
