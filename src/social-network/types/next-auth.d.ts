import "next-auth";
import { ProfileInterface } from "../lib/types";

declare module "next-auth" {
  interface Session {
    user: ProfileInterface & DefaultSession["user"];
  }
}
