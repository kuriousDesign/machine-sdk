import { RobPositionData } from "./Devices/Robot";


export interface ShelfPartPositionData {
  index: number;
  colNum: number;
  posLetter: number;
  offest: RobPositionData;
}

export interface RackShelfData {
  nextPart: ShelfPartPositionData;
  lastPart: ShelfPartPositionData;
  isEmpty: boolean;
  isFull: boolean;
  isEditMode: boolean;
}

export interface RackData {
  raw: RackShelfData;
  done: RackShelfData;
}
