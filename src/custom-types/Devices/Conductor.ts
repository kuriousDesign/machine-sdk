// {attribute 'qualified_only'}
// {attribute 'strict'}
// TYPE ConMethods :
// (
// 	NONE := 0, //do not remove or change this
// 	UDPATE_PART := 1, //param0: partLocationId, param1: newPartState
// 	TRANSFER_PART := 2, //param0: currentLocationId, param1: newLocationId
// 	CONFIRM_PARTS_LOADED :=3, //no params
// 	CONFIRM_PARTS_UNLOADED :=4, //no params
// 	CLEAR_ALL_FIXTURE_PARTS :=5,
// 	LOAD_ALL_FIXTURE_PARTS_RAW :=6
// );
// END_TYPE

export enum ConMethods {
    NONE = 0,
    UDPATE_PART = 1,
    TRANSFER_PART = 2,
    CONFIRM_PARTS_LOADED = 3,
    CONFIRM_PARTS_UNLOADED = 4,
    CLEAR_ALL_FIXTURE_PARTS = 5,
    LOAD_ALL_FIXTURE_PARTS_RAW = 6,
}   

export function conMethodToString(method: ConMethods): string {
    switch (method) {
        case ConMethods.NONE:
            return "NONE";
        case ConMethods.UDPATE_PART:
            return "UPDATE_PART";
        case ConMethods.TRANSFER_PART:
            return "TRANSFER_PART";
        case ConMethods.CONFIRM_PARTS_LOADED:
            return "CONFIRM_PARTS_LOADED";
        case ConMethods.CONFIRM_PARTS_UNLOADED:
            return "CONFIRM_PARTS_UNLOADED";
        case ConMethods.CLEAR_ALL_FIXTURE_PARTS:
            return "CLEAR_ALL_FIXTURE_PARTS";
        case ConMethods.LOAD_ALL_FIXTURE_PARTS_RAW:
            return "LOAD_ALL_FIXTURE_PARTS_RAW";
        default:
            return "UNKNOWN_METHOD";
    }
}