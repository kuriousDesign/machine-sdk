import { GCs } from "./GlobalConstants";

export interface JobData {
    ActiveRecipeIndex: number; // used with Machine.RecipeStore.Recipes array
    JobName: string; // this is the identifier for the specific job
    LotQty: number; // how many parts you are supposed to make per the job request
    GoodCnt: number; // how many good parts you've completed since starting the job
    ScrapCnt: number; // how many parts you've scrapped since starting the job
    SetupStartTime: bigint; // timestamp
    SetupEndTime: bigint; // timestamp
    SetupCompleted: boolean; // status
    JobStartTime: bigint; // timestamp
    JobEndTime: bigint; // timestamp
    JobComplete: boolean;
}

export interface ApplicatorSetpoint {
    speed: number; // speed robot uses while applying liner
    squeegeeDiameter: number; // mm of Inner Diameter
    zOffset: number; // mm of Distance relative to false bottom
    ballValveOn: boolean; // whether ball valve is on or off at this setpoint
}

export const initialApplicatorSetpoint: ApplicatorSetpoint = {
    speed: 0,
    squeegeeDiameter: 0.0,
    zOffset: 0.0,
    ballValveOn: false,
};

export const exampleApplicatorSetpoints: ApplicatorSetpoint[] = [
    { speed: 100, squeegeeDiameter: 30.0, zOffset: -10.0, ballValveOn: true },
    { speed: 100, squeegeeDiameter: 30.0, zOffset: 100.0, ballValveOn: true },
    { speed: 150, squeegeeDiameter: 28.5, zOffset: 200.0, ballValveOn: true },
    { speed: 200, squeegeeDiameter: 27.0, zOffset: 300.0, ballValveOn: false },
];

export const initialApplicatorSetpoints: ApplicatorSetpoint[] = Array(GCs.MAX_APPLICATOR_SETPOINTS).fill({
    speed: 0,
    squeegeeDiameter: 0.0,
    zOffset: 0.0,
    ballValveOn: false,
});

export interface RecipeData {
    index: number; // index in RecipeStore.Recipes array
    nickname: string; // user defined nickname for recipe

    tubeTypeId: number;
    tubeTypeString: string; // display purposes only
    tubeOuterDiameterMax: number; // mm, used for robot offsets in fixture
    tubeHeightMax: number; // mm, used for approach to tubes and the pick position for weighing
    falseBottomStaysOpen: boolean; // this also determines if only the tall fixture is used or not

    linerPotPressure: number; // PSI
    linerTypeString: string; // display purposes only

    applicatorSetpoints: ApplicatorSetpoint[]; // speed robot uses while applying liner
    applicatorToolId: ApplicatorTools;
    applicatorToolString: string;
    cleanerId: number; // cleaner tool used before applying liner
    cleanerString: string;

    weighingFingerId: WeighingFingers;
    weighingFingerString: string;

    numCameras: number; // number of cameras needed to take photos of a tube
    cameraIds: number[]; // used with NumCameras to determine how photos are taken
    cameraSpeeds: number[]; // speed settings for robot for each camera 
}

export enum CameraIds {
    NONE = 0,
    CAMERA_1 = 1,
    CAMERA_2 = 2,
    CAMERA_3 = 3,
}

export const cameraIdToStringMap = new Map<CameraIds, string>([
    [CameraIds.NONE, "None"],
    [CameraIds.CAMERA_1, "Camera 1"],
    [CameraIds.CAMERA_2, "Camera 2"],
    [CameraIds.CAMERA_3, "Camera 3"],
]);

export const cameraStringToIdMap = new Map<string, CameraIds>(Array.from(cameraIdToStringMap.entries()).map(([id, str]) => [str, id]));

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

export const tubeTypeIdToStringMap = new Map<number, string>([
    [TubeTypes.NONE, "None"],
    [TubeTypes.TYPE_11726650, "11726650"],
    [TubeTypes.TYPE_1809_370, "1809-370"],
    [TubeTypes.TYPE_1809_126, "1809-126"],
    [TubeTypes.TYPE_1340_38, "1340-38"],
    [TubeTypes.TYPE_3811302, "3811302"],
    [TubeTypes.TYPE_1755_037, "1755-037"],
    [TubeTypes.TYPE_1517_038, "1517-038"],
]);

export const tubeTypeStringToIdMap = new Map<string, number>(Array.from(tubeTypeIdToStringMap.entries()).map(([id, str]) => [str, id]));

