export interface ProcessData {
    // THESE PARAMETERS MUST ONLY BE WRITTEN OUTSIDE THIS FB BY method: SendProcessRequest()
    RequestId: number; // processId that is being requested
    RequestParamArray: number[]; // passable parameter for the RPC Call (MAX_NUM_PARAMS length)
    SenderId: number; // use DeviceIds enum
    
    // THESE PARAMETERS ARE SET INTERNALLY
    ActiveId: number; // active right now and not already DONE
    ActiveName: string;
    LastId: number; // last id to be active (it could have ended successfully or with error)
    firstScan: boolean;
    isStepNum: number; // read-only
    StepDescription: string;
    isDone: boolean;
    isError: boolean;
    NextStepNum: number;
    DeviceStateThatCalled: number;
    DeviceStepThatCalled: number; // the step number that called the process, which determines where the process returns to after completion
    ParamArray: number[]; // passable parameter for the RPC Call (MAX_NUM_PARAMS length)
}

export const initialProcessData: ProcessData = {
    RequestId: 0,
    RequestParamArray: new Array(10).fill(0),
    SenderId: 0,
    ActiveId: 0,
    ActiveName: '',
    LastId: 0,
    firstScan: false,
    isStepNum: 0,
    StepDescription: '',
    isDone: false,
    isError: false,
    NextStepNum: 0,
    DeviceStateThatCalled: 0,
    DeviceStepThatCalled: 0,
    ParamArray: new Array(10).fill(0)
};
