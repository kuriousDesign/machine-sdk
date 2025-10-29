MODULE DeviceDataTypes

    ! Maximum parameters constant (from your DeviceConstants)
    CONST num MAX_NUM_PARAMS := 10;  ! replace 10 with actual value from DeviceConstants

    ! Define ProcessData record
    TYPE ProcessData
        STRUCT
            !------------------------------------------------------
            ! Parameters that must only be written by SendProcessRequest()
            !------------------------------------------------------
            UniqueActionRequestId : num;  ! DINT in ST
            RequestId : num;              ! INT in ST
            RequestParamArray : array[0..MAX_NUM_PARAMS-1] of num; ! LREAL in ST
            SenderId : num;               ! INT in ST

            !------------------------------------------------------
            ! Internal parameters
            !------------------------------------------------------
            ActiveId : num;
            ActiveName : string[255];
            LastId : num;
            firstScan : bool;
            isStepNum : num;             ! read-only in ST
            StepDescription : string[255];
            isDone : bool;
            isError : bool;
            NextStepNum : num;
            DeviceStateThatCalled : num;
            DeviceStepThatCalled : num;
            ParamArray : array[0..MAX_NUM_PARAMS-1] of num;
        END_STRUCT
    END_TYPE

ENDMODULE
