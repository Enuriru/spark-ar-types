/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface Participant {
/**
* ```
(get) id: string
(set) (Not Available)
```

The unique identifier for the participant.
You can pass this ID into the `getParticipantById()` method exposed by the [`Participants`](/classes/ParticipantsModule) module to retrieve a specific participant.

IDs are constant for the duration of the video call but are not persistent across separate calls. If a participant drops out and rejoins the same video call they will retain the same ID. However, if the video call ends and a new one is started, new unique identifiers are generated for each participant.
*/
id: string;
/**
* ```
(get) isActiveInCall: BoolSignal
(set) (Not Available)
```

Whether the participant is currently active in the video call, as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If a participant leaves the video call this property will return `false` but the participant will not be removed from the array returned by [`Participants.getAllOtherParticipants()`](/classes/ParticipantsModule#methods) or subtracted from the value returned by [`Participants.otherParticipantCount`](/classes/ParticipantsModule#properties).

A participant being active in the call does not guarantee that they are also active in the effect. For this, use the Participant's `isActiveInSameEffect` property instead.
*/
isActiveInCall: BoolSignal;
/**
* ```
(get) isActiveInSameEffect: BoolSignal
(set) (Not Available)
```

Whether the participant is currently active in the same effect, as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
This is distinct from `isActiveInCall` as a participant may be active in the video call but not necessarily be active in the running effect.
*/
isActiveInSameEffect: BoolSignal;
/**
* ```
(get) loadStatus: StringSignal<ParticipantLoadStatus>
(set) (Not Available)
```

The participant's load status, as a [`StringSignal`](/classes/ReactiveModule.StringSignal) containing a [`ParticipantLoadStatus`](/classes/ParticipantsModule.ParticipantLoadStatus) enum value (`LOADING`, `LOADED`, `ERROR` or `OPTED_OUT`).
*/
loadStatus: StringSignal<ParticipantLoadStatus>;
}
