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

export interface RecipeData {
    linerType: string; // display purposes only
    tubeOuterDiameterMax: number; // mm, used for robot offsets in fixture
    tubePartNumber: string; // display purposes only
    setpointSpeeds: number[]; // speed robot uses while applying liner
    setpointDiameters: number[]; // mm of Inner Diameters
    setpointDistances: number[]; // mm of Distances relative to false bottom
    applicatorToolColorId: ApplicatorTools;
    applicatorToolColorString: string;
    weighingFingerId: WeighingFingers;
    weighingFingerString: string;
    numCameras: number; // number of cameras needed to take photos of a tube
    cameraIds: number[]; // used with NumCameras to determine how photos are taken
    falseBottomStaysOpen: boolean; // this also determines if only the tall fixture is used or not
}

export enum CameraIds {
    NONE = 0,
    CAMERA_1 = 1,
    CAMERA_2 = 2,
    CAMERA_3 = 3,
}

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


export enum WeighingFingers {
    NONE = 0,
    RED_MEDIUM = 1,
    ORANGE_LARGE = 2,
    ORANGE_LARGE_2 = 3,
    BLUE_SMALL = 4,
    BLUE_SMALL_2 = 5,
    BLUE_SMALL_3 = 6,
    BLUE_SMALL_4 = 7
}


export const exampleRecipe: RecipeData = {
    linerType: "CKU",
    tubeOuterDiameterMax: 38.1,
    tubePartNumber: "11726650",
    setpointSpeeds: [100, 150, 200],
    setpointDiameters: [30.0, 28.5, 27.0],
    setpointDistances: [100.0, 200.0, 300.0],
    applicatorToolColorId: ApplicatorTools.RED_37_INCH,
    applicatorToolColorString: "Red 3/7 Inch",
    weighingFingerId: WeighingFingers.RED_MEDIUM,
    weighingFingerString: "Red Medium",
    numCameras: 2,
    cameraIds: [CameraIds.CAMERA_1, CameraIds.CAMERA_2],
    falseBottomStaysOpen: false,
};

const MAX_APPLICATOR_SETPOINTS = 10;
const MAX_CAMERAS = 3;
const MAX_NUM_RECIPES = 20;

export const initialRecipe: RecipeData = {
    linerType: "",
    tubeOuterDiameterMax: 0.0,
    tubePartNumber: "",
    setpointSpeeds: Array(MAX_APPLICATOR_SETPOINTS).fill(0),
    setpointDiameters: Array(MAX_APPLICATOR_SETPOINTS).fill(0),
    setpointDistances: Array(MAX_APPLICATOR_SETPOINTS).fill(0),
    applicatorToolColorId: ApplicatorTools.NONE,
    applicatorToolColorString: "",
    weighingFingerId: WeighingFingers.NONE,
    weighingFingerString: "",
    numCameras: 0,
    cameraIds: Array(MAX_CAMERAS).fill(CameraIds.NONE),
    falseBottomStaysOpen: false,
};

export interface RecipeStore {
    numRecipes: number;
    recipes: RecipeData[];
}

export const initialRecipeStore: RecipeStore = {
    numRecipes: 2,
    recipes: Array(MAX_NUM_RECIPES).fill(exampleRecipe),
};