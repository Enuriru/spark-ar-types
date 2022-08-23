/// <reference path="../Animation.AnimationClip/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `AnimationPlaybackController` class describes an animation playback controller asset.
*/
declare interface AnimationPlaybackController {

/**
```
(get) identifier: string
(set) (Not Available)
```

Unique identifier of this animation playback controller.
*/
identifier: string

/**
```
(get) looping: BoolSignal
(set) looping: BoolSignal
```

A signal that controls whether this controller should loop or not.
Loops the playback controller. To be used in pair with the `setPlaying` method. If set to `true`, the animation will repeat infinitely.
*/
looping: BoolSignal

/**
```
(get) name: string
(set) (Not Available)
```

Name of this animation playback controller.
*/
name: string

/**
```
(get) playing: BoolSignal
(set) playing: BoolSignal
```

A signal that controls wheher this playback controller is playing or not.
Plays or pauses the playback controller depending on the value entered.
*/
playing: BoolSignal

/**
```
(get) speed: ScalarSignal
(set) speed: ScalarSignal
```

Scalar signal represents current speed of animation playback (1.0 being normal speed).
Sets the speed of the animation playback.
*/
speed: ScalarSignal

/**
```
getAnimationClip(): Promise<AnimationClip | null>
```

Get the animation clip that this controller is using.
*/
getAnimationClip(): Promise<AnimationClip | null>

/**
```
reset(): void
```

Resets the playback controller to the beginning. If the playback controller is currently playing then it will immediately re-start.
*/
reset(): void

/**
```
setAnimationClip(clip: AnimationClip | null): Promise<void>
```

Set the animation clip that this controller should use.
*/
setAnimationClip(clip: AnimationClip | null): Promise<void>

}



/**

//==============================================================================
// The following example demonstrates how to change the clip used in a scene
// object's playback controller.
//
// Project setup:
//  - A scene object, 'Object', with a playback controller attached
//  - An imported animation clip, 'runClip'
//==============================================================================

// Load in the required modules
const Animation = require('Animation');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the scene object and the animation clip
  const [sceneObject, animClip] = await Promise.all([
      Scene.root.findFirst('Object'),
      Animation.animationClips.findFirst('runClip')
  ]);

  // Get the scene object's playback controller
  const playbackController = await sceneObject.getAnimationPlaybackController();

  // Change the playback controller's animation clip
  playbackController.setAnimationClip(animClip);

  // Set the playback controller to play
  playbackController.playing = true;

})(); // Enable async/await in JS [part 2]

*/