/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `ColorPaintMaterial` class encapsulates a face-paint material.
*/
declare interface ColorPaintMaterial extends MaterialBase {

/**
```
(get) backgroundInfluence: ScalarSignal
(set) backgroundInfluence: ScalarSignal
```

Specifies the influence of the background face on the paint texture.
*/
backgroundInfluence: ScalarSignal

/**
```
(get) paintBrightness: ScalarSignal
(set) paintBrightness: ScalarSignal
```

Specifies the simulated paint brightness.
*/
paintBrightness: ScalarSignal

}



/**

//======================================================================
// The ColorPaintMaterial class inherits from MaterialBase
// The following example demonstrates how to specify the
// simulated paint brightness for a material.
//
// Project setup:
// - Insert a heart object into the Scene
// - Insert a Material into Assets
//======================================================================


// Load in the required modules
const Materials = require('Materials');
const Scene = require('Scene');
(async function() { // Enable async/await in JS [part 1]


// Locate the plane and material in the project
const [heart, material] = await Promise.all([
  Scene.root.findFirst('Heart'),
  Materials.findFirst('material0'),
]);

 // Bind the material to the plane's material property
 heart.material = material;

 // Enable alpha testing on this material
 material.alphaTestEnabled = true;

 // Specify and alpha cutoff number for this material
 material.alphaCutoff = 0.3

 // set opacity on this material
 material.opacity = 0.6;

 //  specify the simulated paint brightness
 material.paintBrightness = 1.9;

})(); // Enable async/await in JS [part 2]

*/