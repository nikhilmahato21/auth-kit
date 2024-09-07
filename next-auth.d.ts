
import { UserRole } from "@prisma/client";
import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      customField: string;
      role?: UserRole ; 
    } & DefaultSession["user"];
  }

  interface User {
    role?: string; 
  }
}
