export enum Color {
  Transparent = -1,
  //uses ROYGBIV FOR 1-7
  Black = 0, //#000000,
  Red = 1,
  Orange = 2,
  Yellow = 3, //#FFFF00,
  Green = 4,
  Blue = 5,
  Indigo = 6,
  Violet = 7,
  Gray = 8, //#F2F2F2,
  White = 9,
  //Light Colors
  LightBlack = 10,
  LightRed = 11, //#FF6B6B
  LightOrange = 12,
  LightYellow = 13,
  LightGreen = 14,
  LightBlue = 15,
  LightIndigo = 16,
  LightViolet = 17,
  LightGray = 18,
  LightWhite = 19, //#7F7F7F,
  //Dark Colors
  DarkRed = 201, //#D20000
  DarkYellow = 203, //#F0EA00
  DarkGray = 208,

  //Bg Colors
  Light = 1001,
  Dark = 1002,

  //Action Push Button Background Colors
  ActionBtn1 = 21, //#F7A143,
  ActionBtn2 = 22, //#8FAADC,
  ActionBtn3 = 23, //#FF0000, red
  ActionBtn4 = 24,
  ActionBtn5 = 25,
  ActionBtn6 = 26,

  //General status
  Good = 31,
  Warn = 32, //#FFFF00,
  Error = 33, //#FF0000,

  //Device states
  Killed = 40,
  Inactive = 41,
  Resetting = 42,
  Idle = 43, //#D9D9D9,
  Running = 44, //#5CEE82,
  Done = 45,
  Aborting = 46,
  Manual = 47,
  Paused = 48,
  Faulted = 49,
  Stopping = 440,

  //Task List Status
  TaskDone = 50, //#C5E0B4,
  TaskActive = 51, //#8FAADC,
  TaskFuture = 52, //#D9D9D9, same as Idle

  // Mfg-specific colors
  FanucYellow = 60, //#FFFF00,

  //Part Status
  Empty = 100, //#373737,
  Processing = 101, //#ED7D31,
  Raw = 102, //#A6A6A6,
  Deburred = 103, //rgba(0,112,192,0.4),
  Machined = 104, //rgba(0,112,192,0.6),
  Washed = 105, //rgba(0,112,192,0.8),
  Dryed = 106, //rgba(0,112,192,1.0),
  Scrapped = 109, //#FF0000, same as Error
  Finished = 110, //#5CEE82, same as Running
  DeburrBottomFinished = 111, //rgba(0,112,192,0.2),
}
