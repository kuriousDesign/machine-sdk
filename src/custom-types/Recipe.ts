import { GCs } from "./GlobalConstants";


export interface JobData {
    activeRecipeIndex: number; //used with Machine.RecipeStore.Recipes array
    jobName: string; //this is the identifier for the specific job
    tubeTypeString: string;
    lotQty: number; //how many parts you are supposed to make per the job request
    goodCnt: number; //how many good parts you've completed since starting the job
    scrapCnt: number; //how many parts you've scrapped since starting the job
    setupStartTime: bigint; //timestamp
    setupEndTime: bigint;//timestamp
    setupCompleted: boolean;//status
    jobStartTime: bigint;//timestamp
    jobEndTime: bigint;//timestamp
    jobComplete: boolean;
    activeBatchNumber: number; //this probably needs to change to activeHeatId
    //heatId: string;
    batchId: string;
    workOrderId: string;
    lotId: string;
    salesOrderId: string;
    assemblyName : string;
    assemblyNumber : string;
    workInstruction : string;
    operationNumber : string;
    operatorId: string; //uses collins employeeId
}

export const initialJobData: JobData = {
    activeRecipeIndex: 0,
    jobName: '',
    tubeTypeString: '',
    lotQty: 0,
    goodCnt: 0,
    scrapCnt: 0,
    setupStartTime: BigInt(0),
    setupEndTime: BigInt(0),
    setupCompleted: false,
    jobStartTime: BigInt(0),
    jobEndTime: BigInt(0),
    jobComplete: false,
    activeBatchNumber: 0,
    //heatId: '',
    batchId: '',
    workOrderId: '',
    lotId: '',
    salesOrderId: '',
    assemblyName : '',
    assemblyNumber : '',
    workInstruction : '',
    operationNumber : '',
    operatorId: '',
};

export interface ApplicatorSetpoint {
    speed: number;
    squeegeeDiameter: number;
    stepperPosition: number;
    zOffset: number;
    ballValveOn: boolean;
}

export const initialApplicatorSetpoint: ApplicatorSetpoint = {
    speed: 0,
    squeegeeDiameter: 0,
    stepperPosition: 0,
    zOffset: 0,
    ballValveOn: false
};


export const initialApplicatorSetpoints: ApplicatorSetpoint[] = Array.from({ length: GCs.MAX_APPLICATOR_SETPOINTS }, () => initialApplicatorSetpoint);

export interface RecipeData {
    index: number; //same as index in Machine.RecipeStore.Recipes
    dbId: string; //mongodb identifier for recipe
    nickname: string; //unique nickname for the recipe

    // LINER DATA
    linerPotPressure: number; //psi
    linerTypeString: string; //display purposes only
    linerWeightMin: number;
    linerWeightMax: number;

    // TUBE DATA
    tubeTypeId: number; //ROBOT
    tubeTypeString: string; //display purposes only
    tubeOuterDiameterMax: number; //mm, used for robot offsets in fixture  <ROBOT>
    tubeHeightMax: number; //mm, used for approach to tubes and the pick position for weighing <ROBOT>
    tubeMassKg: number; //kg, used for payload adjustment when gripping tubes
    falseBottomStaysOpen: boolean; //this also determines if only the tall fixture is used or not  <ROBOT>

    // APPLICATOR SETPOINTS
    applicatorHasVariableSqueegee: boolean;
    measuredSqueegeeDiaAtSetpoint1: number;//set after calibration
    applicatorSetpoints: ApplicatorSetpoint[]; // <ROBOT>
    applicatorPreloadPauseDuration: number; //pause it takes after opening ball valve for the first move

    // TOOLS
    applicatorToolId: number; // <ROBOT> --> this would link to TCP number in the ABB Code
    applicatorToolString: string;
    applicatorCollisionPayloadOffset: number; //kg, used to set the collision detection sensitivity during liner application, gripLoad cmd used to add artificial payload
    cleanerId: number; // <ROBOT>
    cleanerString: string;
    weighingFingerId: number; // <ROBOT> --> this would link to TCP number in the ABB Code
    weighingFingerString: string;
    cameraId: number;
    cameraString: string;
    cameraSpeed: number;
}

export enum CameraIds {
    NONE = 0,
    STANDARD = 1, //typical camera
    LONG = 2, //only used for really long tubes
}

export const cameraIdToStringMap: Map<CameraIds, string> = new Map<CameraIds, string>([
    [CameraIds.NONE, "None"],
    [CameraIds.STANDARD, "Standard"],
    [CameraIds.LONG, "Long"]
]);
export const cameraStringToIdMap: Map<string, CameraIds> = new Map<string, CameraIds>(
    Array.from(cameraIdToStringMap.entries()).map(([key, value]) => [value, key])
);

export enum TubeTypes {
    NONE = 0,
    TYPE_11726650 = 1,
    TYPE_1809_370 = 2,
    TYPE_1809_126 = 3,
    TYPE_1340_38 = 4,
    TYPE_3811302 = 5,
    TYPE_1755_037 = 6,
    TYPE_1517_038 = 7
}

