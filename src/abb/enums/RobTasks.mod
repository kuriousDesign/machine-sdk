MODULE RobTasks

    ! Define a record containing only PASSTHRU tasks
    CONST record RobTasksRec :=
    [
        RETRIEVE_TOOL := 1,          ! param0: toolId
        RETURN_TOOL := 2,            ! param0: toolId
        PICK_PART_FROM_FIXTURE := 4, ! param0: partLocationId
        WEIGH_PART := 5,             ! param0: partLocationId
        PLACE_PART_IN_FIXTURE := 6,  ! param0: partLocationId
        WIPE_APPLICATOR := 9,        ! no params
        APPLY_LINER := 10,           ! param0: partLocationId
        PHOTOGRAPH_TUBE := 12,       ! param0: partLocationId
        RELEASE_PART_AND_MOVE_TO_PERCH := 13, ! param0: partLocationId
        CALIBRATE_SQUEEGEE := 14     ! no params
    ];

ENDMODULE
