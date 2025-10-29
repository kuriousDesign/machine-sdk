MODULE Globals

    ! Axes & device counts
    CONST num NUM_AXES := 20;
    CONST num MAX_NUM_NAUTILUS_AXES := 20;
    CONST num NUM_DEVICES := 50;

    ! Timing & durations
    CONST clock MOMENTARY_PB := T#250MS;
    CONST num DEFAULT_TASK_DURATION_SEC := 5;

    ! Robot & part counts
    CONST num ROBOT_PART_COUNT := 2;
    CONST num RECIPE_COUNT_MAX := 20;
    CONST bool HIDE_LEFT_TWO_COLUMNS := TRUE;
    CONST bool HIDE_RIGHT_COLUMN := TRUE;
    CONST bool HIDE_LEFT_ONE_COLUMN := FALSE;
    CONST num SHELF_PART_COUNT := 100;
    CONST num NUM_OF_COLS := 20;
    CONST num PARTS_IN_COL := 5;
    CONST num NUM_PARTS_XFER := 10;
    CONST num NUM_PARTS_IB := 51;
    CONST num NUM_PARTS_PER_FIXTURE := 8;

    ! Logging & tasks
    CONST num NUM_LOG_ENTRIES := 25;
    CONST num TASK_LIST_LEN := 25;
    CONST num TASK_STORE_LEN := 125; ! 100 + TASK_LIST_LEN
    CONST num TASK_LOG_LEN := 25;
    CONST num STATION_COUNT := 6;
    CONST num TOP_PRIORITY_COUNT := 7;
    CONST num PARTDATA_COUNT := 25;
    CONST num USERFRAME_COUNT := 10;
    CONST num NUM_ENTRIES_MACHINE_LOG := 100;

    ! Machine & IO limits
    CONST num MACHINE_FAULTCODEARRAY_LEN := 50;
    CONST num MAX_NUM_INPUTS := 50;
    CONST num MAX_NUM_HW_CARDS := 16;

    ! Time conversion
    CONST num SYSTIME_TO_UTC_SCALAR := 10000000; ! 10E6, RAPID uses num/ULINT as needed

ENDMODULE
