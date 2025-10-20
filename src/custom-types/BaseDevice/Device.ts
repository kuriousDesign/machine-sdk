import { DeviceTypes } from '../Devices/DeviceTypes'
import { initialProcessData, ProcessData } from './Processes';
import { DeviceConstants } from './DeviceConstants';
import { ApiOpcuaData, initialApiOpcuaData } from './ApiOpcua';



export interface DebugLogData {
  msg: string;
  timeStamp: Date;
  id: number;
}

export const initialDebugLogData: DebugLogData = {
  msg: '',
  timeStamp: new Date(),
  id: 0
};


export interface DeviceLogData {
  list: DebugLogData[];
  lastIndex: number; // index of the most recent recorded entries
}

export const initialDeviceLogData: DeviceLogData = {
  list: new Array(DeviceConstants.NUM_LOG_ENTRIES).fill(null),
  lastIndex: 0
};


export interface DeviceRegistration {
  mnemonic: string; // short hand notation for the device, e.g. IB for Bufferwall, IBG for gantry
  id: number; // this device id
  childIdArray: number[]; // array of child device ids
  parentId: number; // this is the parent id
  deviceType: DeviceTypes; // type of the device
};



export const initialDeviceRegistration: DeviceRegistration = {
  mnemonic: '',
  id: 0,
  childIdArray: [],
  parentId: 0,
  deviceType: DeviceTypes.Base // Assuming Unknown exists in DeviceTypes enum
};

export interface DeviceCfg {
  safetyZoneId: number;
  controllableByHmi: boolean;
  autoReset: boolean;
  ignore: boolean;
  //ignore--OutboundAxisInterlocks: AxisInterlockCfgData[];
}

export const initialDeviceCfg: DeviceCfg = {
  safetyZoneId: 0,
  controllableByHmi: false,
  autoReset: false,
  ignore: false
};

export interface FaultData {
  deviceId: number;
  code: number; // this is deprecated
  msg: string;
  autoReset: boolean; // if this is true, the code will be reset by the fault monitor
  resetFlag: boolean; // used by the fault monitor to know whether to clear an fault or not
  logFlag: boolean; // when true, this fault hasn't been logged yet
  timeStamp: Date;
  stepNum: number; // of this device
  parentStepNum: number;
}

export const initialFaultData: FaultData = {
  deviceId: 0,
  code: 0,
  msg: '',
  autoReset: false,
  resetFlag: false,
  logFlag: false,
  timeStamp: new Date(),
  stepNum: 0,
  parentStepNum: 0
};

export interface DeviceFaultData {
  list: FaultData[]; // Array of fault data
  present: boolean; // status
  childrenPresent: boolean; // status that children have errors
}

export const initialDeviceFaultData: DeviceFaultData = {
  list: [],
  present: false,
  childrenPresent: false
};

export interface DeviceStatus {
  state: number; // enum for States enum, same as the boolean states in the data structure
  stepNum: number;
  stepDescription: string;

  colorCode: number; // color to indicate the current status for HMI purposes
  statusMsg: string; // status string

  error: boolean; // state, device or child has an error
  killed: boolean; // device is de-energized
  inactive: boolean; // waiting to be reset
  resetting: boolean; // taking action to be idle
  idle: boolean; // ready for auto tasks
  running: boolean; // performing an active task (excludes tasks that just involve data exchange like recipe changing)
  stopping: boolean;
  paused: boolean; // action paused mid-task, able to be resumed (finish the task) or stopped (abandon task and back to idle or inactive)
  aborting: boolean; // Aborting (Reacting TO E-Stop)
  done: boolean; // finished with task, waiting for parent to drop the request
  manual: boolean;

  idleOrError: boolean; // useful to check for stopping
  iifkm: boolean; // IdleOrInactiveOrFaultedOrKilledOrManual
  rri: boolean; // ResettingOrRunningOrIdle
  ipr: boolean; // IdleOrPausedOrRunning
  kei: boolean; // KilledErrorOrInactive
  runningOrStopping: boolean;

  // Children Status
  allChildrenIdle: boolean;
  allChildrenKilled: boolean;
  allChildrenInactive: boolean;
  allChildrenIdleOrError: boolean;

  commanderId: number; // used for external control

  recordingLogs: boolean;
}

export const initialDeviceStatus: DeviceStatus = {
  state: 0,
  stepNum: 0,
  stepDescription: '',
  colorCode: 0,
  statusMsg: '',
  error: false,
  killed: false,
  inactive: false,
  resetting: false,
  idle: false,
  running: false,
  stopping: false,
  paused: false,
  aborting: false,
  done: false,
  manual: false,
  idleOrError: false,
  iifkm: false,
  rri: false,
  ipr: false,
  kei: false,
  runningOrStopping: false,
  allChildrenIdle: false,
  allChildrenKilled: false,
  allChildrenInactive: false,
  allChildrenIdleOrError: false,
  commanderId: 0,
  recordingLogs: false
};


export interface Device {
  is: DeviceStatus;
  errors: DeviceFaultData;
  warnings: DeviceFaultData;
  registration: DeviceRegistration;
  cfg: DeviceCfg;
  //ignore--instants: DeviceInstants;

  execMethod: ProcessData;
  task: ProcessData;
  process: ProcessData; //read-only
  script: ProcessData; //read-only

  //ignore--instantsmission: ProcessData;
  //ignore--instantssettings: DeviceSettings;
  connectionStatus: boolean;

  //ignore--instantsrequests: Array<DeviceActionRequestData>; //this can be written to outside of the device fb;
  apiOpcua: ApiOpcuaData;
  log: DeviceLogData;
  //ignore--instantsudp: UdpData;
}

export const initialDevice: Device = {
  is: initialDeviceStatus,
  errors: initialDeviceFaultData,
  warnings: initialDeviceFaultData,
  registration: initialDeviceRegistration,
  cfg: initialDeviceCfg,
  connectionStatus: false,
  execMethod: initialProcessData,
  task: initialProcessData,
  process: initialProcessData,
  script: initialProcessData,
  apiOpcua: initialApiOpcuaData,
  log: initialDeviceLogData
};

// TYPE DeviceLogData :
// STRUCT
// 	List: ARRAY[0..DeviceConstants.NUM_LOG_ENTRIES-1] OF DebugLogData;
// 	LastIndex:INT; //index of the most recent recorde entries
// END_STRUCT
// END_TYPE

export interface DeviceLogData {
  list: DebugLogData[];
  lastIndex: number; // index of the most recent recorded entries
}