export enum AxisDriveTypes {
    STINGRAY = 0,
    BOSCH_FSOE = 1
}

//ignored-
export interface AxisCfg {
    DriveType: AxisDriveTypes;
    DriveId: number; // use either the BoschDrives enum or the Nautilus Drives enum
    Unit: string;
    AtPosTol: number; // note: this may already be defined in the drive (if using bosch fsoe) difference between data.actualPosition and data.targetPosition below threshold and used during validation to determine if checked position matches the stored mastering position


    IgnoreSoftwareLimits: boolean;
    IgnoreLimitSwitches: boolean;

    Ignores: boolean[]; // use AxisPermissives ENUM

    SoftwareLimitPositive: number; // this is the limit that will produce an error if exceeded
    SoftwareLimitNegative: number;
    OperationalPositionMin: number; // this is the nominal operation minimum
    OperationalPositionMax: number;
    HardStopPositive: number;
    HardStopNegative: number;
    SensorPositions: number[];
    //ignored-MotionProfiles: AxisMotionProfileData[]; // normal use case motion profiles, not e-stopping or error related
    AxisType: number;

    //ignored-ValidationSensor: AxisSensors; // used for homing or position verification
    //ignored-PositionReferencingMethod: PositionReferencingMethods; // homing or position verification
    VerificationSensorOffsetFromZero: number;
    SearchDistance: number; // allowed distance to search beyond operation limit to find the validation sensor
    hasRailBrakes: boolean;
    AutoPositionVerifyDuringReset: boolean; // set to true if you want the axis to automatically try to position verify during reset
    hasDynamicPositiveLimit: boolean;
    hasDynamicNegativeLimit: boolean;

    HomingToHardstopDir: number; // use -1.0 for negative and 1.0 for positive
    MaxCurrentWhileHomingToHardstop: number; // if homing in neg direction, then use a negative value only used if using home_to_hardstop_<dir> as the position verification method.
    MaxCurrentNormalOperation: number; // max current allowed during normal operation, ignore unless using homing to hardstop

    updateScalingIsNeeded: boolean; // set this to TRUE to enforce scaling changes
    //ignored-SoftMotionScalingParams: SoftMotionScalingParams;

    // DUAL AXIS ONLY
    GearingPositionTolerance: number; // mm, (dual Axis only) used for checking differences between geared axes while synced
    AxesPositionToleranceForSkew: number; // mm, (dual Axis only) used for checking if axes have gone beyond their mechanical limit for position differences before ruining the machine

    ShippingPosition: number; // mm, this should be something that is between the hardstop positions
    KeepMasteredStatusAtStartup: boolean; // if TRUE, this will maintain the mastered status/homed status of the axis after a power cycle
}

export interface AxisMotionProfileData {
    speed: number; // this must be greater than zero
    acceleration: number; // used for accel and decel
    jerk: number;
}



export interface AxisSts {
    Cfg: AxisCfg; // read-only

    actualPosition: number;
    // actualSetpoint: number; // use the enum associated with setpoints
    actualVelocity: number;
    actualAcceleration: number;
    ActualTorque: number;
    ActualCurrent: number;
    //ignored-ActualControllerMode: SMC_CONTROLLER_MODE;

    ActiveStreamType: number;

    AxisRefState: number; // uses SMC_AXIS_STATE;

    targetPosition: number; // used for MoveAbs or MoveRel, change value before issuing your mc cmd, result should be echoed in setPosition after corresponding MC Cmd
    targetSetpoint: number;
    targetVelocity: number; // used for jogging, change value before issuing your mc cmd, result should be echoed in setVelocity after corresponding MC Cmd

    targetDir: number; // used for jogging and moving, 1.0 for fwd and -1.0 for bckwd
    // targetAccel: number;
    targetMaxCurrent: number; // only used for homing to hardstop of swing arms
    targetTorque: number; // not used
    targetMotionProfileId: number;
    targetMotionProfileData: AxisMotionProfileData; // used for moving and jogging, change value before issuing your mc cmd, result should be echoed in setVelocity/setAcceleration after corresponding MC Cmd
    TargetControllerMode: number; // uses SMC_CONTROLLER_MODE;

    setPosition: number; // this value is updated by the drive
    setVelocity: number; // this value is updated by the drive
    setAccel: number; // this value is updated by the drive
    setTorque: number; // this value is updated by the drive
    setJerk: number; // this value is updated by the drive

    // STATUS BITS
    isEnabled: boolean;
    isHoming: boolean; // used to indicate that axis in the process of homing or used to indicate that axis is in the process of verifying its position
    isHomed: boolean; // used to indicate that axis has homed to a sensor and updated its position accordingly or used to indicate that position has been verified, useful when using absolute encoders that don't require homing (overwriting of known zero position)
    isMastered: boolean; // used to indicate that axis has been mastered, useful for axes that require position verification as their position referencing method

    mutingSwAndHwLimitsWhileHoming: boolean;
    //ignored-DriveHwLimitsEnforcement: AxisLimitEnforcements; // this status is set after calling the set software limits
    //ignored-DriveSwLimitsEnforcement: AxisLimitEnforcements;

