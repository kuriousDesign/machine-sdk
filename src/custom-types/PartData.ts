import { PartState } from "../enums";
export interface PartData {
  cncPreOp: [PartState, PartState];
  cnc: [PartState, PartState];
  cncPostOp: [PartState, PartState];
  doneShelf: PartState[];
  rawShelf: PartState[];
  robot: [PartState, PartState];
  washer: [PartState, PartState];
  hmiEditingAllowed: boolean;
}
