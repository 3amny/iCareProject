export const addUserToLocalStorage = (user, token, role) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
};
export const addDoctorToLocalStorage = (doctor, token, role) => {
  localStorage.setItem("doctor", JSON.stringify(doctor));
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const getTokenFromLocalStorage = () => {
  const result = localStorage.getItem("token");
  const token = result ? result : null;
  return token;
};
export const getRoleFromLocalStorage = () => {
  const result = localStorage.getItem("role");
  const role = result ? result : null;
  return role;
};
export const getDoctorFromLocalStorage = () => {
  const result = localStorage.getItem("doctor");
  const doctor = result ? JSON.parse(result) : null;
  return doctor;
};
export const removeDoctorFromLocalStorage = () => {
  localStorage.removeItem("doctor");
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};
