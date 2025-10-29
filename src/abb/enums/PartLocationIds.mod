MODULE PartLocationIds

    ! Define the part locations as a record
    CONST record PartLocationRec :=
    [
        None := 0,
        LeftFixture_P1 := 1,
        RightFixture_P9 := LeftFixture_P1 + GCs.NUM_PARTS_PER_FIXTURE,
        RobotGripper := RightFixture_P9 + GCs.NUM_PARTS_PER_FIXTURE,
        Lost := RobotGripper + 1
    ];

ENDMODULE
