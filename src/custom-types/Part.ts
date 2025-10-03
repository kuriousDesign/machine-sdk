import { PartStateDeprecated as PartStateDeprecated } from "../enums";



// TYPE PartValidationData :
// STRUCT
// 	State:INT;
// 	PreWeightKg:LREAL;
// 	PostWeightKg:LREAL;
// 	LinerWeightKg:LREAL;
// END_STRUCT
// END_TYPE


// TYPE PartData :
// STRUCT
// 	ProcessSts:INT;//PartStates enum
// 	Validation:PartValidationData;
// 	LoadedBadSensor:BOOL; //marks if loaded into system with bad part present sensor
// 	FixtureLocationWhenLoaded:INT; //LocationIds enum, where this part was loaced
// 	CurrentLocation:INT; //LocationIds enum, this is also the same as the partIndex of the Machine.PartData[partIndex]
// 	InFixture:BOOL; //CurrentLocation = FixtureLocationWhenLoaded
	
// 	//RecipeData:PartRecipeData;
// END_STRUCT
// END_TYPE



export interface PartData {
    processSts: number; // PartStates enum
    validation: PartValidationData;
    loadedBadSensor: boolean; // marks if loaded into system with bad part present sensor
    fixtureLocationWhenLoaded: number; // LocationIds enum, where this part was loaced
    currentLocation: number; // LocationIds enum, this is also the same as the partIndex of the Machine.PartData[partIndex]
    inFixture: boolean; // CurrentLocation = FixtureLocationWhenLoaded
}

export interface PartValidationData {
    state: number; // PartStates enum
    preWeightKg: number; // LREAL
    postWeightKg: number; // LREAL
    linerWeightKg: number; // LREAL
}



export interface PartDataDeprecated {
  cncPreOp: [PartStateDeprecated, PartStateDeprecated];
  cnc: [PartStateDeprecated, PartStateDeprecated];
  cncPostOp: [PartStateDeprecated, PartStateDeprecated];
  doneShelf: PartStateDeprecated[];
  rawShelf: PartStateDeprecated[];
  robot: [PartStateDeprecated, PartStateDeprecated];
  washer: [PartStateDeprecated, PartStateDeprecated];
  hmiEditingAllowed: boolean;
}
