import { FaUserMd, FaCalendarCheck } from "react-icons/fa";

export const doctorSideBarLinks = [
  {
    id: 1,
    text: "Appointments",
    url: "/doctor",
    icon: <FaCalendarCheck />,
  },
  {
    id: 2,
    text: "Account details",
    url: "/doctor/account/details",
    icon: <FaUserMd />,
  },
];
