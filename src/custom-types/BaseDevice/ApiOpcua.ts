import { DeviceActionRequestData, initialDeviceActionRequestData } from "./Actions";

export interface ApiOpcuaReqData {
  id: number; // likely use timestamp ms after epoch
  checkSum: number;
  actionRequestData: DeviceActionRequestData;
  sts: number;
}

export const initialApiOpcuaReqData: ApiOpcuaReqData = {
  id: 0,
  checkSum: 0,
  actionRequestData: initialDeviceActionRequestData,
  sts: 0
};

export interface ApiOpcuaData {
  hmiReq: ApiOpcuaReqData; // read by PLC
  hmiResp: ApiOpcuaReqData; // written by PLC
  orchReq: ApiOpcuaReqData; // read by PLC
  orchResp: ApiOpcuaReqData; // written by PLC
  req: ApiOpcuaReqData; // written by mtac, read by plc
  resp: ApiOpcuaReqData; // written by plc, read by testand
}

export const initialApiOpcuaData: ApiOpcuaData = {
  hmiReq: {} as ApiOpcuaReqData,
  hmiResp: {} as ApiOpcuaReqData,
  orchReq: {} as ApiOpcuaReqData,
  orchResp: {} as ApiOpcuaReqData,
  req: {} as ApiOpcuaReqData,
  resp: {} as ApiOpcuaReqData
};