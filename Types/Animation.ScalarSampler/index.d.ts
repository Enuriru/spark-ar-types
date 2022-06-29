
/**
The `ScalarSampler` class encapsulates a scalar value sampler.
*/
declare interface ScalarSampler {

}



/**

//==============================================================================
// The following example demonstrates how to use a Scalar Sampler (easeInOutQuad)
// along with a Driver (TimeDriver) to create animations.
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
  // The easeInOutQuad is a ScalarSampler that generates values that change from
  // `begin` to `end` as the attached driver's progress goes from 0.0 to 1.0,
  // with quadratic easing functions applied at the beginning and end.
  let quadraticEaseSampler = Animation.samplers.easeInOutQuad(0.5, 1);
  // TimeDriver and Sampler come together to create an animation
  const animation = Animation.animate(timeDriver, quadraticEaseSampler);

  // The scaleX/Y/Z() methods of the TransformSignal allows us to bind the animation
  // ScalarSignal being output to the scale of the plane object.
  plane.transform.scaleX = animation;
  plane.transform.scaleY = animation;
  plane.transform.scaleZ = animation;

  // Start the TimeDriver
  timeDriver.start();

})(); // Enable async/await in JS [part 2]

*/