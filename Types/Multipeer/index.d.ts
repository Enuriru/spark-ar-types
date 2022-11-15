/// <reference path="../Multipeer.BinaryMessageChannel/index.d.ts" />
/// <reference path="../Multipeer.MessageChannel/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"},{"kind":"capability","capability":"multipeer_messaging","orCapability":""}]
*/


/**
Allows an effect running in a video call to communicate with other instances of the same effect within the video call.
Multipeer communication is based around the broadcasting and receiving of JSON formatted messages on message channels.


Messages are broadcast to all peers except the instance that the message was broadcast from - an effect can’t broadcast a message to itself.


You can use the [multipeer debugging tool](https://sparkar.facebook.com/ar-studio/learn/scripting/multipeer-debugging) to simulate message streams and debug multipeer effects.
*/
declare interface Multipeer extends Module {

/**
```
getBinaryMessageChannel(topic: string): BinaryMessageChannel
```

Returns the specified [`BinaryMessageChannel`](/classes/MultipeerModule.BinaryMessageChannel).
If no channel with the specified name is found, the `GLOBAL` channel is used by default.

* `topic` - the name of the message channel (topic) to retrieve.
*/
getBinaryMessageChannel(topic: string): BinaryMessageChannel

/**
```
getMessageChannel(topic: string): MessageChannel
```

Returns the specified [`MessageChannel`](/classes/MultipeerModule.MessageChannel).
If no channel with the specified name is found, the `GLOBAL` channel is used by default.

* `topic` - the name of the message channel (topic) to retrieve.
*/
getMessageChannel(topic: string): MessageChannel

}



/**

//============================================================================
// Retrieves a message channel and sends a message on it.
//
//
// Required project capabilities:
// - Multipeer (auto added on Multipeer module import)
//
//============================================================================

// Load in the required modules
const Multipeer = require('Multipeer);

(async function () {  // Enables async/await in JS [part 1]

  // Retrieve the 'MyTopic' message channel
  const topicChannel = Multipeer.getMessageChannel("MyTopic");

  // Send a message on the 'MyTopic' channel
  topicChannel.sendMessage({
      "message": "Hello  MyTopic channel!",
      "someValue": 10,
      "someBoolean": true
  });

})(); // Enables async/await in JS [part 2]

*/