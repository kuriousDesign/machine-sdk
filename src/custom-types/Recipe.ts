import { GCs } from "./GlobalConstants";

export interface JobData {
    ActiveRecipeIndex: number;
    JobName: string;
    LotQty: number;
    GoodCnt: number;
    ScrapCnt: number;
    SetupStartTime: bigint;
    SetupEndTime: bigint;
    SetupCompleted: boolean;
    JobStartTime: bigint;
    JobEndTime: bigint;
    JobComplete: boolean;
}

export const initialJobData: JobData = {
    ActiveRecipeIndex: 0,
    JobName: "",
    LotQty: 0,
    GoodCnt: 0,
    ScrapCnt: 0,
    SetupStartTime: BigInt(0),
    SetupEndTime: BigInt(0),
    SetupCompleted: false,
    JobStartTime: BigInt(0),
    JobEndTime: BigInt(0),
    JobComplete: false
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
    index: number;
    dbId: string;
    Nickname: string;
    LinerPotPressure: number;
    LinerTypeString: string;
    LinerWeightMin: number;
    LinerWeightMax: number;
    TubeTypeId: number;
    TubeTypeString: string;
    TubeOuterDiameterMax: number;
    TubeHeightMax: number;
    TubeMassKg: number;
    FalseBottomStaysOpen: boolean;
    ApplicatorHasVariableSqueegee: boolean;
    MeasuredSqueegeeDiaAtSetpoint1: number;
    ApplicatorSetpoints: ApplicatorSetpoint[];
    ApplicatorPreloadPauseDuration: number;
    ApplicatorToolId: number;
    ApplicatorToolString: string;
    ApplicatorCollisionPayloadOffset: number;
    CleanerId: number;
    CleanerString: string;
    WeighingFingerId: number;
    WeighingFingerString: string;
    CameraId: number;
    CameraString: string;
    CameraSpeed: number;
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
    Nickname: "",
    LinerPotPressure: 0,
    LinerTypeString: "",
    LinerWeightMin: 0,
    LinerWeightMax: 0,
    TubeTypeId: TubeTypes.NONE,
    TubeTypeString: tubeTypeIdToStringMap.get(TubeTypes.NONE) || "",
    TubeOuterDiameterMax: 0,
    TubeHeightMax: 0,
    TubeMassKg: 0,
    FalseBottomStaysOpen: false,
    ApplicatorHasVariableSqueegee: false,
    MeasuredSqueegeeDiaAtSetpoint1: 0,
    ApplicatorSetpoints: initialApplicatorSetpoints,
    ApplicatorPreloadPauseDuration: 0,
    ApplicatorToolId: ApplicatorTools.NONE,
    ApplicatorToolString: applicatorToolIdToStringMap.get(ApplicatorTools.NONE) || "",
    ApplicatorCollisionPayloadOffset: 0,
    CleanerId: Cleaners.NONE,
    CleanerString: cleanerIdToStringMap.get(Cleaners.NONE) || "",
    WeighingFingerId: WeighingFingers.NONE,
    WeighingFingerString: weighingFingerIdToStringMap().get(WeighingFingers.NONE) || "",
    CameraId: CameraIds.NONE,
    CameraString: cameraIdToStringMap.get(CameraIds.NONE) || "",
    CameraSpeed: 0
};


export interface RecipeStore {
    numRecipes: number;
    recipes: RecipeData[];
}
export const initialRecipeStore: RecipeStore = {
    numRecipes: GCs.MAX_NUM_RECIPES,
    recipes: Array(GCs.MAX_NUM_RECIPES).fill(initialRecipe)
};