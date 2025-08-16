export enum VisibilityState {
  Invisible = 0,
  Visible = 1,
  FlashingFast = 2,
  FlashingMed = 3,
  FlashingSlow = 4,
  StrobingFast = 5,
  StrobingSlow = 6,
  GrowingSlow = 7,
}

export enum DeviceState {
  Faulted = -2,
  Killed = -1,
  Inactive = 0,
  Resetting = 50,
  Idle = 100,
  Running = 500,
  Stopping = 900,
  Aborting = 911,
  Paused = 999,
  Done = 1000,
  Manual = 2000,
}

export enum PartState {
  Empty = 0, //no part present
  Raw = 10,
  DeburrBottomStarted = 11,
  DeburrBottomFinished = 12,
  DeburrTopStarted = 15,
  Deburred = 20, //completely deburred, both bottom and top
  MachiningStarted = 45,
  Machined = 50,
  WashStarted = 55,
  Washed = 60,
  DryStarted = 65,
  Dryed = 70,
  Finished = 100,
  Scrapped = 911,
  Error = 999,
}

export enum TaskItemState {
  TaskDone = 48,
  TaskActive = 49,
  TaskFuture = 50,
}

export enum StatusMsg {
  Running = 0,
  Faulted = 2,
}

export enum BannerMode {
  Good = 0,
  Warning = 1,
  Faulted = 2,
}
