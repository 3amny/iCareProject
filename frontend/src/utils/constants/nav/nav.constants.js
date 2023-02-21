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
    iClassOpen: "fa-solid fa-caret-down dropdown-icon",
    iClassClose: "fa-solid fa-caret-up dropdown-icon",
    submenu: [
      {
        id: 5,
        text: "Appointment",
        url: "/appointment",
      },
      {
        id: 6,
        text: "Clinics",
        url: "/api/clinics",
      },
      {
        id: 7,
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
  {
    id: 4,
    text: "Contact",
    url: "/contact",
  }
];
