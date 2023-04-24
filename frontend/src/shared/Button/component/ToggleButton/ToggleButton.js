import { HiXMark } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
export const ToggleButton = ({ type, onClick, isOpened, className }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {isOpened ? (
          <HiXMark className="nav-close" size={20} />
        ) : (
          <RxHamburgerMenu className="nav-open" size={20} />
        )}
      </button>
    </>
  );
};
