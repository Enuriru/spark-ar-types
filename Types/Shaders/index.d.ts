

/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
The `ShadersModule` exposes APIs to create Visual Shaders using JavaScript.
The following is an explanation of the unique types and concepts specific to the ShadersModule.

`PrimitiveOrShaderSignal` is a union type of `Vec2Signal`, `PointSignal`, `Vec4Signal`, `VectorSignal`, `TransformSignal`, or `ShaderSignal`.
`ShaderSignal` is a graphics shader output that produces one of the types defined in the above union. As `ShaderSignal` is GPU bound, it can only be used in a GPU context.

`ShaderSignal` can also be of a function type, used for function mapping from one type to another.
For example, a shader with the signature `function(Vec2Signal): Vec4Signal` is a type of a function that maps a `Vec2Signal` to a `Vec4Signal`.
*/
declare interface Shaders extends Module {

}



/**

//==============================================================================
// The following example demonstrates how to use visual shaders to tile SDF
// shapes. This is a script version of the following Patch Editor example:
// https://fb.me/tiled-sdf-patch
//
// Project setup:
// - Insert a rectangle and set it to 'Fill Parent'
// - Create a new material and assign it to the rectangle
//==============================================================================

// Load in the required modules
const Materials = require('Materials');
const Reactive = require('Reactive');
const Shaders = require('Shaders');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the material in the Assets
  const [material] = await Promise.all([
    Materials.findFirst('defaultMaterial0')
  ]);

  // Create the SDF Star parameters
  const center = Reactive.pack2(0.05,0.05);
  const radius = 0.04;
  const radius2 = Reactive.mul(radius,0.5);
  const sides = 5;

  // Create the SDF Star
  const sdfStar = Shaders.sdfStar(center,radius,radius2,sides);

  // Create the SDF Mix
  const sdfMix = Shaders.sdfMix(sdfStar,0,0.993);

  // Create the SDF Repeat parameters
  const pivot = Reactive.pack2(0.05,0.05);
  const size = Reactive.pack2(0.09,0.09);

  // Create the SDF Repeat
  const sdfRepeat = Shaders.sdfRepeat(sdfMix,pivot,size);

  // Create the step
  const step = Reactive.step(sdfRepeat,0);

  // Create the gradient
  const gradient = Shaders.gradient({"type" : Shaders.GradientType.HORIZONTAL});

  // Create the first mix paramaters
  const color1 = Reactive.pack4(1,0.57,0,1);
  const color2 = Reactive.pack4(1,0.25,1,1);

  // Create the first mix
  const mix1 = Reactive.mix(color1,color2,gradient);

  // Create the color for the second mix
  const color3 = Reactive.pack4(0,0,0,0);

  // Create the second mix
  const mix2 = Reactive.mix(mix1,color3,step);

  // Define the texture slot of the material to update
  const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;

  // Assign the shader signal to the texture slot
  material.setTexture(mix2, {textureSlotName: textureSlot});

// Enable async/await in JS [part 2]

*/