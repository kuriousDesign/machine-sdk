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
    Registration: 'Registration',
}


export * from "./opcua";
export * from "./mqtt";