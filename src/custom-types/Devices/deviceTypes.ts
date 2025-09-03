export enum DeviceTypes {
    Base = 0,
    Axis = 1,
    BoschAxis = 2, //need to deprecate this soon
    DualAxis = 3,
    Gantry = 4,
    Bridge = 5, //used for communication
    Machine = 6,
    Robot = 7,
};

export function deviceTypeToString(deviceType: DeviceTypes): string {
    switch (deviceType) {
        case DeviceTypes.Base:
            return 'Base';
        case DeviceTypes.Axis:
            return 'Axis';
        case DeviceTypes.BoschAxis:
            return 'Bosch Axis';
        case DeviceTypes.DualAxis:
            return 'Dual Axis';
        case DeviceTypes.Gantry:
            return 'Gantry';
        case DeviceTypes.Bridge:
            return 'Bridge';
        case DeviceTypes.Machine:
            return 'Machine';
        case DeviceTypes.Robot:
            return 'Robot';
        default:
            return 'Unknown';
    }
};