// {attribute 'qualified_only'}
// {attribute 'strict'}
// TYPE RobWaypoints :
// (
// 	NONE := 0, //do not remove or change this
// 	HOME := 1, //identifier for the robot's home position
// 	FIXTURE_LEFT_PERCH := 2, //identifier for the fixture perch position
// 	FIXTURE_RIGHT_PERCH := 3, //identifier for the fixture perch position
// 	TOOL_PERCH :=4
// );
// END_TYPE

export enum RobWaypoints {
    NONE = 0,
    HOME = 1,
    FIXTURE_LEFT_PERCH = 2,
    FIXTURE_RIGHT_PERCH = 3,
    TOOL_PERCH = 4
}

export function robotWaypointToString(waypoint: RobWaypoints): string {
    switch (waypoint) {
        case RobWaypoints.NONE:
            return 'None';
        case RobWaypoints.HOME:
            return 'Home';
        case RobWaypoints.FIXTURE_LEFT_PERCH:
            return 'Fixture Left Perch';
        case RobWaypoints.FIXTURE_RIGHT_PERCH:
            return 'Fixture Right Perch';
        case RobWaypoints.TOOL_PERCH:
            return 'Tool Perch';
        default:
            return 'Unknown';
    }
}

// {attribute 'qualified_only'}
// {attribute 'strict'}
// TYPE RobTools :
// (
// 	NONE := 0, //do not remove or change this
// 	WEIGHING_GRIPPER := 1, //identifier for the weighing gripper tool
// 	APPLICATOR := 2, //identifier for the applicator tool
// 	CAMERA := 3 //identifier for the camera tool
// );
// END_TYPE

export enum RobTools {
    NONE = 0,
    WEIGHING_GRIPPER = 1,
    APPLICATOR = 2,
    CAMERA = 3
}

export function robotToolToString(tool: RobTools): string {
    switch (tool) {
        case RobTools.NONE:
            return 'None';
        case RobTools.WEIGHING_GRIPPER:
            return 'Weighing Gripper';
        case RobTools.APPLICATOR:
            return 'Applicator';
        case RobTools.CAMERA:
            return 'Camera';
        default:
            return 'Unknown';
    }
}

// {attribute 'qualified_only'}
// {attribute 'strict'}
// TYPE RobTasks :
// (
// 	NONE := 0, //do not remove or change this
// 	RETRIEVE_TOOL := 1, //param0: toolId (identifier from Tools enum specifying which tool to retrieve, e.g., WEIGHING_GRIPPER, APPLICATOR, CAMERA), checks for tool presence; if missing, moves to "Home" and signals fault
// 	RETURN_TOOL := 2, //param0: toolId (identifier from Tools enum specifying which tool to return to the tool rack)
// 	GO_TO_WAYPOINT := 3, //param0: positionId (identifier from Positions enum specifying the target waypoint, e.g., FIXTURE_PERCH, HOME), moves robot to the specified position
// 	GRIP_PART := 4, //param0: partId (identifier of the part to grip, e.g., part 1), performs a diagonal lift (½" up, ½" away from fixed clamp side) for clearance
// 	SAMPLE_WEIGHT := 5, //param0: sampleCount (number of weight samples, e.g., XX), param1: sampleDuration (duration in seconds, e.g., 2), waits briefly then records average weight over the period
// 	REPOSITION_AND_RELEASE_PART := 6, //no params: moves back ¼" toward fixed clamp, down ¼", opens gripper to drop tube onto false bottom, returns to perch position
// 	REMOVE_FALSE_BOTTOMS := 7, //no params: removes false bottoms from the fixture(s)
// 	HOME_SQUEEGEE_MOTOR := 8, //no params: homes the squeegee motor while moving to fixture perch position
// 	WIPE_APPLICATOR := 9, //no params: cleans the applicator (detailed cleaning procedure TBD)
// 	PERFORM_APPLICATION_TASK := 10, //param0: tubeId (identifier of the tube to process, e.g., tube 1), applies the task to the specified tube
// 	INSERT_FALSE_BOTTOMS := 11, //no params: slides false bottoms back into place in the fixture(s)
// 	TAKE_IMAGES := 12 //param0: tubeList (list of tube IDs to image), captures images and sends to HMI for display (most recent as large image, others in album view)
// );
// END_TYPE

