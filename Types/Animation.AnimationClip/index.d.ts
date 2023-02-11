/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `AnimationClip` class gives you access to the name, duration and identifier of each animation clip.
*/
declare interface AnimationClip {

/**
```
(get) duration: ScalarSignal
(set) (Not Available)
```

Get signal that represents overall duration of this clip.
*/
duration: ScalarSignal

/**
```
(get) identifier: string
(set) (Not Available)
```

Unique identifier of this animation clip.
*/
identifier: string

/**
```
(get) name: string
(set) (Not Available)
```

Name of this animation clip.
*/
name: string

}



/**

//======================================================================
// The following example demonstrates how to get all the animationclips
// and use the duration of an animationClip to calculate a random value.
// This value is then used to select an animation to be played at
// random.
//
// Project setup:
//  - A scene object with a playback controller
//  - An imported set of animation clips
//======================================================================

// Load in the required modules
const Animation = require('Animation');
const Random = require('Random');

// Enable async/await
(async function() {
 // Locate the playback controller and all the animation clips
 const [playbackController, animClips] = await Promise.all([

Animation.playbackControllers.findFirst('animationPlaybackController0'),
   Animation.animationClips.getAll()
]);

 // Get the duration of a specific animationClip
  const animDuration = (await Animation.animationClips.findFirst('Walk')).duration.pinLastValue();

 // Change the playback controller to a random animation clip
 const randomNumber = Math.floor(Random.random() * animDuration);

 playbackController.setAnimationClip(animClips[randomNumber]);


})();

*/