/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"callLayout","orCapability":""},{"kind":"introducedBy","version":4135766224}]
*/


declare interface CallLayout extends Module {

/**
```
(get) composedLocally: BoolSignal
(set) composedLocally: BoolSignal
```

Controls whether the Call Layout is composed within this Spark effect.
If this is set to `true` then this effect is responsible for laying out
the call view within the self-view buffer.
*/
composedLocally: BoolSignal

/**
```
(get) enforceSharedByAll: BoolSignal
(set) enforceSharedByAll: BoolSignal
```

Controls whether this effect is enabled only when all callers are participating in the effect.
*/
enforceSharedByAll: BoolSignal

/**
```
(get) maximumParticipantCount: ScalarSignal
(set) maximumParticipantCount: ScalarSignal
```

Controls the maximum number of participants in an effect. If this is exceeded then the effect will
be suspended.
*/
maximumParticipantCount: ScalarSignal

}
