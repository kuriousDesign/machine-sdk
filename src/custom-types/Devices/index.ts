export enum DeviceTypes {
    Base = 0,
    Axis = 1,
    BoschAxis = 2, //need to deprecate this soon
    DualAxis = 3,
    Gantry = 4
}


export * from "./Device";
export * from "./Axis";