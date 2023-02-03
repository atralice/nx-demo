import { Role } from "@prisma/client";

export type AuthCookies = {
  access_token?: string;
};

export type AuthUser = {
  id: string;
  email: string;
  role: Role;
};
