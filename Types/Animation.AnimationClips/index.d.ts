/// <reference path="../Animation.AnimationClip/index.d.ts" />
/// <reference path="../Reactive.AnimationClip/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `AnimationClips` class allows access to animation clips.
*/
declare interface AnimationClips {

/**
```
findFirst(name: string): Promise<AnimationClip | null>
```

Find first animation clip that matches a given name pattern.
*/
findFirst(name: string): Promise<AnimationClip | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AnimationClip>>
```

Find animation clips with names that match a given pattern.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AnimationClip>>

/**
```
getAll(): Promise<Array<AnimationClip>>
```

Get all animation clips that are bundled in this effect.
*/
getAll(): Promise<Array<AnimationClip>>

}



/**

//==============================================================================
// The following example demonstrates how to get all the animation clips and
// randomly use one.
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