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

export enum ApiReqRespStates {
  INACTIVE = 0,
  REQUEST_READY = 1,
  REJECTED_INVALID_CHECKSUM = 2,
  REJECTED_ACTION_NOT_ACCEPTED = 3,
  REJECTED_INVALID_SENDERID = 4,
  ACCEPTED = 1000
}

export function apiReqRespStateToString(state: ApiReqRespStates): string {
  switch (state) {
    case ApiReqRespStates.INACTIVE:
      return "INACTIVE";
    case ApiReqRespStates.REQUEST_READY:
      return "REQUEST_READY";
    case ApiReqRespStates.REJECTED_INVALID_CHECKSUM:
      return "REJECTED_INVALID_CHECKSUM";
    case ApiReqRespStates.REJECTED_ACTION_NOT_ACCEPTED:
      return "REJECTED_ACTION_NOT_ACCEPTED";
    case ApiReqRespStates.REJECTED_INVALID_SENDERID:
      return "REJECTED_INVALID_SENDERID";
    case ApiReqRespStates.ACCEPTED:
      return "ACCEPTED";
    default:
      return "UNKNOWN";
  }
}
