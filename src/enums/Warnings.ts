import { DeviceId } from "./DeviceId";

export const WarningsMap: {
  [key in DeviceId]: {
    [key: number]: string;
  };
} = {
  [DeviceId.SYS]: {
    //refer to SysWarnings enum in CoDeSys for mapping
  },
  [DeviceId.RACK]: {
    //refer to RackWarnings enum in CoDeSys for mapping
  },
  [DeviceId.CNC]: {},
  [DeviceId.CON]: {},
  [DeviceId.DBRR]: {},
  [DeviceId.ROB]: {},
  [DeviceId.SFTY]: {},
  [DeviceId.WASH]: {},
};
