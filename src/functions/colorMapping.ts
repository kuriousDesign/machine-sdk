import { Color } from "../enums/Colors";
import { States, PartStateDeprecated } from "../enums/States";

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

export function partStateToColorMap(state: PartStateDeprecated): Color {
  const colorMap: { [key in PartStateDeprecated]: Color } = {
    [PartStateDeprecated.Empty]: Color.Empty,
    [PartStateDeprecated.Raw]: Color.Raw,
    [PartStateDeprecated.DeburrBottomStarted]: Color.Processing,
    [PartStateDeprecated.DeburrBottomFinished]: Color.DeburrBottomFinished,
    [PartStateDeprecated.DeburrTopStarted]: Color.Processing,
    [PartStateDeprecated.Deburred]: Color.Deburred,
    [PartStateDeprecated.MachiningStarted]: Color.Processing,
    [PartStateDeprecated.Machined]: Color.Machined,
    [PartStateDeprecated.WashStarted]: Color.Processing,
    [PartStateDeprecated.Washed]: Color.Processing,
    [PartStateDeprecated.DryStarted]: Color.Processing,
    [PartStateDeprecated.Dryed]: Color.Dryed,
    [PartStateDeprecated.Finished]: Color.Finished,
    [PartStateDeprecated.Scrapped]: Color.Scrapped,
    [PartStateDeprecated.Error]: Color.Error,
  };

  return colorMap[state];
}
