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

export function priorityToString(priority: Priorities): string {
    switch (priority) {
        case Priorities.NONE:
            return "None";
        case Priorities.LOAD_PARTS:
            return "Load Parts";
        case Priorities.START_UTILITIES:
            return "Start Utilities";
        case Priorities.PRE_WEIGH_TUBES:
            return "Pre Weigh Tubes";
        case Priorities.APPLY_LINER:
            return "Apply Liner";
        case Priorities.PHOTOGRAPH_TUBES:
            return "Photograph Tubes";
        case Priorities.POST_WEIGH_TUBES:
            return "Post Weigh Tubes";
        case Priorities.STOP_UTILITIES:
            return "Stop Utilities";
        case Priorities.UNLOAD_PARTS:
            return "Unload Parts";
        default:
            return "Unknown";
    }
}

export interface TaskData {
  description:string;
  targetId: number;
  taskId: number; // specific to the targetId
  paramArray: number[]; // ARRAY[0..DeviceConstants.MAX_NUM_PARAMS-1] OF LREAL;
  state: number; // DeviceStates: 0 (NONE), IDLE, RUNNING, PAUSED, ERROR, DONE
}

export const initialTaskData: TaskData = {
  description: "",
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