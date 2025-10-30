!************************************************************
! RAPID MAIN PROGRAM — State Machine Framework (PLC-style)
!************************************************************
MODULE MainModule

    !========================================================
    ! GLOBAL STATE VARIABLES
    !========================================================
    PERS num StepNum := States.INACTIVE;
    VAR bool FirstScan := TRUE;
    VAR bool StepMode := FALSE;
    VAR bool GoToNextStep := FALSE;
    VAR clock StepStartTime;

    !========================================================
    ! SIMULATED DEVICE & ENGINE FLAGS (replace with real I/O)
    !========================================================
    VAR bool ErrorPresent := FALSE;
    VAR bool ChildrenErrorPresent := FALSE;
    VAR bool InstantKill_ON := FALSE;
    VAR bool Reset_REQ := FALSE;
    VAR bool Clear_REQ := FALSE;
    VAR bool AutoReset := FALSE;

    VAR bool RequestTask := FALSE;
    VAR bool RequestProcess := FALSE;

    !========================================================
    ! HELPER PROCEDURES / FUNCTIONS
    !========================================================
    PROC preRun()
        ! Overhead logic before state processing
    ENDPROC

    PROC updateStatus()
        ! Update status or communications
    ENDPROC

    PROC postRun()
        ! Cleanup or end-of-cycle logic
    ENDPROC

    PROC desc(msg STRING)
        TPWrite "STATE: "\msg;
    ENDPROC

    PROC setNextStep(nextState num)
        StepNum := nextState;
        FirstScan := TRUE;
        StepStartTime := Clock();
        TPWrite "→ Next State: "\numtostr(nextState, 0);
    ENDPROC

    FUNC bool Aborting()
        ! Insert abort handling logic
        RETURN TRUE;
    ENDFUNC

    FUNC bool Resetting()
        ! Insert reset logic
        RETURN TRUE;
    ENDFUNC

    FUNC bool Stopping()
        ! Insert stop logic
        RETURN TRUE;
    ENDFUNC

    PROC Clear()
        ErrorPresent := FALSE;
        ChildrenErrorPresent := FALSE;
        TPWrite "Cleared errors";
    ENDPROC

    !========================================================
    ! MAIN EXECUTION LOOP
    !========================================================
    PROC main()
        TPWrite "=== Starting Main State Machine ===";
        StepStartTime := Clock();

        WHILE TRUE DO
            preRun;
            updateStatus;

            ! Step mode logic
            IF StepMode THEN
                IF GoToNextStep THEN
                    GoToNextStep := FALSE;
                    FirstScan := TRUE;
                ENDIF
            ENDIF

            !----------------------------------------------------
            ! STATE MACHINE
            !----------------------------------------------------
            SELECT StepNum

            CASE States.ABORTING:
                desc("ABORTING");
                IF Aborting() THEN
                    setNextStep(States.KILLED);
                ENDIF

            CASE States.KILLED:
                desc("KILLED");
                IF NOT InstantKill_ON THEN
                    IF ErrorPresent OR ChildrenErrorPresent THEN
                        setNextStep(States.ERROR);
                    ELSE
                        setNextStep(States.INACTIVE);
                    ENDIF
                ENDIF

            CASE States.ERROR:
                desc("ERROR");
                IF NOT ErrorPresent AND NOT ChildrenErrorPresent THEN
                    setNextStep(States.INACTIVE);
                ELSIF Clear_REQ THEN
                    Clear;
                ENDIF

            CASE States.INACTIVE:
                desc("INACTIVE");
                IF ErrorPresent OR ChildrenErrorPresent THEN
                    setNextStep(States.ERROR);
                ELSIF Reset_REQ OR AutoReset THEN
                    setNextStep(States.RESETTING);
                ENDIF

            CASE States.RESETTING:
                desc("RESETTING");
                IF Resetting() THEN
                    setNextStep(States.IDLE);
                ENDIF

            CASE States.IDLE:
                desc("IDLE");
                checkForNewTaskRequest(); --> going to read the pLC variable for task Request and those task params
                SWITCH requestedTaskId  ! Pseudo-variable for requested task
                CASE RobTasks.WEIGHING:
                    PROC WeighingTask();
                    setNextStep(States.RUNNING);
                ! Idle logic here
                ! check for any task requests and transition to running if so
                ! setNextStep(States.RUNNING);

            CASE States.RUNNING:
                desc("RUNNING");
                SELECT requestedTaskId ! Pseudo-variable for requested task
                CASE 1:
                    ! Execute Task 1

            CASE States.STOPPING:
                desc("STOPPING");
                IF Stopping() THEN
                    IF ErrorPresent OR ChildrenErrorPresent THEN
                        setNextStep(States.ABORTING);
                    ELSE
                        setNextStep(States.IDLE);
                    ENDIF
                ENDIF

            CASE States.DONE:
                desc("DONE");
                ! Final state logic

            CASE States.PAUSED:
                desc("PAUSED");
                ! Handle paused logic

            CASE States.MANUAL:
                desc("MANUAL");
                ! Handle manual mode logic

            DEFAULT:
                desc("UNKNOWN STATE");
                setNextStep(States.INACTIVE);

            ENDSELECT

            postRun;
            FirstScan := FALSE;
            WaitTime 0.1;  ! 100ms scan cycle
        ENDWHILE
    ENDPROC

ENDMODULE
