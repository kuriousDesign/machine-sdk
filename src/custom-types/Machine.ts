import { ComponentAnimation } from ".";
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

export interface SystemFaultData {
  list: FaultCodeData[];
  present: boolean;
}


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
    //taskList: MachineTask[];
}