import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
export const navLinks = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Service",
    url: "/service",
    iOpen: <AiOutlineCaretDown className="dropdown-icon" />,
    iClose: <AiOutlineCaretUp className="dropdown-icon" />,
    submenu: [
      {
        id: 5,
        text: "Clinics",
        url: "/api/clinics",
      },
      {
        id: 6,
        text: "Doctors",
        url: "/api/doctors",
      },
    ],
  },
  {
    id: 3,
    text: "About",
    url: "/about",
  },
];