export enum ApplicatorTools {
    NONE = 0,
    RED = 1,
    PURPLE = 2,
    ORANGE = 3,
    YELLOW = 4,
    WHITE = 5,
    GREEN = 6,
    BLUE = 7,
}

export const tubeTypeIdToStringMap: Map<number, string> = new Map<number, string>([
    [TubeTypes.NONE, "None"],
    [TubeTypes.TYPE_11726650, "11726650"],
    [TubeTypes.TYPE_1809_370, "1809-370"],
    [TubeTypes.TYPE_1809_126, "1809-126"],
    [TubeTypes.TYPE_1340_38, "1340-38"],
    [TubeTypes.TYPE_3811302, "3811302"],
    [TubeTypes.TYPE_1755_037, "1755-037"],
    [TubeTypes.TYPE_1517_038, "1517-038"]
]);

export const tubeTypeStringToIdMap: Map<string, number> = new Map<string, number>(
    Array.from(tubeTypeIdToStringMap.entries()).map(([key, value]) => [value, key])
);
export function getTubeTypeString(tubeType: TubeTypes): string {
    return tubeTypeIdToStringMap.get(tubeType) || "Unknown";
}
export const LinerTypes: string[] = [
    "CKU",
    "TRIBRID",
    "1755 LINER",
]

export const applicatorToolIdToStringMap: Map<ApplicatorTools, string> = new Map<ApplicatorTools, string>([
    [ApplicatorTools.NONE, "None"],
    [ApplicatorTools.RED, "Red"],
    [ApplicatorTools.PURPLE, "Purple"],
    [ApplicatorTools.ORANGE, "Orange"],
    [ApplicatorTools.YELLOW, "Yellow"],
    [ApplicatorTools.WHITE, "White"],
    [ApplicatorTools.GREEN, "Green"],
    [ApplicatorTools.BLUE, "Blue"],
]);
export const applicatorToolStringToIdMap: Map<string, ApplicatorTools> = new Map<string, ApplicatorTools>(
    Array.from(applicatorToolIdToStringMap.entries()).map(([key, value]) => [value, key])
);
export enum Cleaners {
    NONE = 0,
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3
}
export const cleanerIdToStringMap: Map<Cleaners, string> = new Map<Cleaners, string>([
    [Cleaners.NONE, "None"],
    [Cleaners.SMALL, "Small"],
    [Cleaners.MEDIUM, "Medium"],
    [Cleaners.LARGE, "Large"]
]);
export const cleanerStringToIdMap: Map<string, Cleaners> = new Map<string, Cleaners>(
    Array.from(cleanerIdToStringMap.entries()).map(([key, value]) => [value, key])
);
export enum WeighingFingers {
    NONE = 0,
    BLUE_SMALL = 1,
    RED_MEDIUM = 2,
    ORANGE_LARGE = 3
}
export const weighingFingerIdToStringMap = (): Map<WeighingFingers, string> => new Map<WeighingFingers, string>([
    [WeighingFingers.NONE, "None"],
    [WeighingFingers.BLUE_SMALL, "Blue Small"],
    [WeighingFingers.RED_MEDIUM, "Red Medium"],
    [WeighingFingers.ORANGE_LARGE, "Orange Large"]
]);
export const weighingFingerStringToIdMap: Map<string, WeighingFingers> = new Map<string, WeighingFingers>(
    Array.from(weighingFingerIdToStringMap().entries()).map(([key, value]) => [value, key])
);

export const initialRecipe: RecipeData = {
    index: 0,
    dbId: "",
    nickname: "",
    linerPotPressure: 0,
    linerTypeString: "",
    linerWeightMin: 0,
    linerWeightMax: 0,
    tubeTypeId: TubeTypes.NONE,
    tubeTypeString: tubeTypeIdToStringMap.get(TubeTypes.NONE) || "",
    tubeOuterDiameterMax: 0,
    tubeHeightMax: 0,
    tubeMassKg: 0,
    falseBottomStaysOpen: false,
    applicatorHasVariableSqueegee: false,
    measuredSqueegeeDiaAtSetpoint1: 0,
    applicatorSetpoints: initialApplicatorSetpoints,
    applicatorPreloadPauseDuration: 0,
    applicatorToolId: ApplicatorTools.NONE,
    applicatorToolString: applicatorToolIdToStringMap.get(ApplicatorTools.NONE) || "",
    applicatorCollisionPayloadOffset: 0,
    cleanerId: Cleaners.NONE,
    cleanerString: cleanerIdToStringMap.get(Cleaners.NONE) || "",
    weighingFingerId: WeighingFingers.NONE,
    weighingFingerString: weighingFingerIdToStringMap().get(WeighingFingers.NONE) || "",
    cameraId: CameraIds.NONE,
    cameraString: cameraIdToStringMap.get(CameraIds.NONE) || "",
    cameraSpeed: 0
};


export interface RecipeStore {
    numRecipes: number;
    recipes: RecipeData[];
}
export const initialRecipeStore: RecipeStore = {
    numRecipes: GCs.MAX_NUM_RECIPES,
    recipes: Array(GCs.MAX_NUM_RECIPES).fill(initialRecipe)
};