export function getTubeTypeString(tubeType: TubeTypes): string {
    switch (tubeType) {
        case TubeTypes.TYPE_11726650:
            return "11726650";
        case TubeTypes.TYPE_1809_370:
            return "1809-370";
        case TubeTypes.TYPE_1809_126:
            return "1809-126";
        case TubeTypes.TYPE_1340_38:
            return "1340-38";
        case TubeTypes.TYPE_3811302:
            return "3811302";
        case TubeTypes.TYPE_1755_037:
            return "1755-037";
        case TubeTypes.TYPE_1517_038:
            return "1517-038";
        default:
            return "None";
    }
}

export const LinerTypes: string[] = [
    "CKU",
    "Tribrid",
    "1755",
];

export enum ApplicatorTools {
    NONE = 0,
    RED_37_INCH = 1,
    ORANGE_LARGE = 2,
    YELLOW_MEDIUM = 3,
    GREEN_SMALL = 4,
    BLUE_F16 = 5
}



export const applicatorToolIdToStringMap = new Map<ApplicatorTools, string>([
    [ApplicatorTools.NONE, "None"],
    [ApplicatorTools.RED_37_INCH, "Red 3/7 Inch"],
    [ApplicatorTools.BLUE_F16, "Blue F16"],
    [ApplicatorTools.GREEN_SMALL, "Green Small"],
    [ApplicatorTools.ORANGE_LARGE, "Orange Large"],
    [ApplicatorTools.YELLOW_MEDIUM, "Yellow Medium"],
]);

export const applicatorToolStringToIdMap = new Map<string, ApplicatorTools>(Array.from(applicatorToolIdToStringMap.entries()).map(([id, str]) => [str, id]));

export enum Cleaners {
    NONE = 0,
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3
}

export const cleanerIdToStringMap = new Map<Cleaners, string>([
    [Cleaners.NONE, "None"],
    [Cleaners.SMALL, "Small"],
    [Cleaners.MEDIUM, "Medium"],
    [Cleaners.LARGE, "Large"],
]);

export const cleanerStringToIdMap = new Map<string, Cleaners>(Array.from(cleanerIdToStringMap.entries()).map(([id, str]) => [str, id]));

export enum WeighingFingers {
    NONE = 0,
    BLUE_SMALL = 1,
    RED_MEDIUM = 2,
    ORANGE_LARGE = 3,
}

export const weighingFingerIdToStringMap = new Map<WeighingFingers, string>([
    [WeighingFingers.NONE, "None"],
    [WeighingFingers.RED_MEDIUM, "Red Medium"],
    [WeighingFingers.ORANGE_LARGE, "Orange Large"],
    [WeighingFingers.BLUE_SMALL, "Blue Small"],
]);

export const weighingFingerStringToIdMap = new Map(
    Array.from(weighingFingerIdToStringMap.entries()).map(([id, str]) => [str, id])
);


export const exampleRecipe: RecipeData = {
    index: 1,
    nickname: "Example Recipe",
    linerTypeString: "CKU",
    linerPotPressure: 50,

    tubeTypeId: TubeTypes.TYPE_1340_38,
    tubeTypeString: "1340-38",
    tubeOuterDiameterMax: 38.1,
    tubeHeightMax: 100, // example value in mm
    falseBottomStaysOpen: false,

    applicatorSetpoints: exampleApplicatorSetpoints,
    applicatorToolId: ApplicatorTools.RED_37_INCH,
    applicatorToolString: "Red 3/7 Inch",
    cleanerId: Cleaners.MEDIUM,
    cleanerString: "Medium",
    weighingFingerId: WeighingFingers.RED_MEDIUM,
    weighingFingerString: "Red Medium",
    numCameras: 2,
    cameraIds: [CameraIds.CAMERA_1, CameraIds.CAMERA_2],
    cameraSpeeds: [50, 75],
    
};

export const initialRecipe: RecipeData = {
    index: 0,
    nickname: "",
    linerTypeString: "",
    tubeOuterDiameterMax: 0.0,
    tubeTypeId: TubeTypes.NONE,
    tubeTypeString: "",
    tubeHeightMax: 0, // example value in mm
    linerPotPressure: 0,
    applicatorSetpoints: initialApplicatorSetpoints,
    applicatorToolId: ApplicatorTools.NONE,
    applicatorToolString: "",
    cleanerId: Cleaners.NONE,
    cleanerString: "",
    weighingFingerId: WeighingFingers.NONE,
    weighingFingerString: "",
    numCameras: 0,
    cameraIds: Array(GCs.MAX_NUM_CAMERAS).fill(CameraIds.NONE),
    cameraSpeeds: Array(GCs.MAX_NUM_CAMERAS).fill(0),
    falseBottomStaysOpen: false,
};

export interface RecipeStore {
    numRecipes: number;
    recipes: RecipeData[];
}

export const initialRecipeStore: RecipeStore = {
    numRecipes: 2,
    recipes: Array(GCs.MAX_NUM_RECIPES).fill(exampleRecipe),
};