/// <reference path="../Participants.Participant/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":2226057873},{"kind":"capability","capability":"participant","orCapability":""}]
*/


declare interface Participants extends Module {

/**
```
(get) me: Promise<Participant>
(set) (Not Available)
```

Returns the current user's participant information.
*/
me: Promise<Participant>

/**
```
(get) peersCount: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating the number of peer participants.
*/
peersCount: ScalarSignal

/**
```
getAllPeers(): Promise<Array<Participant>>
```

Return all peer `Participant`s in the current session.
*/
getAllPeers(): Promise<Array<Participant>>

/**
```
getPeerById(id: string): Promise<Participant>
```

Returns the `Participant` indicated by its unique identifier
*/
getPeerById(id: string): Promise<Participant>

/**
```
onPeerAdded(): EventSource<Participant>
```

Return an event source that receives a new event when a new participant is added.
*/
onPeerAdded(): EventSource<Participant>

}
