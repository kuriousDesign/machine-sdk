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
    errors: 'Errors',
    warnings: 'Warnings',
    estopCircuitDelayed_OK: 'EstopCircuitDelayed_OK',
    fenceCircuit_OK: 'FenceCircuit_OK',
    guardDoors_LOCKED: 'GuardDoors_LOCKED',
    manualMode: 'ManualMode',
	
	// Network Manager
	networkHealth_OK: 'NetworkHealth_OK',
	ethercatMaster_OK: 'EthercatMaster_OK',
	ethercatSlaves_OK: 'EthercatSlaves_OK',
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