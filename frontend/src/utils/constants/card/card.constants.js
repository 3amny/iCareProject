import { FaUserMd } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { MdPhonelink } from "react-icons/md";
import { BiTimer } from "react-icons/bi";
export const cardItems = [
  {
    id: 1,
    icon: <AiFillSchedule />,
    title: "Manage Your Doctor's Schedule",
    description:
      "With iCare, you can easily view and manage your doctor's schedule in real-time. This means you'll always know when your doctor is available, making it easier to book appointments that fit your schedule.",
  },
  {
    id: 2,
    icon: <FaUserMd />,
    title: "Book Appointments Online",
    description:
      "Say goodbye to waiting on hold or in long queues at the doctor's office. With iCare, you can quickly search for available appointments and book them online, all from the comfort of your own home.",
  },
  {
    id: 3,
    icon: <BiTimer />,
    title: "Save Time",
    description:
      " By using iCare, you'll be able to save time on scheduling appointments and managing your healthcare. This means you can spend more time focusing on your health and less time worrying about administrative tasks.",
  },
  {
    id: 4,
    icon: <MdPhonelink />,
    title: "Accessible from Anywhere",
    description:
      "Our platform is accessible from anywhere, at any time. This means you can manage your healthcare on-the-go, whether you're at home, work, or on vacation.",
  },
];
