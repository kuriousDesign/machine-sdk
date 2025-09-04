import { DeviceActionRequestData, initialDeviceActionRequestData } from "./Actions";

export interface ApiOpcuaReqData {
  id: number; // likely use timestamp ms after epoch
  checkSum: number;
  ActionRequestData: DeviceActionRequestData;
  Sts: number;
}

export const initialApiOpcuaReqData: ApiOpcuaReqData = {
  id: 0,
  checkSum: 0,
  ActionRequestData: initialDeviceActionRequestData,
  Sts: 0
};

export interface ApiOpcuaData {
  HmiReq: ApiOpcuaReqData; // read by PLC
  HmiResp: ApiOpcuaReqData; // written by PLC
  OrchReq: ApiOpcuaReqData; // read by PLC
  OrchResp: ApiOpcuaReqData; // written by PLC
  Req: ApiOpcuaReqData; // written by mtac, read by plc
  Resp: ApiOpcuaReqData; // written by plc, read by testand
}

export const initialApiOpcuaData: ApiOpcuaData = {
  HmiReq: {} as ApiOpcuaReqData,
  HmiResp: {} as ApiOpcuaReqData,
  OrchReq: {} as ApiOpcuaReqData,
  OrchResp: {} as ApiOpcuaReqData,
  Req: {} as ApiOpcuaReqData,
  Resp: {} as ApiOpcuaReqData
};