import { DeviceConstants } from "./DeviceConstants";

export enum ActionTypes {
  MISSION = 0,
  CMD = 1,
  TASK = 2,
  PROCESS = 3,
  EXEC_METHOD = 4,
  SCRIPT = 5,
  COUNT = 6 // Update this value to match the number of action types
}

export function actionTypeToString(actionType: ActionTypes): string {
  switch (actionType) {
    case ActionTypes.MISSION:
      return "MISSION";
    case ActionTypes.CMD:
      return "CMD";
    case ActionTypes.TASK:
      return "TASK";
    case ActionTypes.PROCESS:
      return "PROCESS";
    case ActionTypes.EXEC_METHOD:
      return "EXEC_METHOD";
    case ActionTypes.SCRIPT:
      return "SCRIPT";
    default:
      return "UNKNOWN";
  }
}

export interface DeviceActionRequestData {
  SenderId: number;
  ActionType: number; // ActionTypes enum
  ActionId: number; // could be cmd, task or processId
  ParamArray: number[]; // Array of LREAL values
};

export const initialDeviceActionRequestData: DeviceActionRequestData = {
  SenderId: 0,
  ActionType: 0,
  ActionId: 0,
  ParamArray: new Array(DeviceConstants.MAX_NUM_PARAMS).fill(0)
};