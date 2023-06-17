export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/messages",
    "/messages/:path*",
    "/notes",
    "/saved",
    "/profile/:path*",
    "/help",
  ],
};
