/// <reference path="../Animation.Driver/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `ValueDriver` class allows driving an animation sampler using raw values.
*/
declare interface ValueDriver extends Driver {

}



/**

//==============================================================================
// The following example demonstrates how to create an animation using a Value Driver.
// The 3D object would scale and animate upon the face tracker 'mouth open' values.
//
// Project setup:
// - Add a Plane object sample with the name 'plane0' to the scene
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Animation = require('Animation');
const FaceTracking = require("FaceTracking");

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Plane scene element
  const plane = await Scene.root.findFirst('plane0');
  // Track the mouth openness of the user.
  const mouthOpenness = FaceTracking.face(0).mouth.openness;

  // Create a ValueDriver looking at the mouthOpenness property
  // It will start the animation when mouthOpenness is from 0.2 to 1.
  const valueDriver = Animation.valueDriver(mouthOpenness, 0.2, 1);
  // The linear sampler allows you to specify the beginning and end values of the animation
  let linearSampler = Animation.samplers.linear(0.5, 1.5);
  // ValueDriver and Sampler come together to create an animation
  const animation = Animation.animate(valueDriver, linearSampler);

  // The scaleX/Y/Z() methods of the TransformSignal allows us to bind the animation
  // ScalarSignal being output to the scale of the plane object.
  plane.transform.scaleX = animation;
  plane.transform.scaleY = animation;
  plane.transform.scaleZ = animation;

})(); // Enable async/await in JS [part 2]

*/