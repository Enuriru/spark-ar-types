/// <reference path="../Participants.Participant/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":2226057873},{"kind":"capability","capability":"participant","orCapability":""}]
*/


declare interface Participants extends Module {

/**
```
(get) otherParticipantCount: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating the number of other participant excluding participant in self view.
*/
otherParticipantCount: ScalarSignal

/**
```
(get) self: Promise<Participant>
(set) (Not Available)
```

Returns the current user's participant information.
*/
self: Promise<Participant>

/**
```
getAllOtherParticipants(): Promise<Array<Participant>>
```

Return all other `Participant`s in the current session.
*/
getAllOtherParticipants(): Promise<Array<Participant>>

/**
```
getParticipantById(id: string): Promise<Participant>
```

Returns the `Participant` indicated by its unique identifier
*/
getParticipantById(id: string): Promise<Participant>

/**
```
onOtherParticipantAdded(): EventSource<Participant>
```

Return an event source that receives a new event when a new participant is added.
*/
onOtherParticipantAdded(): EventSource<Participant>

}
