import { ComponentAnimation } from ".";

export interface UserData {
  activeUser: number;
  hmiLoginBtn: ComponentAnimation;
  hmiLogoutBtn: ComponentAnimation;
}

export interface FaultCodeData {
  deviceId: number;
  code: number;
}

export interface SystemFaultData {
  list: FaultCodeData[];
  present: boolean;
}

// export interface Machine {
//   user: UserData;
//   errors: SystemFaultData;
//   warnings: SystemFaultData;
// }
