/// <reference path="../Animation.Driver/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `TimeDriver` class allows driving an animation sampler using time.
*/
declare interface TimeDriver extends Driver {

/**
```
isRunning(): BoolSignal
```

Returns a `BoolSignal` indicating whether the animation is running.
*/
isRunning(): BoolSignal

/**
```
onAfterIteration(): EventSource<number>
```

Returns an `EventSource` to which you may subscribe.
The event fires when the animation with loopCount completes an iteration.
Subscribers will receive the one-based index of the completed iteration.
*/
onAfterIteration(): EventSource<number>

/**
```
onCompleted(): EventSource<any>
```

Returns an`EventSource` to which you may subscribe.The event fires once when the animation completes.
*/
onCompleted(): EventSource<any>

/**
```
reset(): void
```

Resets the driver progress to time point zero.
*/
reset(): void

/**
```
reverse(): void
```

Reverses the animation from the moment it is called and goes back in time.
*/
reverse(): void

/**
```
start(): void
```

Starts the animation.
*/
start(): void

/**
```
stop(): void
```

Stops or pauses the animation.
*/
stop(): void

}



/**

//==============================================================================
// The following example demonstrates how to create an animation using a Time Driver.
// The 3D object would scale and animate based on the time duration passed in.
//
// Project setup:
// - Add a Plane object sample with the name 'plane0' to the scene
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Animation = require('Animation');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Plane scene element
  const plane = await Scene.root.findFirst('plane0');

  // Time Driver allows you to specify a duration in milliseconds for the
  // animation along with optional parameters for looping and mirroring.
  const timeDriverParameters = {
      durationMilliseconds: 2000,
      loopCount: Infinity,
      mirror: true
  };

  // Create a TimeDriver using the above parameters
  const timeDriver = Animation.timeDriver(timeDriverParameters);
  // The linear sampler allows you to specify the beginning and end values of the animation
  let linearSampler = Animation.samplers.linear(0.5, 1);
  // TimeDriver and Sampler come together to create an animation
  const animation = Animation.animate(timeDriver, linearSampler);

  // The scaleX/Y/Z() methods of the TransformSignal allows us to bind the animation
  // ScalarSignal being output to the scale of the plane object.
  plane.transform.scaleX = animation;
  plane.transform.scaleY = animation;
  plane.transform.scaleZ = animation;

  // Start the TimeDriver
  timeDriver.start();

})(); // Enable async/await in JS [part 2]

*/