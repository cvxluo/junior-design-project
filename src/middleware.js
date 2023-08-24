export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/guidelines",
    "/profile",
    "/reports",
    "/newreport",
    "/viewreport",
    "/logout",
  ],
};
