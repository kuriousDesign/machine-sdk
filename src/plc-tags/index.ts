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
    HeartbeatHMI: 'HeartbeatHMI'
}

export const DeviceTags = {
    Cfg: 'Cfg',
    Is: 'Is',
    Errors: 'Errors',
    Warnings: 'Warnings',
    Log: 'Log',
    //ConnectionStatus: 'ConnectionStatus',
    ExecMethod: 'ExecMethod',
    Task: 'Task',
    Process: 'Process',
    Script: 'Script',
    Registration: 'Registration',
    ApiOpcuaHmiReq: 'ApiOpcua/HmiReq',
    ApiOpcuaHmiResp: 'ApiOpcua/HmiResp',
}

export * from "./opcua";
export * from "./mqtt";