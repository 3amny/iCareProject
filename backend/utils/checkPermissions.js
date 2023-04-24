import { UnAuthenticated } from "../error/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;
  // 642509136383af1ca69c2e99 admin role id
  else if (requestUser.role === "642509136383af1ca69c2e99") return;
  else {
    throw new UnAuthenticated("Not authorized to access this route");
  }
};

export default checkPermissions;
