import { FaUserMd } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { MdPhonelink, MdSupportAgent } from "react-icons/md";
export const cardItems = [
  {
    id: 1,
    icon: <MdPhonelink />,
    title: "Access from anywhere",
    description:
      "Access from phone/tablet/PC",
  },
  {
    id: 2,
    icon: <FaUserMd />,
    title: "Choose your specialist",
    description:
      "Choose a specialist according to your issues",
  },
  {
    id: 3,
    icon: <AiFillSchedule />,
    title: "Schedule an appointment",
    description:
      "Schedule an appointment with a doctor of your choice",
  },
  {
    id: 4,
    icon: <MdSupportAgent />,
    title: "Get support",
    description:
      "Get support from the support service",
  },
];
