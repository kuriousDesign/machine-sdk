export interface ProcessData {
    // THESE PARAMETERS MUST ONLY BE WRITTEN OUTSIDE THIS FB BY method: SendProcessRequest()
    requestId: number; // processId that is being requested
    requestParamArray: number[]; // passable parameter for the RPC Call (MAX_NUM_PARAMS length)
    senderId: number; // use DeviceIds enum

    // THESE PARAMETERS ARE SET INTERNALLY
    activeId: number; // active right now and not already DONE
    activeName: string;
    lastId: number; // last id to be active (it could have ended successfully or with error)
    firstScan: boolean;
    isStepNum: number; // read-only
    stepDescription: string;
    isDone: boolean;
    isError: boolean;
    nextStepNum: number;
    deviceStateThatCalled: number;
    deviceStepThatCalled: number; // the step number that called the process, which determines where the process returns to after completion
    paramArray: number[]; // passable parameter for the RPC Call (MAX_NUM_PARAMS length)
}

export const initialProcessData: ProcessData = {
    requestId: 0,
    requestParamArray: new Array(10).fill(0),
    senderId: 0,
    activeId: 0,
    activeName: '',
    lastId: 0,
    firstScan: false,
    isStepNum: 0,
    stepDescription: '',
    isDone: false,
    isError: false,
    nextStepNum: 0,
    deviceStateThatCalled: 0,
    deviceStepThatCalled: 0,
    paramArray: new Array(10).fill(0)
};
