import { DeviceId } from "./DeviceId";

export const ErrorsMap: {
  [key in DeviceId]: {
    [key: number]: string;
  };
} = {
  [DeviceId.SFTY]: {
    0: "NoError",
    1: "EstopDumpValveCh1Off",
    2: "EstopDumpValveCh2Off",
    3: "EstopDumpValveCh1On",
    4: "EstopDumpValveCh2On",
    5: "FenceDumpValveCh1Off",
    6: "FenceDumpValveCh2Off",
    7: "FenceDumpValveCh1On",
    8: "FenceDumpValveCh2On",
  },
  [DeviceId.CNC]: {},
  [DeviceId.CON]: {},
  [DeviceId.DBRR]: {},
  [DeviceId.ROB]: {
    0: "NoError",
    1: "ControllerFault",
    2: "RobotStartedWrongTask",
  },
  [DeviceId.SYS]: {},
  [DeviceId.WASH]: {},
  [DeviceId.RACK]: {},
};
