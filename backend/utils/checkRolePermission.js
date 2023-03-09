import { UnAuthenticated } from "../error/index.js";

const checkRolePermission = (requestUser, role) => {
  console.log(requestUser.role);
  if (requestUser.role === role) return;
  throw new UnAuthenticated("Not authorized to access this route");
};
export default checkRolePermission;
