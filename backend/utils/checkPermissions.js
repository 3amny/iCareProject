import { UnAuthenticated } from "../error/index.js";

const checkPermissions = (requestUser, resourceUserId, roles) => {
  if (requestUser.userId === resourceUserId.toString()) return;
  if (roles) {
    if (roles.includes(requestUser.role)) return;
  } else {
    if (requestUser.role === "642509136383af1ca69c2e99") return;
  }

  throw new UnAuthenticated("Not authorized to access this route");
};

export default checkPermissions;
