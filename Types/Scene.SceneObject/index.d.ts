/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `SceneObject` class describes an object in a scene.
*/
declare interface SceneObject extends SceneObjectBase {

}



/**

//=========================================================================
// The following example demonstrates how to find the particle emitter object
// in the scene and modify its properties so that it becomes a sparkly,
// rainbow-colored confetti display.
//
// Project setup:
// - Insert a Particle System object into your scene and name it 'emitter0.'
//=========================================================================

// Load in the required modules
const Scene = require('Scene');
const Animation = require('Animation');
const Reactive = require('Reactive');

(async function() { // Enable async/await in JS [part 1]

// Locate the Particle System in the scene
const [emitter] = await Promise.all([
  Scene.root.findFirst('emitter0'),
]);

// Set the lifespan of particles in seconds
emitter.lifetimeSeconds = 20;

// Set the birthrate of particles and add randomness to the birthrate (birthrateDelta)
emitter.birthrate = 1000;
emitter.birthrateDelta = 5;

// Set the scale of particles and add randomness to the scale (scaleDelta)
emitter.scale = 0.002;
emitter.scaleDelta = 0.5;

// Create a HSVA (Hue, Saturation, Value, Alpha) sampler, the HSVA sampler takes in an array of 4 samplers that correspond to H,S,V and A values
const hueSampler = Animation.samplers.linear(0,5);
const saturationSampler = Animation.samplers.linear(0,7);
const valueSampler = Animation.samplers.linear(0,6);
const alphaSampler = Animation.samplers.linear(0,6);
const HSVASampler = Animation.samplers.HSVA([hueSampler,saturationSampler,valueSampler,alphaSampler]);

// Set base HSVA values against which the modultaion will apply
emitter.colorModulationHSVA = Reactive.HSVA(0,0,1,1);

// Assign the HSVA sampler as HSVA color modulation modifier to change hue, saturation, value (brightness) and alpha (opacity) over the lifespan of a particle
emitter.hsvaColorModulationModifier = HSVASampler;

})(); // Enable async/await in JS [part 2]

*/