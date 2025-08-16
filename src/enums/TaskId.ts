export enum TaskId {
  NoTask = 0,
  WayPointMove = 1, //use endPositionId as the destination to communicate to robot, all other parameters are useless.
  PickRawShelf_R = 2, //pick raw shelf with Right Gripper, left gripper must be empty
  DeburrBottom_R = 3, //Right Gripper Side Only, params(top/bottom/both
  DeburrTop_R = 4, //Right Gripper Side Only, params(top/bottom/both
  LoadPreOp2_L = 5, //rarely used (only be used if robot were ready to load cnc but had to abandon that to go wash parts or something like that), position 2 on pre op is on the right, left gripper must be empty
  LoadPreOp2_R = 6, //position 2 on pre op is on the right, left gripper must be empty
  LoadPreOp1_R = 7, //position 1 on pre op is on the left
  PickPreOp1_R = 8, //position 1 on pre op is on the left
  PickPreOp2_L = 9, //position 2 on pre op is on the right
  LoadCnc2_L = 10,
  LoadCnc1_R = 11,
  PickCnc1_R = 12,
  PickCnc2_L = 13,
  LoadPostOp2_L = 14,
  LoadPostOp1_R = 15,
  PickPostOp1_R = 16,
  PickPostOp2_L = 17,
  PickPostOp2_R = 18, //left gripper must be empty
  WashAndDry = 19,
  LoadDoneShelf_R = 20, //uses a PLC PR offset for done shelf user frame
  RejectPart_L = 21, //start and end at rack perch
  RejectPart_R = 22, //start and end at rack perch
  WaitToUnload = 23, //MARTIN WE WILL USE WayPointMove FOR THIS,
  WaitToLoad = 24, //MARTIN WE WILL USE WayPointMove FOR THIS, wait in front of cnc with deburred parts in both robot gripppers, only used when cnc is empty and waiting to be filled, REPLACE WITH WAYPOINT MOVE?
  ExitCnc = 25, //MARTIN WE WILL USE WayPointMove FOR THIS, move from cnc hover position to cnc perch position, REPLACE WITH WAYPOINT MOVE?
  EnterCnc = 26, //MARTIN WE WILL USE WayPointMove FOR THIS, move to cnc hover position, MARTIN WE WILL USE WayPointMove FOR THIS

  //non-robot tasks
  ChangeCncProgram = 27,
  StartCnc = 28,
  StopCnc = 29,
  ResetCnc = 30,
  OpenCncDoor = 31,
  CloseCncDoor = 32,
}
