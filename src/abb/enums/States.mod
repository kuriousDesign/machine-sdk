!************************************************************
! States.mod — Shared State Definitions
!************************************************************
MODULE States

    CONST record StatesType
        ABORTING := -3,
        ERROR := -2,
        KILLED := -1,
        INACTIVE := 0,
        RESETTING := 50,
        IDLE := 100,
        RUNNING := 500,
        STOPPING := 900,
        PAUSED := 999,
        DONE := 1000,
        MANUAL := 1100;
    CONST StatesType States;

ENDMODULE
