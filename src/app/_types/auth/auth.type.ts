// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Session } from "next-auth";

declare module "next-auth" {
  interface User {
    sessionToken: string;
  }
  interface Session {
    sessionToken: string;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    sessionToken: string;
    expiresAt: number;
  }
}
