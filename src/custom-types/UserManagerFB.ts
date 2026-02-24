import { ComponentAnimation } from "./HMI";

export interface UserManagerFB {
  loginBtn: ComponentAnimation;
  logoutBtn: ComponentAnimation;
  username: string;
  password: string;
}

export enum Users {
  OPERATOR = 0,
  EXPERT = 1,
}

export function userIdToString(userId: number): string {
  switch (userId) {
    case Users.OPERATOR:
      return "Operator";
    case Users.EXPERT:
      return "Expert";
    default:
      return "Unknown";
  }
}