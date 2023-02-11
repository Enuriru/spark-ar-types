/// <reference path="../Reactive.EventSource/index.d.ts" />

declare interface BinaryMessageChannel {

/**
```
(get) onMessage: EventSource<Uint8Array>
(set) (Not Available)
```

The channel's message stream.
Subscribe to the returned [`EventSource`](/classes/ReactiveModule.EventSource) to listen for messages sent to the channel.


The instance of the effect that broadcasts a message will not receive the message on its own message stream.

```
// Retrieve the 'MyTopic' message channel
const topicChannel = Multipeer.getMessageChannel("MyTopic");

// Listen out for messages sent to the ‘MyTopic’ channel
topicChannel.onMessage.subscribe((msg) => {

  // The callback function's argument contains the message received
  Diagnostics.log(msg);
});
```
*/
onMessage: EventSource<Uint8Array>

/**
```
sendMessage(message: Uint8Array, realTimeChannel: boolean): Promise<void>
```

Sends binary message on the channel.
By default messages are sent via the **Realtime Channel (Async)**, which has high bandwidth for message streams but doesn't guarantee synchronized message order across all peers. Alternatively the **Sync Channel** can be used, which synchronizes message order across peers but has a message rate limit of 75 messages every 30 seconds.


Messages may fail to send if the message rate or payload size limits are exceeded.

* `message` - the binary message to send.
* `realTimeChannel` - specifies whether the message should be sent via the **Realtime Channel (Async)**

```
// Retrieve the 'MyTopic' message channel
const topicChannel = Multipeer.getMessageChannel("MyTopic");

// Send a message on the 'MyTopic' channel
topicChannel.sendMessage(new Uint8Array([10, 20, 30, 40, 50]));
```
*/
sendMessage(message: Uint8Array, realTimeChannel: boolean): Promise<void>

}
