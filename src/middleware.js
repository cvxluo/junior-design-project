export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/Dashboard/Index",
    "/Dashboard/Guidelines",
    "/Dashboard/Profile",
    "/Dashboard/Reports",
    "/Dashboard/NewReport",
    "/Dashboard/ViewReport",
  ],
};
