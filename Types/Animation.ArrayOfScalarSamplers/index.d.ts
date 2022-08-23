/// <reference path="../Animation.ScalarSampler/index.d.ts" />

/**
The `ArrayOfScalarSamplers` class describes an array of scalar samplers.
It extends the implementation of `Array<ScalarSampler>` type in JavaScript,
and adds a single additional method to get a sampler at a particular index - `get()`.
*/
declare interface ArrayOfScalarSamplers extends Array<ScalarSampler> {

/**
```
get(index: number): ScalarSampler
```

Returns the sampler indicated by the `index` parameter.
*/
get(index: number): ScalarSampler

}



/**

//==============================================================================
// The following example demonstrates how to use an array of Scalar Samplers
// representing Color Samplers (HSVA) for different ranges to modify colors of an emitter.
//
// Project setup:
// - Add an Emitter object with the name 'emitter0' with a default material to the scene
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Animation = require('Animation');
const Reactive = require('Reactive');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Emitter scene element
  const emitter = await Scene.root.findFirst('emitter0');
  const samplerArray = Animation.samplers.sequence({
    samplers: [
      //first value is the same as colorModulationHSVA values
      Animation.samplers.linear([1, 0, 0, 1], [0.5, 0.4, 0, 1]),
      Animation.samplers.linear([0, 0.5, 0.5, 1], [0, 0, 1, 1])
    ]
  });

  // HSVA Sampler is a Color Sampler that generates values between
  // two Color ranges provided as a Scalar Sampler Array.
  const hsvaSampler = Animation.samplers.HSVA(samplerArray);
  // Modify the default color by applying the values defined by the sampler to it.
  emitter.colorModulationHSVA = Reactive.HSVA(1, 0, 0, 1);
  emitter.hsvaColorModulationModifier = hsvaSampler;

})(); // Enable async/await in JS [part 2]

*/