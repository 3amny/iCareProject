import { FaUserMd, FaCalendarCheck } from "react-icons/fa";

export const adminSideBarLinks = [
  {
    id: 1,
    text: "User",
    url: "/doctor/appointments",
    icon: <FaCalendarCheck />,
  },
  {
    id: 2,
    text: "Clinic",
    url: "/doctor/users",
    icon: <FaUserMd />,
  },
];
