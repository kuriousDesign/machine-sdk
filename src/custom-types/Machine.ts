import { ComponentAnimation, DeviceConstants, DeviceRegistration, GCs, initialDeviceRegistration, initialTaskQueue, TaskQueue } from ".";
import { PartData } from "./Part";


export interface UserData {
  activeUser: number;
  hmiLoginBtn: ComponentAnimation;
  hmiLogoutBtn: ComponentAnimation;
}

export interface FaultCodeData {
  deviceId: number;
  code: number;
}

export const initialFaultCodeData: FaultCodeData = {
  deviceId: 0,
  code: 0,
};

export interface SystemFaultData {
  list: FaultCodeData[];
  present: boolean;
}

export const initialSystemFaultData: SystemFaultData = {
  list: Array(DeviceConstants.DEVICE_FAULTCODEARRAY_LEN).fill(null).map(() => ({ ...initialFaultCodeData })),
  present: false,
};



// TYPE MachineCfg :
// STRUCT
// 	FirmwareVersion: STRING;
// 	CellType: CellTypes;
// 	SoftwareMode: SoftwareModes;
// 	AllowAnonymousControl: BOOL;
// 	DeviceIsBypassed: ARRAY[0..(GCs.NUM_DEVICES-1)] OF BOOL; //used to set devices to be bypassed or not
// 	ApiOpcuaDeviceId:INT; //designates which device is using the opcua api
// 	EthernetAdapterList: ARRAY[0..4] OF INT;
// 	//SerialNumber: STRING(255); moved to ControllerInstanceData
// 	//Name: STRING; moved to ControllerInstanceData
// 	//Location: STRING; moved to ControllerInstanceData
	
// END_STRUCT
// END_TYPE


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

export interface Machine {
    estopCircuit_OK: boolean;
    estopCircuitDelayed_OK: boolean;
    fenceCircuit_OK: boolean;
    guardDoors_LOCKED: boolean;
    networkHealth_OK: boolean;
    ethercatMaster_OK: boolean;
    ethercatSlaves_OK: boolean;
    supplyAir_OK: boolean;
    cfg: MachineCfg;
    parts: PartData[];
    errors: SystemFaultData;
    warnings: SystemFaultData;
    taskQueue: TaskQueue;
    registeredDevices: DeviceRegistration[];
}

export const initialMachine: Machine = ({
  estopCircuit_OK: false,
  estopCircuitDelayed_OK: false,
  fenceCircuit_OK: false,
  guardDoors_LOCKED: false,
  networkHealth_OK: false,
  ethercatMaster_OK: false,
  ethercatSlaves_OK: false,
  supplyAir_OK: false,
  cfg: { ...initialMachineCfg },
  parts: [],
  errors: { ...initialSystemFaultData },
  warnings: { ...initialSystemFaultData },
  taskQueue: { ...initialTaskQueue },
  registeredDevices: [],

});
