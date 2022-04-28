/// <reference path="../Reactive.BoolSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":2226057873},{"kind":"capability","capability":"participant","orCapability":""}]
*/


declare interface Participant {

/**
```
(get) id: string
(set) (Not Available)
```

Specifies the unique identifier for this participant.
*/
id: string

/**
```
(get) isActiveInCall: BoolSignal
(set) (Not Available)
```

Specifies whether this participant is active in the video call.
*/
isActiveInCall: BoolSignal

/**
```
(get) isActiveInSameEffect: BoolSignal
(set) (Not Available)
```

Specifies whether this participant is active in the same effect
as the current user.
*/
isActiveInSameEffect: BoolSignal

}
