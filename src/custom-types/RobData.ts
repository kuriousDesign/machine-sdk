import { TaskData, RobPositions, TaskId } from "..";

export interface RobData {
  zone: RobZoneData;
  pos: RobPositions;
  dest: RobPositions;
  cartesian: RobPositionData;
  taskReq: TaskId; //incoming task request
  taskData: TaskData;
  recipeOffsets: RobPositionData[];
}

export interface RobPositionData {
  x: number;
  y: number;
  z: number;
  wdeg: number;
  pdeg: number;
  rdeg: number;
}

export interface RobZoneData {
  cncHorzShuttle: boolean;
  waypointShuttle: boolean; //Joint moves, wrist is holding parts upright and at a distance that allows robot to rotate about J1 without fear of collision, basically just moving J1
  dcsNoGo: boolean;
  outsideOfCnc: boolean;
}
