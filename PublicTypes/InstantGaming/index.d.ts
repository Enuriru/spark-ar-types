/// <reference path="../Reactive.EventSource/index.d.ts" />
declare class InstantGamingModule {
/**
* ```
(get) events: EventSource<any>
(set) (Not Available)
```

Returns an `EventSource` that emits an event for every app/platform-specific event received.
The event contains a JSON object with the data associated with the event.
*/
static readonly events: EventSource<any>;
/**
*  
 * showGame(): void
 *  
 * 
 * Shows game and returns void.
 */
static showGame(): void;

}
export = InstantGamingModule;
