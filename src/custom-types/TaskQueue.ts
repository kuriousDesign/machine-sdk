import { DeviceConstants } from "./BaseDevice";


// TYPE Priorities :
// (
// 	NONE := 0, //do not remove or change this
// 	RECOVER_ROBOT :=1,
// 	LOAD_PARTS:=2,
// 	START_POT_PRESSURIZATION:=10, //param0: explain what the parameters do here, param1: continue to explain each of them
// 	PRE_WEIGH_TUBES:=20, //no params:
// 	APPLY_LINER :=30,
// 	PHOTOGRAPH_TUBES :=40,
// 	POST_WEIGH_TUBES:=50,
// 	START_POT_DEPRESSURIZATION:=60,
// 	WAIT_IMAGE_INSPECTION:=70,
// 	UNLOAD_PARTS:=80
// );
// END_TYPE
export enum Priorities {
    NONE = 0, // do not remove or change this
    LOAD_PARTS = 2,
    START_POT_PRESSURIZATION = 10,
    PRE_WEIGH_TUBES = 20,
    APPLY_LINER = 30,
    PHOTOGRAPH_TUBES = 40,
    POST_WEIGH_TUBES = 50,
    START_POT_DEPRESSURIZATION = 60,
    WAIT_IMAGE_INSPECTION = 70,
    UNLOAD_PARTS = 80
}

export function priorityToString(priority: Priorities): string {
    switch (priority) {
        case Priorities.NONE:
            return "None";
        case Priorities.LOAD_PARTS:
            return "Load Parts";
        case Priorities.START_POT_PRESSURIZATION:
            return "Start Pot Pressurization";
        case Priorities.PRE_WEIGH_TUBES:
            return "Pre Weigh Tubes";
        case Priorities.APPLY_LINER:
            return "Apply Liner";
        case Priorities.PHOTOGRAPH_TUBES:
            return "Photograph Tubes";
        case Priorities.POST_WEIGH_TUBES:
            return "Post Weigh Tubes";
        case Priorities.START_POT_DEPRESSURIZATION:
            return "Start Pot Depressurization";
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