import {
  FaHospital,
  FaUserAlt,
  FaUserMd,
  FaCalendarCheck,
  FaCommentAlt,
} from "react-icons/fa";
export const adminSideBarLinks = [
  {
    id: 1,
    text: "User",
    url: "/admin/users",
    icon: <FaUserAlt />,
  },
  {
    id: 2,
    text: "Clinic",
    url: "/admin//clinic",
    icon: <FaHospital />,
  },
  {
    id: 3,
    text: "Doctor",
    url: "/admin//doctor",
    icon: <FaUserMd />,
  },
  {
    id: 4,
    text: "Appointment",
    url: "/admin//appointment",
    icon: <FaCalendarCheck />,
  },
  {
    id: 5,
    text: "Messages",
    url: "/admin//message",
    icon: <FaCommentAlt />,
  },
];
