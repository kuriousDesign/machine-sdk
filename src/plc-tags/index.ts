export const PlcNamespaces = {
    Machine: 'Machine',
    MachineHw: 'MachineHw',
    Main: 'Main'
}

export const MachineTags = {
    deviceStore: 'Devices',
    //deviceTypeStore: 'DeviceTypes',
    registeredDevices: 'RegisteredDevices',
    axisStsArray: 'AxisStsArray',
    HeartbeatPLC: 'HeartbeatPLC',
    HeartbeatHMI: 'HeartbeatHMI',
    parts: 'Parts',
    taskQueue: 'TaskQueue',
    //deviceLogs: 'DeviceLogs',
    machineLog: 'MachineLog',
    deviceLogs: 'DeviceLogs',
    recipeStore: 'RecipeStore',
}

export const DeviceTags = {
    Cfg: 'Cfg',
    Is: 'Is',
    Errors: 'Errors',
    Warnings: 'Warnings',
    ExecMethod: 'ExecMethod',
    Task: 'Task',
    Process: 'Process',
    Script: 'Script',
    Registration: 'Registration',
    ApiOpcuaHmiReq: 'ApiOpcua.HmiReq',
    ApiOpcuaHmiResp: 'ApiOpcua.HmiResp',
    ApiOpcuaPlcReq: 'ApiOpcua.InternalReq',
    ApiOpcuaPlcResp: 'ApiOpcua.InternalResp',
}

export * from "./opcua";
export * from "./mqtt";