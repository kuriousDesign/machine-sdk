import { DeviceRegistration } from "../custom-types";

export const PlcNamespaces = {
    Machine: 'Machine',
    //MachineHw: 'MachineHw',
    //Main: 'Main'
}

// these data tags are consistent machine to machine, and should only be read by the bridge during initial bootstrap, not included in the ongoing polling surface
export const BaseMachineBootstrapTags = {
    cfg: 'Cfg',
    registeredDevices: 'RegisteredDevices',
}

// these data tags are consistent machine to machine, and should be included in the ongoing polling/monitoring surface
export const BaseMachinePollingTags = {
    heartbeatPLC: 'HeartbeatPLC',
    heartbeatHMI: 'HeartbeatHMI',
    machineLog: 'MachineLog',
    //deviceLogs: 'DeviceLogs',

    errors: 'Errors',
    warnings: 'Warnings',
    estopCircuit_OK: 'EstopCircuit_OK',
    estopCircuitDelayed_OK: 'EstopCircuitDelayed_OK',
    fenceCircuit_OK: 'FenceCircuit_OK',
    guardDoors_LOCKED: 'GuardDoors_LOCKED',
    manualMode: 'ManualMode',
	
	// Network Manager
	networkHealth_OK: 'NetworkHealth_OK',
	ethercatMaster_OK: 'EthercatMaster_OK',
	ethercatSlaves_OK: 'EthercatSlaves_OK',
    currentTimeMs: 'CurrentTimeMs',
    settings: 'Settings',
    user: 'User',
}

// these data tags are more project-specific, and may not be present on all machines, but if they are present, the bridge should include them in the ongoing polling surface
export const ProjectMachinePollingTags = (projectId: string) => ({
    TaskQueue: getProjectMachineTag(projectId) + '.TaskQueue',
    RecipeStore: getProjectMachineTag(projectId) + '.RecipeStore',
    ActiveRecipe: getProjectMachineTag(projectId) + '.ActiveRecipe',
    Job: getProjectMachineTag(projectId) + '.Job',
    PdmSts: getProjectMachineTag(projectId) + '.PdmSts',
});

// these are all the tags that belong to machine.devices.*, which are dynamically discovered during bootstrap and included in the ongoing polling surface if they exist
export const BaseDevicePollingTags = {
    Is: 'Is',
    Errors: 'Errors',
    Warnings: 'Warnings',
    ExecMethod: 'ExecMethod',
    Task: 'Task',
    Process: 'Process',
    Script: 'Script',
    MutedChildrenArray: 'MutedChildrenArray',
    ApiOpcuaHmiReq: 'ApiOpcua.HmiReq',
    ApiOpcuaHmiResp: 'ApiOpcua.HmiResp',
    ApiOpcuaPlcReq: 'ApiOpcua.InternalReq',
    ApiOpcuaPlcResp: 'ApiOpcua.InternalResp',
}

export const BaseDeviceBootstrapTags = {
    Cfg: 'Cfg',
    Registration: 'Registration',
}

// optional device tags that dont live in Device data struct, ths should take in mnemonic as an input argument

export function getProjectMachineTag(projectId: string): string {
    return `Machine_${projectId}`;
}

export const OptionalDeviceBootstrapTags = (deviceRegistration: DeviceRegistration, projectId: string) => ({
    Cfg: getProjectMachineTag(projectId) + '.' + deviceRegistration.mnemonic + 'Cfg',
});

export const OptionalDevicePollingTags = (deviceRegistration: DeviceRegistration, projectId: string) => ({
    //Cfg: getProjectMachineTag(projectId) + '.' + deviceRegistration.mnemonic + 'Cfg',
    Log: 'Machine.DeviceLogs[' + deviceRegistration.id + ']',
    Sts: getProjectMachineTag(projectId) + '.' + deviceRegistration.mnemonic + 'Sts',
    Inputs: getProjectMachineTag(projectId) + '.inputs.' + deviceRegistration.mnemonic,
    Outputs: getProjectMachineTag(projectId) + '.outputs.' + deviceRegistration.mnemonic,
});

export * from "./opcua";
export * from "./mqtt";