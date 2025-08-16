export enum Priority {
  //TopPriorities must be ordered from most important (priority = 1) to least important
  NoPriority = 0, //no priorites were detected
  StartCnc = 1, //priority to start cnc (get robot out of cnc, close door and start that thing)
  DropoffMachinedParts = 2, //Dropoff machined parts in the post op (do this after cnc machining and before cnc loading)
  LoadCnc = 3, //Top priority to load the deburred parts into the cnc
  FinishPostOp = 4, //Top prioroity to finish parts after the cnc op
  UnloadCnc = 5, //Top priority to remove machined parts from cnc
  PrepParts = 6, //Top priority to get two parts deburred into the preop deadnest
  WaitToUnload = 7,
  CloseCncDoor = 8,

  //FillRobotWithTwoDeburredParts=11, //sub priority to loading cnc, robot needs to fill both grippers with deburred parts
  DeburrPart = 20, //sub priorty to loading cnc and robot needs deburred parts
  PickRawShelf = 21, //sub priority to pick raw shelf
  PickRawPartFromPreOp = 22, //sub priority to pick raw shelf
  LoadPreOpWithDeburred = 23,
  GatherDeburredPartsForCncLoad = 24, //Top priority to grab deburred parts and get in ready position to load cnc (do this before cnc loading)
  WashParts = 31,
  RejectScrap = 91, //priority to pick and reject a scrap part
}
