/// <reference path="../Participants.Participant/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":2226057873},{"kind":"capability","capability":"participant","orCapability":""}]
*/


/**
Exposes the ability to retrieve the participants in a video call effect. Each user on the call is considered a participant, including the host.
When a new user joins the call a new `Participant` object is added to the array returned by `getAllOtherParticipants()` and `otherParticipantCount` is increased.


Participants are not removed from the array if they leave while the call is still active. This allows individual participants to retain the same unique ID that can be referenced for the duration of the video call, even after a dropout. Similarly, `otherParticipantCount` is not decreased when a participant leaves. However, if the the video call ends then the participant array and count are both reset.


Importing this module automatically enables the <b>Participants</b> capability within the project's <b>Properties</b>.
*/
declare interface Participants extends Module {

/**
```
(get) otherParticipantCount: ScalarSignal
(set) (Not Available)
```

The total number of participants in the video call, not including the current participant (`self`), as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
To retrieve the total number of other participants active in the effect, use `otherParticipantsInSameEffectCount` instead.
*/
otherParticipantCount: ScalarSignal

/**
```
(get) otherParticipantsInSameEffectCount: ScalarSignal
(set) (Not Available)
```

The total number of participants active in the effect, not including the current participant (`self`), as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
To retrieve the total number of other participants in the video call whether they are active in the effect or not, use `otherParticipantCount` instead.
*/
otherParticipantsInSameEffectCount: ScalarSignal

/**
```
(get) self: Promise<Participant>
(set) (Not Available)
```

The current user, as a [`Participant`](/classes/ParticipantsModule.Participant) object.
*/
self: Promise<Participant>

/**
```
getAllOtherParticipants(): Promise<Array<Participant>>
```

Returns an array of [`Participant`](/classes/ParticipantsModule.Participant) objects containing all of the other participants in the video call, not including the current user (`self`).
*/
getAllOtherParticipants(): Promise<Array<Participant>>

/**
```
getOtherParticipantsInSameEffect(): Promise<Array<Participant>>
```

Returns an array of [`Participant`](/classes/ParticipantsModule.Participant) objects containing all of the participants active in the effect, not including the current user (`self`).
*/
getOtherParticipantsInSameEffect(): Promise<Array<Participant>>

/**
```
getParticipantById(id: string): Promise<Participant>
```

Returns the [`Participant`](/classes/ParticipantsModule.Participant) object attached to the unique ID specified.
A `Participant` object's unique ID is accessible via its `id` property. For example:

```
const otherParticipants = await Participants.getAllOtherParticipants();
const participant = otherParticipants[0];
const participantId = participant.id;

// Retrieves the above participant via its unique ID
const sameParticipant = Participants.getParticipantById(participantId)
```
*/
getParticipantById(id: string): Promise<Participant>

/**
```
onOtherParticipantAdded(): EventSource<Participant>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) object that emits a new [`Participant`](/classes/ParticipantsModule.Participant) object each time a new participant joins the video call. For example:
```
Participants.onOtherParticipantAdded().subscribe((participant) => {
    // const newParticipantId = participant.id;
});
```
*/
onOtherParticipantAdded(): EventSource<Participant>

}



/**

//============================================================================
// Retrieves the participants in the video call and logs the participant
// count in the console.
//
// Required project capabilities:
// - Participant (auto added on module import)
//
//============================================================================


// Load in the required modules
const Participants = require('Participants');
const Diagnostics = require('Diagnostics');


(async function() { // Enable async/await in JS [part 1]

 //==========================================================================
 // Retrieve the current user
 //==========================================================================

 // Create a reference to the current participant and log their unique ID
 // to the console
 const self = await Participants.self;
 Diagnostics.log(self.id);


 //==========================================================================
 // Retrieve other participants on the call
 //==========================================================================

 const participants = await Participants.getAllOtherParticipants();

 // Log the array of participants on the call
 //Diagnostics.log(participants);


 //==========================================================================
 // Retrieve the number of other participants on the call
 //==========================================================================

 // Log the number of other participants on the call to the console
 // This value does not include the current user, 'self'
 const participantsCount = Participants.otherParticipantCount;

 participantsCount.monitor({fireOnInitialValue: true}).subscribe((event) => {
   Diagnostics.log(`Other participants count: ${event.newValue}`);
 });


 //==========================================================================
 // Retrieve other participants active in the effect
 //==========================================================================

 // Retrieve active participants in the effect not including self.
 const participantsInEffect = await Participants.getOtherParticipantsInSameEffect();
 Diagnostics.log(participantsInEffect);


 //========================================================================
 // Retrieve the number of other participants active in the effect
 //========================================================================

 // Log the number of other participants in the effect to the console.
 // This value does not include the current user, 'self'
 const participantsInEffectCount = Participants.otherParticipantsInSameEffectCount;

 participantsInEffectCount.monitor({fireOnInitialValue: true}).subscribe((event) => {
   Diagnostics.log(`Other participants in effect: ${event.newValue}`);
 });


 //==========================================================================
 // Monitor when a participant joins/leaves the call or effect
 //==========================================================================

 // Reference the ID of the first participant from the participants array
 const firstParticipant = participants[0];

	// Monitor when the first participant joins or leaves the call
 firstParticipant.isActiveInCall.monitor({fireOnInitialValue: true}).subscribe((event) => {
   Diagnostics.log(`First participant is active in call: ${event.newValue}`);
 });

	// Monitor when the first participant joins or leaves the effect
 firstParticipant.isActiveInSameEffect.monitor({fireOnInitialValue: true}).subscribe((event) => {
   Diagnostics.log(`First participant is active in effect: ${event.newValue}`);
 });

})(); // Enable async/await in JS [part 2]

*/