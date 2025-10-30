// TYPE PotSts :
// STRUCT
// 	isPressurizing:BOOL;
// 	AtTargetPressure:BOOL;
// 	isDepressurized:BOOL;
// 	ActualPressure:LREAL;
// 	TargetPressure:LREAL;
// 	LinerIsFlowing:BOOL;
// 	State:INT;
// 	BallValve_OPEN:BOOL;
// 	BallValve_CLOSED:BOOL;
// END_STRUCT
// END_TYPE

export interface PotSts {
  isPressurizing: boolean;
  atTargetPressure: boolean;
  isDepressurized: boolean;
  actualPressure: number;
  targetPressure: number;
  linerIsFlowing: boolean;
  state: number;
  ballValve_OPEN: boolean;
  ballValve_CLOSED: boolean;
}