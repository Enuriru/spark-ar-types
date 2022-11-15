/// <reference path="../LiveStreaming.LiveStreamingComments/index.d.ts" />
/// <reference path="../LiveStreaming.LiveStreamingReactions/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"liveStreaming","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Effect"}]
*/


/**
The `LiveStreamingModule` class enables to retrieve information from a live stream from within the effect, such as reactions and comments.
*/
declare interface LiveStreaming extends Module {

/**
```
(get) comments: LiveStreamingComments
(set) (Not Available)
```

Provides access to a `LiveStreamingComments` object that encapsulates data about the live stream's comments.
*/
comments: LiveStreamingComments

/**
```
(get) concurrentViewerCount: ScalarSignal
(set) (Not Available)
```

Provides access to a `ScalarSignal` that encapsulates the number of concurrent viewers of the live stream.
*/
concurrentViewerCount: ScalarSignal

/**
```
(get) reactions: LiveStreamingReactions
(set) (Not Available)
```

Provides access to a `LiveStreamingReactions` object that encapsulates data about the live stream's reactions.
*/
reactions: LiveStreamingReactions

/**
```
(get) state: StringSignal
(set) (Not Available)
```

Specifies a `LiveStreaming.State` enum value indicating the broadcast state.
*/
state: StringSignal

}



/**

//==============================================================================
// The following example demonstrates how to dynamically update an effect based
// on the reactions and comments of a viewer during a livestream.
//
// Project setup:
// - Insert two text objects
//==============================================================================

// Load in the required modules
const LiveStreaming = require('LiveStreaming');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the text objects in the Scene
  const [angryCountText, matchCounterText] = await Promise.all([
    Scene.root.findFirst('text0'),
    Scene.root.findFirst('text1')
  ]);

  // Store references to the reactions and comments properties
  const reactions = LiveStreaming.reactions;
  const comments = LiveStreaming.comments;

  //==============================================================================
  // Displaying a number based on the number of a certain reaction from viewers
  //==============================================================================

  // Store a reference to the number of angry reactions
  const angryCount = reactions.angry;

  // Bind the number of angry reactions to the text object
  angryCountText.text = angryCount.toString();

  //==============================================================================
  // Displaying a string based on the number of comments from viewers
  //==============================================================================

  // Define what strings we want to start a counter for
  const matchStrings = ['cat','dog'];

  // Define if those strings should be case sensitive or not
  const isCaseSensitive = false;

  // Create a variable to store the highest count
  var leadingCount = 0;

  // Subscribe to the startMatchCounter EventSource
  comments.startMatchCounter(matchStrings,isCaseSensitive).subscribe(
  (result) => {
    // Loop through the keys in the result (e.g. 'cat' or 'dog')
    for (var key in result) {
      // Update the text and leadingCount if the count of the result is
      // is greater than the current leadingCount
      if (result[key] > leadingCount) {
        matchCounterText.text = key;
        leadingCount = result[key];
      }
    }
  });
// Enable async/await in JS [part 2]
})();

*/