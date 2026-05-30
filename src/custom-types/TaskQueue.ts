import { DeviceConstants } from "./BaseDevice";


// TYPE Priorities :
// (
// 	NONE := 0, //do not remove or change this
// 	RECOVER_ROBOT :=1,
// 	CALIBRATE_GRIPPER:=2,
// 	ACTIVATE_RECIPE:=3,
// 	PERFORM_CHANGEOVER:=4,
// 	CALIBRATE_SQUEEGEE:=5,
// 	ENTER_JOB_DATA:=6,
// 	LOAD_RAW_TUBES:=10,
// 	ENTER_BATCH_DATA:=11,
// 	START_POT_PRESSURIZATION:=15,
// 	PRIME_APPLICATOR:=17,
// 	PRE_WEIGH_TUBES:=20,
// 	APPLY_LINER :=30,
// 	BRUSH_LINER := 35,
// 	START_POT_DEPRESSURIZATION:=39,
// 	PHOTOGRAPH_TUBES :=40,
// 	POST_WEIGH_TUBES:=50,
// 	PREP_FOR_UNLOAD:=60,
// 	REVIEW_VIDEOS:=70,
// 	SAVE_BATCH_DATA:=80,
// 	UNLOAD_PARTS:=85,
// 	DONE:=1000
// );
// END_TYPE
export enum Priorities {
    NONE = 0, // do not remove or change this
    RECOVER_ROBOT = 1,
    CALIBRATE_GRIPPER = 2,
    ACTIVATE_RECIPE = 3,
    PERFORM_CHANGEOVER = 4,
    CALIBRATE_SQUEEGEE = 5,
    ENTER_JOB_DATA = 6,
    LOAD_RAW_TUBES = 10,
    ENTER_BATCH_DATA = 11,
    START_POT_PRESSURIZATION = 15,
    PRIME_APPLICATOR = 17,
    PRE_WEIGH_TUBES = 20,
    APPLY_LINER = 30,
    BRUSH_LINER = 35,
    PHOTOGRAPH_TUBES = 40,
    POST_WEIGH_TUBES = 50,
    PREP_FOR_UNLOAD = 60,
    REVIEW_VIDEOS = 70,
    SAVE_BATCH_DATA = 80,
    UNLOAD_PARTS = 85,
    DONE = 1000
}

export function priorityToString(priority: Priorities): string {
    switch (priority) {
        case Priorities.NONE:
            return "None";
        case Priorities.RECOVER_ROBOT:
            return "Recover Robot";
        case Priorities.CALIBRATE_GRIPPER:
            return "Calibrate Gripper";
        case Priorities.ACTIVATE_RECIPE:
            return "Activate Recipe";
        case Priorities.PERFORM_CHANGEOVER:
            return "Perform Changeover";
        case Priorities.CALIBRATE_SQUEEGEE:
            return "Calibrate Squeegee";
        case Priorities.ENTER_JOB_DATA:
            return "Edit Job Data";
        case Priorities.LOAD_RAW_TUBES:
            return "Load Raw Tubes";
        case Priorities.ENTER_BATCH_DATA:
            return "Enter Batch Data";
        case Priorities.START_POT_PRESSURIZATION:
            return "Start Pot Pressurization";
        case Priorities.PRIME_APPLICATOR:
            return "Prime Applicator";
        case Priorities.PRE_WEIGH_TUBES:
            return "Pre Weigh Tubes";
        case Priorities.APPLY_LINER:
            return "Apply Liner";
        case Priorities.BRUSH_LINER:
            return "Brush Liner";
        case Priorities.PHOTOGRAPH_TUBES:
            return "Photograph Tubes";
        case Priorities.POST_WEIGH_TUBES:
            return "Post Weigh Tubes";
        case Priorities.PREP_FOR_UNLOAD:
            return "Prep For Unload";
        case Priorities.REVIEW_VIDEOS:
            return "Review Videos";
        case Priorities.SAVE_BATCH_DATA:
            return "Save Batch Data";
        case Priorities.UNLOAD_PARTS:
            return "Unload Parts";
        case Priorities.DONE:
            return "Done";
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