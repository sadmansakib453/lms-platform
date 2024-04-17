// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({});

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };


import { authMiddleware } from "@clerk/nextjs";

// Define auth middleware with custom configuration
export const customAuthMiddleware = authMiddleware({
  publicRoutes: ["/api/uploadthing"], // Allow access to uploadthing API routes without authentication
});

// Export the custom auth middleware
export default customAuthMiddleware;

// Define additional configuration for middleware
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
