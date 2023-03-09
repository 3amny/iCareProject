import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const footerLinks = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Appointment",
    url: "/appointment",
  },
  {
    id: 3,
    text: "Clinics",
    url: "/api/clinics",
  },
  {
    id: 4,
    text: "Doctors",
    url: "/api/doctors",
  },

  {
    id: 5,
    text: "About",
    url: "/about",
  },
  {
    id: 6,
    text: "Contact",
    url: "/contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <FaFacebook />,
    label: "facebook",
    url: "https://facebook.com",
  },
  {
    id: 2,
    icon: <FaYoutube />,
    label: "youtube",
    url: "https://youtube.com",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    label: "twitter",
    url: "https://twitter.com",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    label: "instagram",
    url: "https://instagram.com",
  },
];
