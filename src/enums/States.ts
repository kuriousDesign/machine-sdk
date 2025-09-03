export enum VisibilityState {
  Invisible = 0,
  Visible = 1,
  FlashingFast = 2,
  FlashingMed = 3,
  FlashingSlow = 4,
  StrobingFast = 5,
  StrobingSlow = 6,
  GrowingSlow = 7,
};

export enum States {
  ABORTING = -3,
  ERROR = -2,
  KILLED = -1,
  INACTIVE = 0,
  RESETTING = 50,
  IDLE = 100,
  RUNNING = 500,
  STOPPING = 900,
  PAUSED = 999,
  DONE = 1000,
  MANUAL = 1100,
  UNKNOWN = 9999,
};

export function convertStateToString(state: States) {
    switch (state) {
        case States.ABORTING:
            return "ABORTING";
        case States.ERROR:
            return "ERROR";
        case States.KILLED:
            return "KILLED";
        case States.INACTIVE:
            return "INACTIVE";
        case States.RESETTING:
            return "RESETTING";
        case States.IDLE:
            return "IDLE";
        case States.RUNNING:
            return "RUNNING";
        case States.STOPPING:
            return "STOPPING";
        case States.PAUSED:
            return "PAUSED";
        case States.DONE:
            return "DONE";
        case States.MANUAL:
            return "MANUAL";
        case States.UNKNOWN:
            return "UNKNOWN";
        default:
            return "UNKNOWN";
    }
}

export function convertStateToColor(state: States) {

    switch (state) {
        case States.ABORTING:
            return "text-darkred-500";
        case States.ERROR:
            return "text-red-500";
        case States.KILLED:
            return "text-gray-500";
        case States.INACTIVE:
            return "text-white";
        case States.RESETTING:
            return "text-lightblue-500";
        case States.IDLE:
            return "text-blue-500";
        case States.RUNNING:
            return "text-green-500";
        case States.STOPPING:
            return "text-orange-500";
        case States.MANUAL:
            return "text-purple-500";
        case States.UNKNOWN:
            return "text-pink-500";
    }
}

export function getStateFromStep(step:number): States {
    let state = States.UNKNOWN;
    switch (step) {
        case States.ABORTING:
            state = States.ABORTING;
            break;
        case States.ERROR:
            state = States.ERROR;
            break;
        case States.KILLED:
            state = States.KILLED;
            break;
        case States.INACTIVE:
            state = States.INACTIVE;
            break;
        case States.RESETTING:
            state = States.RESETTING;
            break;
        case States.IDLE:
            state = States.IDLE;
            break;
        case States.RUNNING:
            state = States.RUNNING;
            break;
        case States.STOPPING:
            state = States.STOPPING;
            break;
        case States.PAUSED:
            state = States.PAUSED;
            break;
        case States.DONE:
            state = States.DONE;
            break;
        case States.MANUAL:
            state = States.MANUAL;
            break;
        case States.UNKNOWN:
            state = States.UNKNOWN;
            break;
    }

    if(state === States.UNKNOWN){
        if (state >= States.RESETTING && state < States.IDLE) {
            state = States.RESETTING;
        } else if (state > States.IDLE && state < States.STOPPING) {
            state = States.RUNNING;
        } else if (state >= States.STOPPING && state < States.PAUSED) {
            state = States.STOPPING;
        } else if (state >= States.MANUAL && state < States.UNKNOWN) {
            state = States.MANUAL;
        }
    }
    return state;
}

export enum PartState {
  Empty = 0, //no part present
  Raw = 10,
  DeburrBottomStarted = 11,
  DeburrBottomFinished = 12,
  DeburrTopStarted = 15,
  Deburred = 20, //completely deburred, both bottom and top
  MachiningStarted = 45,
  Machined = 50,
  WashStarted = 55,
  Washed = 60,
  DryStarted = 65,
  Dryed = 70,
  Finished = 100,
  Scrapped = 911,
  Error = 999,
}

export enum TaskItemState {
  TaskDone = 48,
  TaskActive = 49,
  TaskFuture = 50,
}

export enum StatusMsg {
  Running = 0,
  Faulted = 2,
}

export enum BannerMode {
  Good = 0,
  Warning = 1,
  Faulted = 2,
}
