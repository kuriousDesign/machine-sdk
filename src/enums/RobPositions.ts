export enum RobPositions {
  AnyPosition = -1, //used when configuring tasks, this is used for start position id for pure moves
  Lost = 0,
  Home = 1,
  WashPerch = 2,
  RackPerch = 3, //used for shelf picking and reject
  DeadNestPerch = 4, //used for preop and postop tasks
  CncPerch = 5, //standby position outside of cnc door with wrist rotated so parts are horizontal
  DeburrPerch = 6,
  CncWaypoint = 7,
  CncHover = 8,
}
