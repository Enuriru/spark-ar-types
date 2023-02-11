/// <reference path="../Reactive.EventSource/index.d.ts" />

/**
The `LiveStreamingComments` class provides access to the Facebook Live comments stream. Note that you must remove Instagram as a platform before you can use this class. To disable Instagram as a platform on your Spark studio, go to Project > Edit Properties > Experiences (deselect Instagram).
*/
declare interface LiveStreamingComments {

/**
```
(get) stream: EventSource<LiveStreamingComment>
(set) (Not Available)
```

Specifies an `EventSource` that emits an update every time the Live stream receives a new comment. You may `subscribe()` to the `EventSource` and provide it with a callback that takes a single argument; when the callback is called, this argument will have the properties `body` (containing the text of the comment), and `timestampInVideoMs` (containing the video timestamp in milliseconds at which the comment was submitted).
The stream will only return comments that are displayed on the broadcaster's screen, which in the case of high comment volume will not include every comments. To process potentially large volumes of comments, use the Counter and Vote methods below.
*/
stream: EventSource<LiveStreamingComment>

/**
```
startHashtagCounter(): EventSource<{[key: string]: number}>
```

Returns an `EventSource` that emits an update every time there is a change in the count of comments on the Live stream that contain hashtags. Hashtags are counted in case insensitive mode. You may `subscribe()` to the `EventSource` and provide a callback that receives a single argument, which will be a JavaScript Object containing hashtagged strings to comment counts. The hashtags will be provided in a canonical format, which will generally be CamelCase (for example #FacebookLive or #GrilledCheese). Internally, only the first 500 hashtags will be tracked and only the top 20 will be surfaced to the subscription. A maximum of 10 counter/vote subscriptions may be active at a time. If one is created beyond that limit then the oldest one will not receive any more updates. The subscription will receive a maximum of one update per second.
*/
startHashtagCounter(): EventSource<{[key: string]: number}>

/**
```
startHashtagVote(): EventSource<{[key: string]: number}>
```

This method is identical to `startHashtagCounter()` except that for each user only the first hashtag appeared in his/her comments will be counted.
*/
startHashtagVote(): EventSource<{[key: string]: number}>

/**
```
startMatchCounter(matchStrings: Array<string>, isCaseSensitive: boolean): EventSource<{[key: string]: number}>
```

Returns an `EventSource` that emits an update every time there is a change in the count of comments on the Live stream that match one or more target strings. The `matchStrings` argument is an array of strings to search for in comments. The `isCaseSensitive` determines whether the string matching respects letter case. You may `subscribe()` to the `EventSource` and provide a callback that receives a single argument, which will be a JavaScript Object containing matched strings to comment counts. Up to 20 match strings may be requested in one counter. A maximum of 10 counter/vote subscriptions may be active at a time. If one is created beyond that limit then the oldest one will not receive any more updates. The subscription will receive a maximum of one update per second.
*/
startMatchCounter(matchStrings: Array<string>, isCaseSensitive: boolean): EventSource<{[key: string]: number}>

/**
```
startMatchVote(matchStrings: Array<string>, isCaseSensitive: boolean): EventSource<{[key: string]: number}>
```

This method is identical to `startMatchCounter()` except that for each user only the first matched string appearing in the comment will be counted.
*/
startMatchVote(matchStrings: Array<string>, isCaseSensitive: boolean): EventSource<{[key: string]: number}>

}



/**

//======================================================================
// The following example demonstrates how to dynamically update an
// effect based on the reactions and comments of a viewer during a
// livestream. Here, the LiveStreamingComments class provides access to
// the Facebook Live comments stream.
//
// Project setup:
// - Insert two text objects
//======================================================================

// Load in the required modules
const LiveStreaming = require('LiveStreaming');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
 // Locate the text objects in the Scene
 const [angryCountText, matchCounterText] = await Promise.all([
   Scene.root.findFirst('Text0'),
   Scene.root.findFirst('Text1')
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