export interface DeviceCfg {
  mnemonic: string; //short hand notation for the device, e.g. ROB for Robot
  id: number; //calculation using ChildId and Parent Id, where Id = (100*ParentId + LocalId)
  childId: number;
  parentId: number;
}

export interface DeviceFaultData {
  list: number[];
  present: boolean; //status
}

export interface DeviceInputs {
  instantKill_ON: boolean
}

export interface DeviceParentCmds {
  reset: boolean;
  stop: boolean;
  clearFlts: boolean;
  start: boolean;
  abort: boolean;
  kill: boolean;
}

export interface DeviceStatus {
  state: number;
  //Faulted: BOOL;
  //HasWarnings: BOOL;
  stepNum: number;
  colorCode: number; //color to indicate the current status
}

export interface Device {
  cfg: DeviceCfg;
  is: DeviceStatus;
  cmds: DeviceParentCmds;
  errors: DeviceFaultData;
  warnings: DeviceFaultData;
  i: DeviceInputs;
}