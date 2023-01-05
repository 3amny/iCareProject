const createAppointment = async (req, res) => {
  res.send("create appointment");
};
const getAllAppointments = async (req, res) => {
  res.send("get all appointments");
};
const updateAppointment = async (req, res) => {
  res.send("update appointment");
};
const deleteAppointment = async (req, res) => {
  res.send("delete appointment");
};
const showDetails = async (req, res) => {
  res.send("show appointment");
};

export {
  createAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
  showDetails,
};
