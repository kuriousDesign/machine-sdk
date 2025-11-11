export enum DeviceId {
  NONE = 0,
  SYS = 1,
  HMI = 2,
  SFTY = 3,
  CON = 4,
  DIAG = 5,
  RC = 6,
  
  ROB = 10,
  ABB = 11,
  EOAT = 12,
  VIS = 13,
  FIX_T = 14,
  FIX_S = 15,
  CLAMP_T = 16,
  CLAMP_S = 17,
  FLSB_T = 18,
  FLSB_S = 19,
  POT = 20,
  STEPR = 21,
	GRIP = 22,
	WEIGH = 23,

  LNR = 41,
  GCNV1 = 42,
  GCNV2 = 43,
  ORCH = 44,
  XFER = 45,
  SWARM1 = 46,
  SWARM2 = 27,
  
  SCARA = 29,
  REOR = 30,
  
  BAM = 31,
  MTAC = 32,
  
  IB = 33,
  STW = 34,
  RG = 35,
  RY = 36,
  RZ = 37,
  BSG = 38,
  BSX = 39,
  BSY = 40,
  BSZ = 41,
  
  IBG = 45,
  IBZ = 46,
  IBX = 47,
  IBZ1 = 48,
  IBZ2 = 49,
  WASH = 50,
  //ROB = 51,
  DBRR = 52,
  CNC = 53,
  RACK = 54,
}

export function deviceIdToString(deviceId: DeviceId | number): string {
  switch (deviceId) {
    case DeviceId.NONE: return "NONE";
    case DeviceId.SYS: return "SYS";
    case DeviceId.HMI: return "HMI";
    case DeviceId.SFTY: return "SFTY";
    case DeviceId.CON: return "CON";
    case DeviceId.DIAG: return "DIAG";
    case DeviceId.RC: return "RC";
    case DeviceId.ROB: return "ROB";
    case DeviceId.ABB: return "ABB";
    case DeviceId.EOAT: return "EOAT";
    case DeviceId.VIS: return "VIS";
    case DeviceId.FIX_T: return "FIX_T";
    case DeviceId.FIX_S: return "FIX_S";
    case DeviceId.CLAMP_T: return "CLAMP_T";
    case DeviceId.CLAMP_S: return "CLAMP_S";
    case DeviceId.FLSB_T: return "FLSB_T";
    case DeviceId.FLSB_S: return "FLSB_S";
    case DeviceId.POT: return "POT";
    case DeviceId.STEPR: return "STEPR";
    case DeviceId.GRIP: return "GRIP";
    case DeviceId.WEIGH: return "WEIGH";
    case DeviceId.LNR: return "LNR";
    case DeviceId.GCNV1: return "GCNV1";
    case DeviceId.GCNV2: return "GCNV2";
    case DeviceId.ORCH: return "ORCH";
    case DeviceId.XFER: return "XFER";
    case DeviceId.SWARM1: return "SWARM1";
    case DeviceId.SWARM2: return "SWARM2";
    case DeviceId.SCARA: return "SCARA";
    case DeviceId.REOR: return "REOR";
    case DeviceId.BAM: return "BAM";
    case DeviceId.MTAC: return "MTAC";

    case DeviceId.IB: return "IB";
    case DeviceId.STW: return "STW";
    case DeviceId.RG: return "RG";
    case DeviceId.RY: return "RY";
    case DeviceId.RZ: return "RZ";
    case DeviceId.BSG: return "BSG";
    case DeviceId.BSX: return "BSX";
    case DeviceId.BSY: return "BSY";
    case DeviceId.BSZ: return "BSZ";
    case DeviceId.IBG: return "IBG";
    case DeviceId.IBZ: return "IBZ";
    case DeviceId.IBX: return "IBX";
    case DeviceId.IBZ1: return "IBZ1";
    case DeviceId.IBZ2: return "IBZ2";
    case DeviceId.WASH: return "WASH";
    case DeviceId.DBRR: return "DBRR";
    case DeviceId.CNC: return "CNC";
    case DeviceId.RACK: return "RACK";
    default: return `UNKNOWN(${deviceId})`;
  }
}
