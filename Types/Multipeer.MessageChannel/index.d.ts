/// <reference path="../Reactive.EventSource/index.d.ts" />

/**
Named, bidirectional channel of communication
It's created on demand, persists during effect lifetime
and available to all users of the same effect in current experience (rtc call etc)
*/
declare interface MessageChannel {

/**
```
(get) onMessage: EventSource<Object>
(set) (Not Available)
```

Stream of all messages on this channel
*/
onMessage: EventSource<Object>

/**
```
sendMessage(message: Object): Promise<void>
```

Sends free-form message to channel.
Note, might fail due to rate-limiting or payload size violation
*/
sendMessage(message: Object): Promise<void>

}
