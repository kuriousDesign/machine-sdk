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

export interface Machine {
    estopCircuit_OK: boolean;
    estopCircuitDelayed_OK: boolean;
    fenceCircuit_OK: boolean;
    guardDoors_LOCKED: boolean;
    networkHealth_OK: boolean;
    ethercatMaster_OK: boolean;
    ethercatSlaves_OK: boolean;
    supplyAir_OK: boolean;
}