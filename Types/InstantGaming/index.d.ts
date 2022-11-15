/// <reference path="../Reactive.EventSource/index.d.ts" />


/**
[{"kind":"capability","capability":"instantGame","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Effect"}]
*/


/**
The `InstantGamingModule` class.
*/
declare interface InstantGaming extends Module {

/**
```
(get) events: EventSource<any>
(set) (Not Available)
```

Returns an `EventSource` that emits an event for every app/platform-specific event received.
The event contains a JSON object with the data associated with the event.
*/
events: EventSource<any>

/**
```
showGame(): void
```

Shows game and returns void.
*/
showGame(): void

}
