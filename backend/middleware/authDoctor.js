import { UnAuthenticated } from "../error/index.js";
import jwt from "jsonwebtoken";
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticated("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  console.log(authHeader);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.doctor = { doctorId: payload.doctorId, role: payload.role, isVerified: payload.isVerified };
    next();
  } catch (error) {
    throw new UnAuthenticated("Authentication Invalid");
  }
};
export default auth;
