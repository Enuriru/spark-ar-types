/// <reference path="../Reactive.BoolSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":2226057873},{"kind":"capability","capability":"participant","orCapability":""}]
*/


/**
Exposes details of an individual participant in a video call effect.
*/
declare interface Participant {

/**
```
(get) id: string
(set) (Not Available)
```

The unique identifier for the specified participant.
You can pass this ID into the `getParticipantById()` method exposed by the [`Participants`](/classes/ParticipantsModule) module to retrieve a specific participant.


IDs are constant for the duration of the video call but are not persistent across separate calls. If a participant drops out and rejoins the same video call they will retain the same ID. However, if the video call ends and a new one is started, new unique identifiers are generated for each participant.
*/
id: string

/**
```
(get) isActiveInCall: BoolSignal
(set) (Not Available)
```

Whether the specified participant is currently active in the video call, as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If a participant leaves the video call this property will return `false` but the participant will not be removed from the array returned by [`Participants.getAllOtherParticipants()`](/classes/ParticipantsModule#methods) or subtracted from the value returned by [`Participants.otherParticipantCount`](/classes/ParticipantsModule#properties).
*/
isActiveInCall: BoolSignal

/**
```
(get) isActiveInSameEffect: BoolSignal
(set) (Not Available)
```

Whether the specified participant is currently active in the same effect, as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
This is distinct from `isActiveInCall` as a participant may be active in the video call but not necessarily be active in the running effect.
*/
isActiveInSameEffect: BoolSignal

}



/**

//============================================================================
// Retrieves information about the current participant and logs it to the
// console.
//
// Required project capabilities:
// - Participant (auto added on module import)
//
//============================================================================


// Load in the required modules
const Participants = require('Participants');
const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]

  // Create a reference to the current participant and log their unique ID
  // to the console
  const self = await Participants.self;
  Diagnostics.log(self.id);

  //==========================================================================
  // Create references to whether the current participant is active in the
  // effect and/or call and monitor these values in the console.
  //==========================================================================

  const isActiveInCall = self.isActiveInCall;

	 // Monitor when the participant joins or leaves the call
  isActiveInCall.monitor({fireOnInitialValue: true}).subscribe((event) => {
    Diagnostics.log(`Participant is active in call: ${event.newValue}`);
  });

  const isActiveInEffect = self.isActiveInSameEffect;

	 // Monitor when the participant joins or leaves the effect
  isActiveInEffect.monitor({fireOnInitialValue: true}).subscribe((event) => {
    Diagnostics.log(`Participant is active in effect: ${event.newValue}`);
  });

})(); // Enable async/await in JS [part 2]

*/