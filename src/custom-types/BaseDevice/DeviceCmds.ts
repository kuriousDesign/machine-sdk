export enum DeviceCmds {
    NONE = 0,
    RESET = 1, // initializes device to idle
    STOP = 2, // takes device from running to idle
    CLEAR = 3, // clears faults
    KILL = 4, // takes device to aborting then killed, holds at killed until cmd is set FALSE
    PAUSE = 5, // pauses the current task
    UNPAUSE = 6, // Unpauses the current task
    START = 7, // go from idle to running
    TAKE_CONTROL = 8, // used to request control over device
    RELEASE_CONTROL = 9, // used to release control over device
    START_RECORDING_LOGS = 10, // writes to Machine.RecordedLogs
    STOP_RECORDING_LOGS = 11
}

export function deviceCmdToString(cmd: DeviceCmds): string {
    switch (cmd) {
        case DeviceCmds.NONE:
            return "None";
        case DeviceCmds.RESET:
            return "Reset";
        case DeviceCmds.STOP:
            return "Stop";
        case DeviceCmds.CLEAR:
            return "Clear";
        case DeviceCmds.KILL:
            return "Kill";
        case DeviceCmds.PAUSE:
            return "Pause";
        case DeviceCmds.UNPAUSE:
            return "Unpause";
        case DeviceCmds.START:
            return "Start";
        case DeviceCmds.TAKE_CONTROL:
            return "Take Control";
        case DeviceCmds.RELEASE_CONTROL:
            return "Release Control";
        case DeviceCmds.START_RECORDING_LOGS:
            return "Start Recording Logs";
        case DeviceCmds.STOP_RECORDING_LOGS:
            return "Stop Recording Logs";
        default:
            return "Unknown Command";
    }
}
