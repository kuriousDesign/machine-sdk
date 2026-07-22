export enum DeviceId {
	NONE = 0,       // Represents no device selected or invalid state
	SYS = 1,
	HMI = 2,
	SFTY = 3,
	CON = 4,
	//DIAG = 5,
	VIS = 5, // do not change this, its hard coded in the vision python service
	UDP = 6, //Robot Controller
	ROB = 7
	
	//COUNT = GCs.NUM_DEVICES //if a new device is added please ensure GCs.NUM_DEVICES is larger or equal to total, this number should match
}