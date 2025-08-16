import { Color } from "../enums/Colors";
import { DeviceState, PartState } from "../enums/States";

export function deviceStateToColorMap(state: DeviceState): Color {
  const colorMap: { [key in DeviceState]: Color } = {
    [DeviceState.Killed]: Color.Black,
    [DeviceState.Inactive]: Color.Inactive,
    [DeviceState.Resetting]: Color.Resetting,
    [DeviceState.Idle]: Color.Idle,
    [DeviceState.Running]: Color.Running,
    [DeviceState.Stopping]: Color.Processing,
    [DeviceState.Done]: Color.Done,
    [DeviceState.Aborting]: Color.Error,
    [DeviceState.Manual]: Color.Manual,
    [DeviceState.Paused]: Color.Processing,
    [DeviceState.Faulted]: Color.Error,
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
