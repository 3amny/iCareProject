import { BadRequest } from "../error/index.js";

const getModel = async (subject) => {
  if (subject === "doctors") {
    return "Doctor";
  } else if (subject === "clinics") {
    return "Clinic";
  }
  throw new BadRequest("The model does not exist");
};

export default getModel;
