/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `ArrayOfScalarSignals` class describes an array of scalar signals.
It extends the implementation of `Array<ScalarSignal>` type in JavaScript,
and adds a single additional method to get a sampler at a particular index - `get()`.
*/
declare interface ArrayOfScalarSignals extends Array<ScalarSignal> {

/**
```
get(index: number): ScalarSignal
```

Returns the signal indicated by the `index` parameter.
*/
get(index: number): ScalarSignal

}



/**

//=========================================================================
// The following example demonstrates how to animate multiple ScalarSignals
// simultaneously using ArrayOfScalarSamplers and ArrayOfScalarSignals.
// Tap on the screen to see the rectangle slide to the tapped location.
//
// Project setup:
// - Insert a rectangle into the scene
// - Enable touch gestures capability in Properties -> Capabilities ->
//   Touch Gestures -> Tap Gesture
//=========================================================================

// How to load in modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Animation = require('Animation');
const CameraInfo = require('CameraInfo');

(async function () {  // Enables async/await in JS [part 1]

  // To access scene objects
  const [rectangle] = await Promise.all([
    Scene.root.findFirst('rectangle0')
  ]);

  //initialize the starting position of the animation
  let startPosX = 0;
  let startPosY = 0;

  TouchGestures.onTap().subscribe(gesture=>{
    //create a 1 second long TimeDriver to control the animation
    let driver = Animation.timeDriver({durationMilliseconds:1000});

    //setup the end position targets for the animation
    let endPosX = gesture.location.x;
    let endPosY = gesture.location.y;

    //using an array of values as the input to the animation sampler returns an ArrayOfScalarSamplers
    //here we use an array for starting x and y values of the animation, and another array for the ending x and y values
    let samplers = Animation.samplers.easeOutCubic([startPosX, startPosY],[endPosX, endPosY]);

    //when an ArrayOfScalarSamplers is used on Animation.animate, the function returns an ArrayOfScalarSignals
    let animation = Animation.animate(driver, samplers);

    //use ArrayOfScalarSignals.get(index) to access specific elements in the array
    //animation.get(0) in this case returns the x position
    let x = animation.get(0);
    //animation.get(1) in this case returns the y position
    let y = animation.get(1);

    //divide the values by the device screen pixel density using CameraInfo.previewScreenScale,
    //subtract half the rectangle width to center it horizontally
    rectangle.transform.x = animation.get(0).div(CameraInfo.previewScreenScale).sub(rectangle.width.div(2));
    //subtract half the rectangle height to center it vertically
    rectangle.transform.y = animation.get(1).div(CameraInfo.previewScreenScale).sub(rectangle.height.div(2));

    //start the driver to play the animation
    driver.start();

    //set the ending position as the starting position for the next time the screen is tapped
    startPosX = endPosX;
    startPosY = endPosY;
  })

})(); // Enables async/await in JS [part 2]

*/