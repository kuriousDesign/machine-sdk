import { Color } from "../enums/Colors";
import { States, PartState } from "../enums/States";

export function deviceStateToColorMap(state: States): Color {
  const colorMap: { [key in States]: Color } = {
    [States.KILLED]: Color.Black,
    [States.INACTIVE]: Color.Inactive,
    [States.RESETTING]: Color.Resetting,
    [States.IDLE]: Color.Idle,
    [States.RUNNING]: Color.Running,
    [States.STOPPING]: Color.Processing,
    [States.DONE]: Color.Done,
    [States.ABORTING]: Color.Error,
    [States.MANUAL]: Color.Manual,
    [States.PAUSED]: Color.Processing,
    [States.ERROR]: Color.Error,
    [States.UNKNOWN]: Color.Error,
  };

  return colorMap[state];
}

export function partStateToColorMap(state: PartState): Color {
  const colorMap: { [key in PartState]: Color } = {
    [PartState.Empty]: Color.Empty,
    [PartState.Raw]: Color.Raw,
    [PartState.DeburrBottomStarted]: Color.Processing,
    [PartState.DeburrBottomFinished]: Color.DeburrBottomFinished,
    [PartState.DeburrTopStarted]: Color.Processing,
    [PartState.Deburred]: Color.Deburred,
    [PartState.MachiningStarted]: Color.Processing,
    [PartState.Machined]: Color.Machined,
    [PartState.WashStarted]: Color.Processing,
    [PartState.Washed]: Color.Processing,
    [PartState.DryStarted]: Color.Processing,
    [PartState.Dryed]: Color.Dryed,
    [PartState.Finished]: Color.Finished,
    [PartState.Scrapped]: Color.Scrapped,
    [PartState.Error]: Color.Error,
  };

  return colorMap[state];
}
