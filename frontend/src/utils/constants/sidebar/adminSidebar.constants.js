import {
  FaHospital,
  FaUserAlt,
  FaUserMd,
  FaHospitalUser,
  FaUserFriends,
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
    url: "/admin/clinics",
    icon: <FaHospital />,
  },
  {
    id: 3,
    text: "Doctor",
    url: "/admin/doctors",
    icon: <FaUserMd />,
  },
  {
    id: 5,
    text: "Roles",
    url: "/admin/roles",
    icon: <FaUserFriends />,
  },
  {
    id: 6,
    text: "Specialties",
    url: "/admin/specialties",
    icon: <FaHospitalUser />,
  },
];
