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


// TYPE PartLocationIds :
// (
// 	None:=0,
// 	LeftFixture_P1 :=1,
// 	RightFixture_P9:=LeftFixture_P1 + GCs.NUM_PARTS_PER_FIXTURE,
// 	RobotGripper:=RightFixture_P9 + GCs.NUM_PARTS_PER_FIXTURE,
// 	Lost:=RobotGripper + 1
// );
// END_TYPE

export enum PartLocationIds {
    None = 0,
    LeftFixture_P1 = 1,
    RightFixture_P9 = LeftFixture_P1 + GCs.NUM_PARTS_PER_FIXTURE,
    RobotGripper = RightFixture_P9 + GCs.NUM_PARTS_PER_FIXTURE,
    Lost = RobotGripper + 1
};

export function partLocationIdToString(locationId: PartLocationIds): string {
    switch (locationId) {
        case PartLocationIds.None: return "None";
        case PartLocationIds.RobotGripper: return "Robot Gripper";
        case PartLocationIds.LeftFixture_P1: return "Left Fixture - P" + locationId.toString();
        case PartLocationIds.RightFixture_P9: return "Right Fixture - P" + locationId.toString();
        case PartLocationIds.Lost: return "Lost";
        default: 
            return "Unknown";
    }
}
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

export enum PartValidationStates {
    NONE = 0,
    Scrapped_Generic = 1,
    Scrapped_LINER_APPLICATION_STARTED_BUT_NOT_FINISHED = 101,
    Scrapped_Failed_Weight_TOO_LIGHT = 701,
    Scrapped_Failed_Weight_TOO_HEAVY = 702,
    Scrapped_Failed_Image_Review_GENERAL = 800,
    Scrapped_Failed_Image_Review_GAPS_IN_SMEAR = 801,
    Scrapped_Failed_Image_Review_BUBBLES = 802,
    PASSED = 1000
}

export interface PartValidationData {
    valState: PartValidationStates;
    statusMsg: string;
    preWeightKg: number;
    postWeightKg: number;
    linerWeightKg: number;
    videoReviewSts: number; //0: NOT REVIEWED, 911: FAILED, 1000: PASSED
}

export const initialPartValidationData: PartValidationData = {
    valState: PartValidationStates.NONE,
    statusMsg: "",
    preWeightKg: 0,
    postWeightKg: 0,
    linerWeightKg: 0,
    videoReviewSts: 0,
};
export const initialPartData: PartData = {
    processSts: PartStates.Empty,
    validation: { ...initialPartValidationData },
    loadedBadSensor: false,
    fixtureLocationWhenLoaded: -1,
    currentLocation: -1,
    inFixture: false,
};

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
