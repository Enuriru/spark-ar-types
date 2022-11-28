/// <reference path="../Animation.AnimationPlaybackController/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `AnimationPlaybackControllers` class allows access to animation playback controllers.
*/
declare interface AnimationPlaybackControllers {

/**
```
findFirst(name: string): Promise<AnimationPlaybackController | null>
```

Find first animation playback controller that matches a given name pattern.
*/
findFirst(name: string): Promise<AnimationPlaybackController | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AnimationPlaybackController>>
```

Find animation playback controllers with names that match a given pattern.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AnimationPlaybackController>>

/**
```
getAll(): Promise<Array<AnimationPlaybackController>>
```

Get all animation playback controllers that are bundled in this effect.
*/
getAll(): Promise<Array<AnimationPlaybackController>>

}



/**

//==============================================================================
// The following example demonstrates how to get a playback controller,
// get all of its the animation clips and randomly use one.
//
// Project setup:
//  - A scene object with a playback controller
//  - An imported set of animation clips
//==============================================================================

// Load in the required modules
const Animation = require('Animation');
const Random = require('Random');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the playback controller and all the animation clips
  const [playbackController, animClips] = await Promise.all([
    Animation.playbackControllers.findFirst('animationPlaybackController0'),
    Animation.animationClips.getAll()
  ]);

  // Change the playback controller to a random animation clip
  const randomNumber = Math.floor(Random.random() * animClips.length);
  playbackController.setAnimationClip(animClips[randomNumber])

})(); // Enable async/await in JS [part 2]

*/