    // MOTION STATES - these are all mutually exclusive
    isStandstill: boolean; // axis is not moving (within zero velocity threshold)
    isAtPosAndStandstill: boolean; // axis is at the target position and at standstill
    isJogging: boolean; // axis is rotating with velocity cmd
    isMoving: boolean; // axis is moving to a position
    isGeared: boolean; // axis is moving synchronously with another axis
    isTorquing: boolean; // axis is in torque mode and actively applying torque

    // DRIVE RELATED
    DriveStatusMsg: string;
    DriveHasError: boolean;
    DriveIsStoppingMotor: boolean; // is True when motor faults and starts stopping itself
    DriveStoppedMotor: boolean; // True after motor finishes stopping itself. clears when you reset the motor

    SoftMotionHasError: boolean;
    SoftMotionErrorId: number; // uses SMC_ERROR;

    ConfiguredSoftLimitTravelRange: number; // determined by the sw limits;
    HomeOffsetFromZero: number; // units, this is a read-only value, the retain var HomeOffsetFromZero is used (this might be deprecated)

    CalculatedStoppingPosition: number;
    TravelLimitNegative: number;
    TravelLimitPositive: number;

    //ignored-Permissives: AxisPermissiveStsData[]; // Array of NUM_PERMISSIVES length
    RestrictedToSlow: boolean; // (TODO: replace this with NOT Permissives.FullSpeed_OK) used to speed limit the axis when it is not homed or has software and hardware limits disabled

    //ignored-RailBrakes: RailBrakeInputs;
    Sensors: boolean[]; // Array of MAX_NUM_SENSORS length

    targetEncoderSetpoint: number;

    targetMasterAxisDevId: number;
    targetMasterAxisRefPointer: any; // TypeScript doesn't have direct pointer equivalents
    actualMasterAxisDevId: number;
    actualMasterAxisRefPointer: any; // TypeScript doesn't have direct pointer equivalents

    RecordedPosition: number; // use this to save position information, useful for mastering and position verification processes
    //ignored-Interlocks: AxisInterlocks;

    ignoringRailBrakes: boolean;
    EtherCatComms_OK: boolean;

    // ROBOT CONTROLLER STATE
    RcHomingState: number; // uses enumRcAxisHomingState;
    RcControlMode: number; // uses enumRcAxisMode;

    isStreaming: boolean;

    // DUAL AXIS ONLY
    PositionDifference: number; // (Dual Axis Only) difference between the axes: axis1 - axis2
    AxesPositionDifference_OK: boolean; // (Dual Axis Only)status stating difference in position between two axes while moving or idle is acceptable, based on cfg.GearingPositionTolerance
    AxesPositionDifference_CORRECTABLE: boolean; // (Dual Axis Only)status stating difference in position between two axes able to be automatically corrected, based on cfg.AxesPositionToleranceForSkew
    SkippingPositionCorrectionBeforeGearing: boolean; // (Dual Axis Only)this is usually TRUE if the axes are first being setup
    DualAxisStopType: number; // uses DualAxisStopTypes; // (Dual Axis Only)
}


export enum AxisMethods {
    NONE = 0,
    JOG_CMD = 1,
    MOVE_ABS_CMD = 2,
    MOVE_OP_MIN_MAX = 3,
    ENFORCE_RAIL_BRAKES = 4,
    START_STREAM = 5,
    STOP = 6
}

export function axisMethodIdToString(method: AxisMethods): string {
    switch (method) {
        case AxisMethods.NONE:
            return "None";
        case AxisMethods.JOG_CMD:
            return "Jog Command";
        case AxisMethods.MOVE_ABS_CMD:
            return "Move Absolute Command";
        case AxisMethods.MOVE_OP_MIN_MAX:
            return "Move Operational Min/Max";
        case AxisMethods.ENFORCE_RAIL_BRAKES:
            return "Enforce Rail Brakes";
        case AxisMethods.START_STREAM:
            return "Start Stream";
        case AxisMethods.STOP:
            return "Stop";
        default:
            return "Unknown";
    }
}

export enum AxisProcesses {
    NONE = 0,
    VERIFY_POSITION = 1,
    PERFORM_MASTERING = 2,
    BACK_AND_FORTH = 3,
    HOME_TO_HARDSTOP = 4,
    ALIGNMENT_ANALYSIS_MOVE = 5,
    MOVE_TO_SHIPPING_POSITION = 6
}

export function axisProcessIdToString(process: AxisProcesses): string {
    switch (process) {
        case AxisProcesses.NONE:
            return "None";
        case AxisProcesses.VERIFY_POSITION:
            return "Verify Position";
        case AxisProcesses.PERFORM_MASTERING:
            return "Perform Mastering";
        case AxisProcesses.BACK_AND_FORTH:
            return "Back and Forth";
        case AxisProcesses.HOME_TO_HARDSTOP:
            return "Home to Hardstop";
        case AxisProcesses.ALIGNMENT_ANALYSIS_MOVE:
            return "Alignment Analysis Move";
        case AxisProcesses.MOVE_TO_SHIPPING_POSITION:
            return "Move to Shipping Position";
        default:
            return "Unknown";
    }
}
