
/**
The `ColorSampler` class encapsulates a color sampler.
*/
declare interface ColorSampler {

}



/**

//==============================================================================
// The following example demonstrates how to use a Color Sampler (HSVA)
// to modify colors of an emitter for a given range.
//
// Project setup:
// - Add an Emitter object with the name 'emitter0' with a default material to the scene
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Animation = require('Animation');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Emitter scene element
  const emitter = await Scene.root.findFirst('emitter0');
  // HSVA Sampler is a Color Sampler that generates values between
  // the Color ranges provided as a Scalar sampler.
  const hsvaSampler = Animation.samplers.HSVA(
    Animation.samplers.linear([1, 0, 0 , 0], [0, 1, 0, 1])
  );
  // Apply the hsvaSampler to the ColorModulationModifier of the emitter
  emitter.hsvaColorModulationModifier = hsvaSampler;

})(); // Enable async/await in JS [part 2]

*/