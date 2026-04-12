import { ComponentAnimation, DebugLogData, DeviceRegistration, FaultData, initialDebugLogData, initialFaultData, initialJobData, initialRecipe, initialRecipeStore, initialTaskQueue, JobData, RecipeData, RecipeStore, TaskQueue } from ".";
import { initialPartDataStatus, PartDataStatus } from "./Part";
import { GCs } from "./GlobalConstants";

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

export interface UserData {
  activeUser: number;
  login_REQ: boolean;
  logout_REQ: boolean;
  username: string;
  password: string;
  timeLeftBeforeAutoLogout_MIN: number;
}

export const initialUserData: UserData = {
  activeUser: 0,
  login_REQ: false,
  logout_REQ: false,
  username: "",
  password: "",
  timeLeftBeforeAutoLogout_MIN: 0,
};

export interface FaultCodeData {
  deviceId: number;
  code: number;
}

export const initialFaultCodeData: FaultCodeData = {
  deviceId: 0,
  code: 0,
};

export interface SystemFaultData {
  list: FaultData[];
  present: boolean;
}

export const initialSystemFaultData: SystemFaultData = {
  list: Array(GCs.MACHINE_FAULTCODEARRAY_LEN).fill(null).map(() => ({ ...initialFaultData })),
  present: false,
};


export interface MachineCfg {
  firmwareVersion: string;
  cellType: string;
  softwareMode: string;
  allowAnonymousControl: boolean;
  deviceIsBypassed: boolean[];
  apiOpcuaDeviceId: number;
  ethernetAdapterList: number[];
}

export const initialMachineCfg: MachineCfg = {
  firmwareVersion: "",
  cellType: "",
  softwareMode: "",
  allowAnonymousControl: false,
  deviceIsBypassed: [],
  apiOpcuaDeviceId: -1,
  ethernetAdapterList: [],
};



export interface SettingsExpert {
  overridesEnabled: boolean;
  autoLogoutTime: number; // expert user will be automatically logged-out after this time
  //skipDeburrBottom: boolean; // skip deburr bottom
  //skipDeburrTop: boolean; // skip deburr top
  expertStaysLoggedIn: boolean;
  dryCycle: boolean; // when true, this will run the machine through the cycle without dispensing or curing to allow for testing and setup
}

export const initialSettingsExpert: SettingsExpert = {
  overridesEnabled: false,
  autoLogoutTime: 15, // default to 15 minutes
  //skipDeburrBottom: false,
  //skipDeburrTop: false,
  expertStaysLoggedIn: false,
  dryCycle: false,
};



export interface SettingsAllUsers {
  placeholderBool: boolean;
}
export const initialSettingsAllUsers: SettingsAllUsers = {
  placeholderBool: false,
};

export interface Settings {
  allUsers: SettingsAllUsers;
  expert: SettingsExpert;
}

export const initialSettings: Settings = {
  allUsers: { ...initialSettingsAllUsers },
  expert: { ...initialSettingsExpert },
};

export interface Machine {
    estopCircuit_OK: boolean;
    estopCircuitDelayed_OK: boolean;
    fenceCircuit_OK: boolean;
    guardDoors_LOCKED: boolean;
    networkHealth_OK: boolean;
    ethercatMaster_OK: boolean;
    ethercatSlaves_OK: boolean;
    manualMode: boolean;
    supplyAir_OK: boolean;
    cfg: MachineCfg;
    pdmSts: PartDataStatus;
    errors: SystemFaultData;
    warnings: SystemFaultData;
    taskQueue: TaskQueue;
    registeredDevices: DeviceRegistration[];
    heartbeatPlc: number;
    heartbeatHmi: number;
    machineLog: LogRecordData;
    recipeStore: RecipeStore;
    job: JobData;
    //deviceLogs: DeviceLogData[];  //ARRAY[0..(GCs.NUM_DEVICES-1)] OF DeviceLogData;
    currentTimeMs: number;
    activeUserId: number;
    activeRecipe: RecipeData;
    settings: Settings;
    user: UserData;
}

// TYPE LogRecordData :
// STRUCT
// 	List: ARRAY[0..DiagConstants.NUM_ENTRIES_RECORDED_LOG-1] OF DebugLogData;
// 	LastIndex:USINT; //index of the most recent recorde entries
// END_STRUCT
// END_TYPE

export interface LogRecordData {
  list: DebugLogData[];
  lastIndex: number; // index of the most recent recorded entries
}

export const initialLogRecordData: LogRecordData = {
  list: Array(GCs.NUM_ENTRIES_MACHINE_LOG).fill(null).map(() => ({ ...initialDebugLogData })),
  lastIndex: 0,
};

export const initialMachine: Machine = ({
  estopCircuit_OK: false,
  estopCircuitDelayed_OK: false,
  fenceCircuit_OK: false,
  guardDoors_LOCKED: false,
  networkHealth_OK: false,
  ethercatMaster_OK: false,
  ethercatSlaves_OK: false,
  manualMode: false,
  supplyAir_OK: false,
  cfg: { ...initialMachineCfg },
  pdmSts: initialPartDataStatus,
  errors: { ...initialSystemFaultData },
  warnings: { ...initialSystemFaultData },
  taskQueue: { ...initialTaskQueue },
  registeredDevices: [],
  heartbeatPlc: 0,
  heartbeatHmi: 0,
  machineLog: { ...initialLogRecordData },
  recipeStore: { ...initialRecipeStore },
  job: { ...initialJobData },
  //deviceLogs: Array(GCs.NUM_DEVICES).fill(null).map(() => ({ ...initialDeviceLogData })),
  currentTimeMs: 0,
  activeUserId: 0,
  activeRecipe: { ...initialRecipe},
  settings: { ...initialSettings },
  user: { ...initialUserData },
});
