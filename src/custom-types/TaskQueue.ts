import { DeviceConstants } from "./BaseDevice";

export enum Priorities {
    NONE = 0, // do not remove or change this
    LOAD_PARTS = 2,
    START_UTILITIES = 10,
    PRE_WEIGH_TUBES = 20,
    APPLY_LINER = 30,
    PHOTOGRAPH_TUBES = 40,
    POST_WEIGH_TUBES = 50,
    STOP_UTILITIES = 60,
    UNLOAD_PARTS = 70
}



export interface TaskData {
  targetId: number;
  taskId: number; // specific to the targetId
  paramArray: number[]; // ARRAY[0..DeviceConstants.MAX_NUM_PARAMS-1] OF LREAL;
  state: number; // DeviceStates: 0 (NONE), IDLE, RUNNING, PAUSED, ERROR, DONE
}

export const initialTaskData: TaskData = {
  targetId: 0,
  taskId: 0,
  paramArray: Array(DeviceConstants.MAX_NUM_PARAMS).fill(0),
  state: 0
};  


export interface TaskQueue {
  topPriority: Priorities;
  taskList: TaskData[];
  taskCnt: number;
  activeTaskIndex: number;
}
export const initialTaskQueue: TaskQueue = {
  topPriority: Priorities.NONE,
  taskList: Array(DeviceConstants.MAX_NUM_PARAMS).fill(null).map(() => ({ ...initialTaskData })),
  taskCnt: 0,
  activeTaskIndex: -1
};