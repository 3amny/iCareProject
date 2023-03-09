export const Logo = ({fillColor}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 66.1 29.2"
      version="1.1"
      viewBox="0 0 66.1 29.2"
      xmlSpace="preserve"
    >
      <text
        fill={fillColor? fillColor : '#1D4ED8'}
        fontFamily="Brush Script MT"
        fontSize="32"
        transform="matrix(1.0088 0 0 1 .001 23.625)"
      >
        iCare
      </text>
    </svg>
  );
};
