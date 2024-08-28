import NextAuth from "next-auth";
import authConfig from "./auth.config"
 

const{auth}=NextAuth(authConfig)
export default auth((req) => {
    const isLoggedIn = !!req.auth;
  console.log("Route:",req.nextUrl.pathname)
  console.log("Is LoggedIn :",isLoggedIn)
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
      ],
}