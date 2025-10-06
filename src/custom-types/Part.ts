import { PartStateDeprecated as PartStateDeprecated } from "../enums";
import { GCs } from "./GlobalConstants";



// TYPE PartValidationData :
// STRUCT
// 	State:INT;
// 	PreWeightKg:LREAL;
// 	PostWeightKg:LREAL;
// 	LinerWeightKg:LREAL;
// END_STRUCT
// END_TYPE


// TYPE PartData :
// STRUCT
// 	ProcessSts:INT;//PartStates enum
// 	Validation:PartValidationData;
// 	LoadedBadSensor:BOOL; //marks if loaded into system with bad part present sensor
// 	FixtureLocationWhenLoaded:INT; //LocationIds enum, where this part was loaced
// 	CurrentLocation:INT; //LocationIds enum, this is also the same as the partIndex of the Machine.PartData[partIndex]
// 	InFixture:BOOL; //CurrentLocation = FixtureLocationWhenLoaded
	
// 	//RecipeData:PartRecipeData;
// END_STRUCT
// END_TYPE



export interface PartData {
    processSts: number; // PartStates enum
    validation: PartValidationData;
    loadedBadSensor: boolean; // marks if loaded into system with bad part present sensor
    fixtureLocationWhenLoaded: number; // LocationIds enum, where this part was loaced
    currentLocation: number; // LocationIds enum, this is also the same as the partIndex of the Machine.PartData[partIndex]
    inFixture: boolean; // CurrentLocation = FixtureLocationWhenLoaded
}

export interface PartValidationData {
    state: number; // PartStates enum
    preWeightKg: number; // LREAL
    postWeightKg: number; // LREAL
    linerWeightKg: number; // LREAL
}

export const initialPartValidationData: PartValidationData = {
    state: -1,
    preWeightKg: -1,
    postWeightKg: -1,
    linerWeightKg: -1,
};
export const initialPartData: PartData = {
    processSts: -1,
    validation: { ...initialPartValidationData },
    loadedBadSensor: false,
    fixtureLocationWhenLoaded: -1,
    currentLocation: -1,
    inFixture: false,
};

// TYPE PartDataStatus :
// STRUCT
// 	Parts: ARRAY[0..GCs.PARTDATA_COUNT-1] OF PartData; //uses PartLocationIds, but lost parts get added to the end of known locations
// 	AllStationsAreEmpty:BOOL;
// 	RawShelfIsEmpty:BOOL;
// 	DoneShelfIsEmpty:BOOL;
// 	DoneShelfIsFull:BOOL;
// 	DoneShelfSpacesLeftCnt:INT;
// 	RawShelfPartsLeftCnt:INT;
// 	AllFixturesAreEmpty:BOOL;
// 	LeftFixtureIsEmpty:BOOL;
// 	RightFixtureIsEmpty:BOOL;

// 	RobotIsEmpty:BOOL;
// 	RobotHasNoPostOpParts:BOOL; //robot isn't holding any parts that are machined or washing/dryed or finished
// 	RobotHasMachinedParts:BOOL; //robot is holding at least one machined part
// 	RobotHasOnePreTopDeburring:BOOL;
// 	RobotHasOnePreMachining:BOOL;
// 	RobotHasTwoPreMachining:BOOL;
// 	RobotHasOneRaw:BOOL;

// 	OneOrMoreRejectPartsInCell:BOOL;// there is a reject part in the robot, preop OR post op (doesn't look at cnc)
// 	OneOrMoreRejectPartsInRobot:BOOL;

// 	RobotHasOneFinishedPart:BOOL;
// 	FinishedCnt:INT;//amount of finished parts either in post op or in robot
// 	ActiveCnt:INT;//how many active parts are in the cell, cnc or robot (does not include raw or done rack)
// 	BatchCntFlag:BOOL; //prevent more parts from being picked by raw
// END_STRUCT
// END_TYPE
export interface PartDataStatus {
    parts: PartData[];
    allStationsAreEmpty: boolean;
    rawShelfIsEmpty: boolean;
    doneShelfIsEmpty: boolean;
    doneShelfIsFull: boolean;
    doneShelfSpacesLeftCnt: number;
    rawShelfPartsLeftCnt: number;
    allFixturesAreEmpty: boolean;
    leftFixtureIsEmpty: boolean;
    rightFixtureIsEmpty: boolean;

    robotIsEmpty: boolean;
    robotHasNoPostOpParts: boolean; //robot isn't holding any parts that are machined or washing/dryed or finished
    robotHasMachinedParts: boolean; //robot is holding at least one machined part
    robotHasOnePreTopDeburring: boolean;
    robotHasOnePreMachining: boolean;
    robotHasTwoPreMachining: boolean;
    robotHasOneRaw: boolean;

    oneOrMoreRejectPartsInCell: boolean;// there is a reject part in the robot, preop OR post op (doesn't look at cnc)
    oneOrMoreRejectPartsInRobot: boolean;

    robotHasOneFinishedPart: boolean;
    finishedCnt: number;//amount of finished parts either in post op or in robot
    activeCnt: number;//how many active parts are in the cell, cnc or robot (does not include raw or done rack)
    batchCntFlag: boolean; //prevent more parts from being picked by raw
}

export const initialPartDataStatus: PartDataStatus = {
    parts: Array(GCs.PARTDATA_COUNT).fill(null).map(() => ({ ...initialPartData })),
    allStationsAreEmpty: false,
    rawShelfIsEmpty: false,
    doneShelfIsEmpty: false,
    doneShelfIsFull: false,
    doneShelfSpacesLeftCnt: 0,
    rawShelfPartsLeftCnt: 0,
    allFixturesAreEmpty: false,
    leftFixtureIsEmpty: false,
    rightFixtureIsEmpty: false,

    robotIsEmpty: false,
    robotHasNoPostOpParts: false,
    robotHasMachinedParts: false,
    robotHasOnePreTopDeburring: false,
    robotHasOnePreMachining: false,
    robotHasTwoPreMachining: false,
    robotHasOneRaw: false,

    oneOrMoreRejectPartsInCell: false,
    oneOrMoreRejectPartsInRobot: false,

    robotHasOneFinishedPart: false,
    finishedCnt: 0,
    activeCnt: 0,
    batchCntFlag: false,
};

export interface PartDataDeprecated {
  cncPreOp: [PartStateDeprecated, PartStateDeprecated];
  cnc: [PartStateDeprecated, PartStateDeprecated];
  cncPostOp: [PartStateDeprecated, PartStateDeprecated];
  doneShelf: PartStateDeprecated[];
  rawShelf: PartStateDeprecated[];
  robot: [PartStateDeprecated, PartStateDeprecated];
  washer: [PartStateDeprecated, PartStateDeprecated];
  hmiEditingAllowed: boolean;
}
