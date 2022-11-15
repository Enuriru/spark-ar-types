/// <reference path="../Animation.AnimationClips/index.d.ts" />
/// <reference path="../Animation.AnimationPlaybackControllers/index.d.ts" />
/// <reference path="../Animation.SamplerFactory/index.d.ts" />
/// <reference path="../Animation.ScalarSampler/index.d.ts" />
/// <reference path="../Animation.SignalRecorder/index.d.ts" />
/// <reference path="../Animation.TimeDriver/index.d.ts" />
/// <reference path="../Animation.ValueDriver/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
The `AnimationModule` class implements object animation.
*/
declare interface Animation extends Module {

/**
```
(get) animationClips: AnimationClips
(set) (Not Available)
```

Get an object that allows access to animation clips.
*/
animationClips: AnimationClips

/**
```
(get) playbackControllers: AnimationPlaybackControllers
(set) (Not Available)
```

Get an object that allows access to animation playback controllers.
*/
playbackControllers: AnimationPlaybackControllers

/**
```
(get) samplers: SamplerFactory
(set) (Not Available)
```

Returns an instance of a `SamplerFactory` object that can be used to construct animation samplers.
*/
samplers: SamplerFactory

/**
```
animate(driver: TimeDriver | ValueDriver, sampler: ScalarSampler): ScalarSignal
animate(driver: TimeDriver | ValueDriver, sampler: ArrayOfScalarSamplers): ArrayOfScalarSignals
animate(driver: TimeDriver | ValueDriver, sampler: RotationSampler): QuaternionSignal
animate(driver: TimeDriver | ValueDriver, sampler: ColorSampler): RgbaSignal
```

Combines the driver and the sampler to create a signal that can be used to animate arbitrary properties of arbitrary objects.
For `TimeDriver`-based animations the animation will start only when `TimeDriver.start` is invoked.
*/
animate(driver: TimeDriver | ValueDriver, sampler: ScalarSampler): ScalarSignal

/**
```
makeSignalRecorder(targetSignal: ScalarSignal, params?: {maxRecordCount?: number, minRecordingGapMs?: number}): SignalRecorder
```

Begins recording a scalar signal (targetSignal) for use in a sampler.
This returns a SignalRecorder object that returns a SignalRecord when stopped.
Optional parameters are included for performance reasons:
 - `minRecordingGapMs` defines the minimum amount of delay between snapshots taken in ms.
 - `maxRecordCount` define sthe maximum number of snapshots. It must be > 0.
If these two values are not included, a default of `10` is used for `minRecordingGapMs` and `1000` is used for `maxRecordCount`.
*/
makeSignalRecorder(targetSignal: ScalarSignal, params?: {maxRecordCount?: number, minRecordingGapMs?: number}): SignalRecorder

/**
```
timeDriver(params?: {durationMilliseconds?: number, loopCount?: number, mirror?: false | true}): TimeDriver
```

Returns a `TimeDriver` object that drives an animation for the specified parameters.
Optional parameters that can be used:
 - `durationMilliseconds` - desgnates overall duration that driver should use. Default: `0` aka no specified duration.
 - `loopCount` - defines the number of iterations before the time driver stops. Default: `0`.
 - `mirror` - boolean value that controls whether the drive should replay the animation backwards on every other iteration.
*/
timeDriver(params?: {durationMilliseconds?: number, loopCount?: number, mirror?: false | true}): TimeDriver

/**
```
valueDriver(value: ScalarSignal, min: number, max: number): ValueDriver
```

Returns a `ValueDriver` object that drives an animation based on values emitted from a `ScalarSignal`.
The signal values are normalized and clamped to specified `min`` and `max`` values.
*/
valueDriver(value: ScalarSignal, min: number, max: number): ValueDriver

}



/**

//==========================================================================
// The following example demonstrates how to animate the properties of an
// object using drivers and samplers.
//
// Project setup:
// - Insert a plane to the Scene
//==========================================================================

// Load in the required modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Animation = require('Animation');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane in the Scene
  const plane = await Scene.root.findFirst('plane0');


  //========================================================================
  // Animate the plane's vertical scale according to mouth openness
  //========================================================================

  // Create a reference to the mouth openness signal of a detected face
  const mouthOpenness = FaceTracking.face(0).mouth.openness;

  // Create a value driver using the mouth openness with the output
  // normalized and clamped between 0.1 and 0.6
  const mouthOpennessDriver = Animation.valueDriver(mouthOpenness, 0.1, 0.6);

  // Create a sampler with a linear change from 1 to 2
  const linearSampler = Animation.samplers.linear(1, 2);

  // Create an animation combining the driver and sampler
  const scaleAnimation = Animation.animate(mouthOpennessDriver, linearSampler);

  // Bind the scale animation signal to the y-axis scale signal of the plane
  plane.transform.scaleY = scaleAnimation;

  //========================================================================
  // Animate the plane's horizontal position continuously
  //========================================================================

  // Create a set of time driver parameters
  const timeDriverParameters = {

    // The duration of the driver
    durationMilliseconds: 1500,

    // The number of iterations before the driver stops
    loopCount: Infinity,

    // Should the driver 'yoyo' back and forth
    mirror: true
  };

  // Create a time driver using the parameters
  const timeDriver = Animation.timeDriver(timeDriverParameters);

  // Create a sampler with a quadratic change in and out from -5 to 5
  const quadraticSampler = Animation.samplers.easeInOutQuad(-5, 5);

  // Create an animation combining the driver and sampler
  const translationAnimation = Animation.animate(timeDriver, quadraticSampler);

  // Bind the translation animation signal to the x-axis position signal
  // of the plane
  plane.transform.x = translationAnimation;

  // Start the time driver (unlike value drivers this needs to be
  // done explicitly)
  timeDriver.start();


  //========================================================================
  // Change the clip used in a scene object's playback controller
  //========================================================================

  // This example assumes the following project set up:
  //  - A scene object, 'Object', with a playback controller attached
  //  - An imported animation clip, 'runClip'

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