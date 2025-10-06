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

// {attribute 'qualified_only'}
// {attribute 'strict'}
// //Just subtract 5 from a discrete part state that, this corresponds to processing
// TYPE PartStates :
// (
// 	Empty:=0,//no part present
// 	//BadSensorEmpty:=1, //used if sensors give false positive
	
// 	UnvalidatedRaw:=10, //used if registered by sensor, but not approved by operator

// 	Raw:=20,
// 	//BadSensorRaw:=21, //used if loaded by sensor didn't work
	
// 	StartedPreWeighing:=29,
// 	PreWeighed:=30,
	
// 	StartedApplying:=31,
// 	Applied:=40,
	
// 	StartedPhotographing:=61,
// 	Photographed:=70,
	
// 	StartedPostWeighing:=71,
// 	PostWeighed:=80,
	
// 	Failed:=911,
// 	Passed:=1000 //ProessingDone, back in fixture and waiting to be unloaded

	
// );
// END_TYPE


// {attribute 'qualified_only'}
// //{attribute 'strict'}
// TYPE PartLocationIds :
// (
// 	None:=0,
// 	RobotGripper:=1,
// 	LeftFixture_P1 :=2,
// 	RightFixture_P1:=LeftFixture_P1 + GCs.NUM_PARTS_PER_FIXTURE,
// 	Lost:=RightFixture_P1 + GCs.NUM_PARTS_PER_FIXTURE
// );
// END_TYPE

export enum PartLocationIds {
    None = 0,
    RobotGripper = 1,
    LeftFixture_P1 = 2,
    RightFixture_P1 = LeftFixture_P1 + GCs.NUM_PARTS_PER_FIXTURE,
    Lost = RightFixture_P1 + GCs.NUM_PARTS_PER_FIXTURE
};

export function partLocationIdToString(locationId: PartLocationIds): string {
    switch (locationId) {
        case PartLocationIds.None: return "None";
        case PartLocationIds.RobotGripper: return "Robot Gripper";
        case PartLocationIds.LeftFixture_P1: return "Left Fixture P1";
        case PartLocationIds.RightFixture_P1: return "Right Fixture P1";
        case PartLocationIds.Lost: return "Lost";
        default: return "Unknown";
    }
}

export enum PartStates {
    Empty = 0,//no part present
    //BadSensorEmpty = 1, //used if sensors give false positive
    UnvalidatedRaw = 10, //used if registered by sensor, but not approved by operator
    Raw = 20,
    //BadSensorRaw = 21, //used if loaded by sensor didn't work
    StartedPreWeighing = 29,
    PreWeighed = 30,
    StartedApplying = 31,
    Applied = 40,
    StartedPhotographing = 61,
    Photographed = 70,
    StartedPostWeighing = 71,
    PostWeighed = 80,
    Failed = 911,
    Passed = 1000 //ProessingDone, back in fixture and waiting to be unloaded
};

export function partStateToString(state: PartStates): string {
    switch (state) {
        case PartStates.Empty: return "Empty";
        case PartStates.UnvalidatedRaw: return "Unvalidated Raw";
        case PartStates.Raw: return "Raw";
        case PartStates.StartedPreWeighing: return "Started Pre-Weighing";
        case PartStates.PreWeighed: return "Pre-Weighed";
        case PartStates.StartedApplying: return "Started Applying";
        case PartStates.Applied: return "Applied";
        case PartStates.StartedPhotographing: return "Started Photographing";
        case PartStates.Photographed: return "Photographed";
        case PartStates.StartedPostWeighing: return "Started Post-Weighing";
        case PartStates.PostWeighed: return "Post-Weighed";
        case PartStates.Failed: return "Failed";
        case PartStates.Passed: return "Passed";
    }
}

export interface PartData {
    processSts: PartStates; // PartStates enum
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
    processSts: PartStates.Empty,
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
