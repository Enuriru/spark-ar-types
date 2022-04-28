/// <reference path="../Reactive.EventSource/index.d.ts" />

/**
`PlatformEvents` module exposes functionality to send and receive events between effect's script and platform.
*/
declare interface PlatformEvents extends Module {

/**
```
(get) allEvents: EventSource<any>
(set) (Not Available)
```

Returns an `EventSource` that emits an event for every app/platform-specific event received.
The event contains a JSON object with the data associated with the event.
*/
allEvents: EventSource<any>

/**
```
send(event: Object): void
```

Send a given event in a form of any Object to the platform-specific implementation.
*/
send(event: Object): void

}
