import { Priority, TaskId } from "..";

export interface TaskQueue {
  topPriority: Priority;
  taskList: TaskId[];
  taskCnt: number;
  activeTaskIndex: number;
}

export interface TaskData {
  id: number;
  TaskString: string; //like a description
  T: number; // time in seconds to complete task
  TaskType: number; //Pick (state change ignored), Load (state change ignored), Move (state change ignored), Move with Process (state change used), Transform/Process (stage change used)

  StartPositionId: number; //starting position required before this task is allowed
  EndPositionId: number; //ending position after this task is finished
  GateId: number; //robot-cnc door, for example

  StationId: number; //used for transform processes
  PartStatusStart: number[];
  PartStatusEnd: number[];
  PartId: number; //used for pick and load moves

  OffsetUserFrameId: number; //90 Through 99, corresponds to our PRs 90-99 which correspdond to the user frame

  GripperPositionId: number; //0 for left, 1 for right, 2 for both (used for moves in and out of CNC, and to from washer)
  LeftGripperMustBeEmpty: boolean;

  isCurrentlyAllowed: boolean; //set this with logic, do not configure
}
