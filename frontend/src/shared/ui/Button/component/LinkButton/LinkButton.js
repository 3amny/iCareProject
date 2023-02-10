import { Link } from "react-router-dom";
export const LinkButton = ({ url, className, text, type }) => {
  return (
    <Link to={url}>
      <button type={type} className={className}>{text}</button>
    </Link>
  );
};
