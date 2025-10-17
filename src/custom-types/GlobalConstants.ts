export interface GlobalConstants {
  HIDE_LEFT_TWO_COLUMNS: boolean;
  HIDE_RIGHT_COLUMN: boolean;
}

// {attribute 'qualified_only'}
// VAR_GLOBAL CONSTANT
// 	NUM_AXES:INT:=20;
// 	MAX_NUM_NAUTILUS_AXES:INT:=20;
// 	NUM_DEVICES:INT:=50; //get this from DeviceIds
// 	//STEP_TIMEOUT: TIME := T#5000MS;
// 	//TIMEOUT_ERROR_CODE_SHIFT: INT:= 10000;
// 	//DEVICE_FAULTCODEARRAY_LEN:INT:=3;

// 	MOMENTARY_PB: TIME:= T#250MS;
// 	ROBOT_PART_COUNT: INT:=2;
// 	//CNC_PART_COUNT: INT:=2;
// 	RECIPE_COUNT_MAX:INT :=20;
// 	HIDE_LEFT_TWO_COLUMNS:BOOL:=TRUE;//if true, the robot will pick/load the last two columns of the raw/done shelves
// 	HIDE_RIGHT_COLUMN:BOOL:=TRUE;
// 	HIDE_LEFT_ONE_COLUMN:BOOL:=FALSE;//this must be false if hide left two is true
// 	SHELF_PART_COUNT: INT:=100;
// 	NUM_OF_COLS:INT:=20; //total columns on shelf
// 	PARTS_IN_COL:INT:=5; //total parts in a column
// 	//DIAGONAL_PATTERN: BOOL:=TRUE;//is shelf picking/loading is diagonal pattern, otherwise its column picking/loading
// 	//WASHER_PART_COUNT: INT:=2;
// 	MACHINE_FAULTCODEARRAY_LEN: INT:=50;
// 	MAX_NUM_INPUTS: INT :=50;
	
// 	NUM_PARTS_XFER:INT:=10;
// 	NUM_PARTS_IB:INT:=51;
	

// 	NUM_LOG_ENTRIES:INT:=25;
// 	TASK_LIST_LEN:INT:=25;
// 	TASK_STORE_LEN:INT:=100 + TASK_LIST_LEN; //length of the array of stored (configured) tasks, the range of index 100 and greater are reserved for waypoints
// 	TASK_LOG_LEN:INT:=25;
// 	STATION_COUNT:INT:=6; //total number of designated areas that can hold parts: robot, raw shelf, preop, cnc, postop and done shelf
// 	TOP_PRIORITY_COUNT:INT:=7; //total number of top priorities in the Priorities ENUM
	
// 	//DEBUG_LOG_LEN:INT:=10;
// 	DEFAULT_TASK_DURATION_SEC:INT:=5;
// 	PARTDATA_COUNT:INT:= 25;//total count of parts contained in PartData struct
	
// 	USERFRAME_COUNT:INT:=10;
// 	//DEVICE_CHILDREN_ARRAY_LEN:INT:=10;
// 	SYSTIME_TO_UTC_SCALAR:ULINT := LREAL_TO_ULINT(10E6);
// 	NUM_PARTS_PER_FIXTURE:INT:=8;
// 	//TASKQUEUE_LEN:INT:=100;
	
	
// 	// HW SIDE
// 	MAX_NUM_HW_CARDS:INT:=16;
// END_VAR

export const GCs = {

  NUM_AXES: 20,
  MAX_NUM_NAUTILUS_AXES: 20,
  NUM_DEVICES: 50, //get this from DeviceIds
  //STEP_TIMEOUT: TIME := T#5000MS;
  //TIMEOUT_ERROR_CODE_SHIFT: INT:= 10000;
  MOMENTARY_PB: 250, // TIME:= T#250MS;
  ROBOT_PART_COUNT: 2,
  //CNC_PART_COUNT: INT:=2;
  RECIPE_COUNT_MAX: 20,
  HIDE_LEFT_TWO_COLUMNS: true, //if true, the robot will pick/load the last two columns of the raw/done shelves
  HIDE_RIGHT_COLUMN: true,
  HIDE_LEFT_ONE_COLUMN: false, //this must be false if hide left two is true
  SHELF_PART_COUNT: 100,
  NUM_OF_COLS: 20, //total columns on shelf
  PARTS_IN_COL: 5, //total parts in a column
  //DIAGONAL_PATTERN: BOOL:=TRUE;//is shelf picking/loading is diagonal pattern, otherwise its column picking/loading
  //WASHER_PART_COUNT: INT:=2;
  MACHINE_FAULTCODEARRAY_LEN: 50,
  MAX_NUM_INPUTS: 50,
  NUM_PARTS_XFER: 10,
  NUM_PARTS_IB: 51,
  NUM_LOG_ENTRIES: 25,
  TASK_LIST_LEN: 25,
  TASK_STORE_LEN: 125, //length of the array of stored (configured) tasks, the range of index 100 and greater are reserved for waypoints
  TASK_LOG_LEN: 25,
  STATION_COUNT: 6, //total number of designated areas that can hold parts: robot, raw shelf, preop, cnc, postop and done shelf 
  TOP_PRIORITY_COUNT: 7, //total number of top priorities in the Priorities ENUM
  //DEBUG_LOG_LEN:INT:=10;
  DEFAULT_TASK_DURATION_SEC: 5,
  PARTDATA_COUNT: 25, //total count of parts contained in PartData struct
  USERFRAME_COUNT: 10,
  //DEVICE_CHILDREN_ARRAY_LEN:INT:=10;
  SYSTIME_TO_UTC_SCALAR: 10E6, //ULINT := LREAL_TO_ULINT(10E6);
  NUM_PARTS_PER_FIXTURE: 8,
  //TASKQUEUE_LEN:INT:=100;
  // HW SIDE
  MAX_NUM_HW_CARDS: 16,
  NUM_ENTRIES_MACHINE_LOG: 100,
};