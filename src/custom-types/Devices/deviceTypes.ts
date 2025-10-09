// {attribute 'qualified_only'}
// {attribute 'strict'}
// TYPE DeviceTypes :
// (
// 	Base := 0, 
// 	Axis := 1,
// 	BoschAxis:=2,
// 	DualAxis:=3,
// 	Gantry:=4,
// 	System:=5,
// 	Bridge:=6,
// 	Conductor:=7,
// 	Rob:=8,
// 	Eoat:=9,
// 	Vision:=10
// );
// END_TYPE



export enum DeviceTypes {
    Base = 0,
    Axis = 1,
    BoschAxis = 2,
    DualAxis = 3,
    Gantry = 4,
    Bridge = 6,
    Machine = 7,
    Robot = 8,
    Vision = 10,
    TwoPos = 11
}

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
        case DeviceTypes.Vision:
            return 'Vision';
        case DeviceTypes.TwoPos:
            return 'Two Position';
        default:
            return 'Unknown';
    }
};