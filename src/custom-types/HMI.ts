import { FaultCodeData } from "./Machine";
import { BannerMode, Color, DeviceState, VisibilityState } from "..";


export interface ComponentAnimation {
  visibility: VisibilityState; //enum
  needsExpertUser: boolean; //requires expert user to be active user in order to function
  backgroundColor: Color; //enum
  accentColor: Color; //enum
  fontColor: Color; //enum
  wasClicked: boolean; //this is set by the UI and reset by the PLC
}

export interface ButtonBar {
  stopBtn: ComponentAnimation;
  unloadBtn: ComponentAnimation;
  loadBtn: ComponentAnimation;
  unlockBtn: ComponentAnimation;
  startBtn: ComponentAnimation;
  lockBtn: ComponentAnimation;
  resetBtn: ComponentAnimation;
  jobChangeBtn: ComponentAnimation;
  clearFaultsBtn: ComponentAnimation;
  energizeBtn: ComponentAnimation;
}

export interface StatusBar {
  jobName: string;
  statusMsg: DeviceState;
  status: number;
  cncTimeLeft: number[]; // get the second element in the array
  goodCnt: number;
  batchQty: number;
  dateAndTime: string; //format : 1970-01-01T00:00:00.000Z
  bannerMode: BannerMode;
  faultCodeData: FaultCodeData;
}

export interface RackHmiPbs {
  editRawShelfBtn: ComponentAnimation;
  editDoneShelfBtn: ComponentAnimation;
  cancelBtn: ComponentAnimation;
  saveBtn: ComponentAnimation;
}

export interface HmiData {
  buttonBar: ButtonBar;
  statusBar: StatusBar;
  rackPbs: RackHmiPbs;
  heartbeatPLC: number;
  heartbeatHMI: number;
}
