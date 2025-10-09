import { PartStateDeprecated, Page } from "../enums";
import { ButtonBar, StatusBar } from "./HMI";
import { PartDataDeprecated } from "./Part";
import { Device } from "./BaseDevice/Device";
import { GlobalConstants } from "./GlobalConstants";
import {
  RackData,
  RackHmiPbs,
  RecipeData,
  RecipeManagerPbs,
  SystemFaultData,
  TaskQueue,
  UserData,
  UserManagerFB,
} from ".";
import { RobData } from "./Devices/Robot";

export enum NodeId {
  // new node ids
  ButtonBar = "Main.HMI.ButtonBar",
  StatusBar = "Main.HMI.StatusBar",
  RackPbs = "Main.HMI.RackPbs",
  ROB = "Main.ROB",
  CNC = "Main.CNC",
  DBRR = "Main.DBRR",
  WASH = "Main.WASH",
  PartData = "Main.PartData",
  TaskQueue = "Main.TaskQueue",
  GlobalConstants = "GlobalConstants", // TODO: add this to monitored items
  MachineUser = "Machine.User",
  MachineErrors = "Machine.Errors",
  MachineWarnings = "Machine.Warnings",
  RackData = "Main.RackData",
  RecipeData = "Main.RecipeData",
  ActiveJobRecipe = "Main.Job.ActiveRecipe",
  RecipeManagerState = "Main.RecipeManagerFB.State",
  RecipeManagerPbs = "Main.RecipeManagerFB.Pbs",
  RemoteControlPage = "Main.HMI.RemoteControlPage",
  RobData = "Main.RobData",

  // TODO: add following to montored items, correctly
  UserManagerFB = "Main.UserManagerFB",
}

export interface AppState {
  [NodeId.StatusBar]: StatusBar;
  [NodeId.ButtonBar]: ButtonBar;
  [NodeId.RackPbs]: RackHmiPbs;
  [NodeId.ROB]: Device;
  [NodeId.CNC]: Device;
  [NodeId.DBRR]: Device;
  [NodeId.WASH]: Device;
  [NodeId.PartData]: PartDataDeprecated;
  [NodeId.TaskQueue]: TaskQueue;
  [NodeId.GlobalConstants]: GlobalConstants;
  [NodeId.MachineUser]: UserData;
  [NodeId.MachineErrors]: SystemFaultData;
  [NodeId.MachineWarnings]: SystemFaultData;
  [NodeId.RackData]: RackData;
  [NodeId.RecipeData]: RecipeData[];
  [NodeId.ActiveJobRecipe]: RecipeData;
  [NodeId.RecipeManagerState]: number;
  [NodeId.RecipeManagerPbs]: RecipeManagerPbs;
  [NodeId.UserManagerFB]: UserManagerFB;
  [NodeId.RemoteControlPage]: Page;
  [NodeId.RobData]: RobData;
}

export enum InputNodeId {
  ButtonBarStopBtnClick = "Main.HMI.ButtonBar.StopBtn.wasClicked",
  ButtonBarUnloadbtnClick = "Main.HMI.ButtonBar.UnloadBtn.wasClicked",
  ButtonBarUnlockbtnClick = "Main.HMI.ButtonBar.UnlockBtn.wasClicked",
  ButtonBarEnergizebtnClick = "Main.HMI.ButtonBar.EnergizeBtn.wasClicked",
  ButtonBarStartbtnClick = "Main.HMI.ButtonBar.StartBtn.wasClicked",
  ButtonBarLockbtnClick = "Main.HMI.ButtonBar.LockBtn.wasClicked",
  ButtonBarResetbtnClick = "Main.HMI.ButtonBar.ResetBtn.wasClicked",
  ButtonBarJobchangeBtnClick = "Main.HMI.ButtonBar.JobChangeBtn.wasClicked",
  ButtonBarClearFaultsBtnClick = "Main.HMI.ButtonBar.ClearFaultsBtn.wasClicked",

  PartDataDoneShelf = "Main.PartData.DoneShelf",
  PartDataRawShelf = "Main.PartData.RawShelf",

  Username = "Machine.User.Username",
  Password = "Machine.User.Password",
  LoginBtnBlick = "Machine.User.HmiLoginBtn.wasClicked",
  LogoutBtnBlick = "Machine.User.HmiLogoutBtn.wasClicked",

  EditRawShelfBtnClick = "Main.HMI.RackPbs.EditRawShelfBtn.wasClicked",
  EditDoneShelfBtnClick = "Main.HMI.RackPbs.EditDoneShelfBtn.wasClicked",
  ShelfCancelBtnClick = "Main.HMI.RackPbs.CancelBtn.wasClicked",
  ShelfSaveBtnClick = "Main.HMI.RackPbs.SaveBtn.wasClicked",

  RecipeManagerEditBtnClick = "Main.recipeManagerFB.pbs.EditBtn.wasClicked",
  RecipeManagerChangeBtnClick = "Main.recipeManagerFB.pbs.ChangeBtn.wasClicked",
  RecipeManagerJobSetupBtnClick = "Main.recipeManagerFB.pbs.JobSetupBtn.wasClicked",
  RecipeManagerActivateBtnClick = "Main.recipeManagerFB.pbs.ActivateBtn",
  RecipeManagerCancelBtnClick = "Main.recipeManagerFB.pbs.CancelBtn",
  RecipeManagerStartSetupBtnClick = "Main.recipeManagerFB.pbs.StartSetupBtn",
  RecipeManagerFinishSetupBtnClick = "Main.recipeManagerFB.pbs.FinishSetupBtn",

  RecipeData = "Main.RecipeData",
  ActiveJobRecipe = "Machine.Job.ActiveRecipe",
  JobBatchQuantity = "Machine.Job.BatchQty",

  ActivePage = "Main.HMI.ActivePage",

  CncPart1 = "Main.PartData.Cnc[0]",
  CncPart2 = "Main.PartData.Cnc[1]",
  PreOpPart1 = "Main.PartData.CncPreOp[0]",
  PreOpPart2 = "Main.PartData.CncPreOp[1]",
  PostOpPart1 = "Main.PartData.CncPostOp[0]",
  PostOpPart2 = "Main.PartData.CncPostOp[1]",
  RobotPart1 = "Main.PartData.Robot[0]",
  RobotPart2 = "Main.PartData.Robot[1]",
}