export const RobTasks = {
    NONE: 0,
    RETRIEVE_TOOL: 1,
    RETURN_TOOL: 2,
    GO_TO_WAYPOINT: 3,
    GRIP_PART: 4,
    SAMPLE_WEIGHT: 5,
    REPOSITION_AND_RELEASE_PART: 6,
    REMOVE_FALSE_BOTTOMS: 7,
    HOME_SQUEEGEE_MOTOR: 8,
    WIPE_APPLICATOR: 9,
    PERFORM_APPLICATION_TASK: 10,
    INSERT_FALSE_BOTTOMS: 11,
    TAKE_IMAGES: 12
};

export function robotTaskToString(task: number): string {
    switch (task) {
        case RobTasks.NONE:
            return 'None';
        case RobTasks.RETRIEVE_TOOL:
            return 'Retrieve Tool';
        case RobTasks.RETURN_TOOL:
            return 'Return Tool';
        case RobTasks.GO_TO_WAYPOINT:
            return 'Go To Waypoint';
        case RobTasks.GRIP_PART:
            return 'Grip Part';
        case RobTasks.SAMPLE_WEIGHT:
            return 'Sample Weight';
        case RobTasks.REPOSITION_AND_RELEASE_PART:
            return 'Reposition And Release Part';
        case RobTasks.REMOVE_FALSE_BOTTOMS:
            return 'Remove False Bottoms';
        case RobTasks.HOME_SQUEEGEE_MOTOR:
            return 'Home Squeegee Motor';
        case RobTasks.WIPE_APPLICATOR:
            return 'Wipe Applicator';
        case RobTasks.PERFORM_APPLICATION_TASK:
            return 'Perform Application Task';
        case RobTasks.INSERT_FALSE_BOTTOMS:
            return 'Insert False Bottoms';
        case RobTasks.TAKE_IMAGES:
            return 'Take Images';
        default:
            return 'Unknown';
    }
}


// TYPE RobSts :
// STRUCT
// 	Cfg:DeviceTemplateCfg; //read-only, references _cfg
// 	ActiveToolId:INT;
// 	ActualWaypoint:INT;
// 	TargetWaypoint:INT;
// 	ActualZone:INT;
// 	WaypointPlan: RobWaypointPlan;
// 	SqueegeeIsCalibrated:BOOL; //required once per job
// 	SqueegeeIsHomed:BOOL; //required after every tool change
// END_STRUCT
// END_TYPE


// TYPE RobWaypointPlan :
// STRUCT
// 	Cnt:INT;
// 	activeIndex:INT;
// 	list:ARRAY[0..RobConstants.MOVE_PLAN_LEN -1] OF INT;
// END_STRUCT
// END_TYPE

export interface RobWaypointPlan {
  cnt: number;
  activeIndex: number;
  list: number[];
}


export interface RobCfg {
}

export interface RobSts {
  cfg: RobCfg;
  activeToolId: number;
  actualWaypoint: number;
  targetWaypoint: number;
  actualZone: number;
  waypointPlan: RobWaypointPlan;
  squeegeeIsCalibrated: boolean;
  squeegeeIsHomed: boolean;
}

export interface RobDataDEPRECATED {
  zone: RobZoneData;
  pos: RobWaypoints;
  dest: RobWaypoints;
  cartesian: RobPositionData;
  //taskReq: TaskId; //incoming task request
  //taskData: TaskData;
  recipeOffsets: RobPositionData[];
}

export interface RobPositionData {
  x: number;
  y: number;
  z: number;
  wdeg: number;
  pdeg: number;
  rdeg: number;
}

export interface RobZoneData {
  cncHorzShuttle: boolean;
  waypointShuttle: boolean; //Joint moves, wrist is holding parts upright and at a distance that allows robot to rotate about J1 without fear of collision, basically just moving J1
  dcsNoGo: boolean;
  outsideOfCnc: boolean;
}
