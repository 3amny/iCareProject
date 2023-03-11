import { UnAuthenticated } from "../error/index.js";

const checkRolePermission = (requestedUser, role) => {
  console.log(requestedUser);
  if (requestedUser.role === role) return;
  throw new UnAuthenticated("Not authorized to access this route");
};
export default checkRolePermission;
