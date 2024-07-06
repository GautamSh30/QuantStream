import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(() => {
  publicRoutes: ["/api/webhooks(.*)"];
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next|[[...rest]]).*)", // Exclude the catch-all route
    "/",
    "/(api|trpc)(.*)",
  ],
};
