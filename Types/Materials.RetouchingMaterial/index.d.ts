/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `RetouchingMaterial` class encapsulates parameters which define the extend of certain beautification techniques.
*/
declare interface RetouchingMaterial extends MaterialBase {

/**
```
(get) fullScreen: BoolSignal
(set) fullScreen: BoolSignal
```

Specifies whether effect should be full-screen.
*/
fullScreen: BoolSignal

/**
```
(get) skinSmoothingFactor: ScalarSignal
(set) skinSmoothingFactor: ScalarSignal
```

Specifies the simulated skin smoothness factor.
*/
skinSmoothingFactor: ScalarSignal

}



/**

//======================================================================
// The RetouchingMaterial class contains properties that allow you to
// precisely define certain beautification techniques such as the
// smoothness of the skin. The following example demonstrates how to
// use the skinSmoothingFactor property to specify the simulated skin
// smoothness factor of a face mesh.
//
// Project setup:
// - Insert a faceTracker into the Scene
// - Insert a faceMesh into the scene as a direct descendant of the
//   faceTracker
//======================================================================


// load in the required modules
const Materials = require("Materials");
const Scene = require("Scene");

(async function() { // Enable async/await in JS [part 1]

// Locate the face mesh and material
const [faceMesh, material] = await Promise.all([
 Scene.root.findFirst("faceMesh0"),
 Materials.findFirst("material0")
])

// Bind the material to the face mesh material property
faceMesh.material = material;

// Specify the simulated skin smoothness factor
material.skinSmoothingFactor = 1.5;

// Disable the smoothness factor from being applied to the fullscreen
material.fullScreen = false;

})();

*/