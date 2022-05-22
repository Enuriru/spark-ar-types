/// <reference path="../Reactive.EventSource/index.d.ts" />
declare interface MessageChannel {
/**
* ```
(get) onMessage: EventSource<Object>
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
onMessage: EventSource<Object>;
/**
*  
 * sendMessage(message: Object, realTimeChannel: boolean): Promise<void>
 *  
 * 
 * Sends a free-form message on the channel.
 * By default messages are sent via the **Realtime Channel (Async)**, which has high bandwidth for message streams but doesn't guarantee synchronized message order across all peers. Alternatively the **Sync Channel** can be used, which synchronizes message order across peers but has a message rate limit of 75 messages every 30 seconds.
 * 
 * 
 * Messages may fail to send if the message rate or payload size limits are exceeded.
 * 
 * * `message` - the JSON formatted message object to send. The message object can contain multiple values of type boolean, string or number.
 * * `realTimeChannel` - specifies whether the message should be sent via the **Realtime Channel (Async)**
 * 
 *  
 * // Retrieve the 'MyTopic' message channel
 * const topicChannel = Multipeer.getMessageChannel("MyTopic");
 * 
 * // Send a message on the 'MyTopic' channel
 * topicChannel.sendMessage({
 *     "message": "Hello  MyTopic channel!",
 *     "someValue": 10
 * });
 *  
 */
sendMessage(message: Object, realTimeChannel: boolean): Promise<void>;

}
