/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />

/**
The `RgbaSignal` class monitors a RGBA color value.
*/
declare interface RgbaSignal extends ColorSignal {

/**
```
(get) alpha: ScalarSignal
(set) alpha: ScalarSignal
```

Returns the value of the alpha channel between 0 and 1.0.
*/
alpha: ScalarSignal

/**
```
(get) blue: ScalarSignal
(set) blue: ScalarSignal
```

Returns the value of the blue channel between 0 and 1.0.
*/
blue: ScalarSignal

/**
```
(get) green: ScalarSignal
(set) green: ScalarSignal
```

Returns the value of the green channel between 0 and 1.0.
*/
green: ScalarSignal

/**
```
(get) red: ScalarSignal
(set) red: ScalarSignal
```

Returns the value of the red channel between 0 and 1.0.
*/
red: ScalarSignal

/**
```
pinLastValue(): RgbaSignal
```

Returns a new `RgbaSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): RgbaSignal

/**
```
toHSVA(): HsvaSignal
```

Convert this signal into HSVA color space.
*/
toHSVA(): HsvaSignal

/**
```
toVec4(): Vec4Signal
```

Convert this signal to Vector signal, using R, G, B, A for four components of vector respectively.
*/
toVec4(): Vec4Signal

}



/**

//=========================================================================
// The following example demonstrates how to use an RgbaSignal as a
// property for materials.
//
// Project setup:
// - Insert two Planes under Focal Distance
// - Insert a Material into Assets
// - Insert a second Material and a Shader Code Asset into Assets
// - Set the new shader asset as the Shader Type of the second new material
//=========================================================================

// Load in the required modules
const Materials = require('Materials');
const Reactive = require('Reactive');
const Scene = require('Scene');

(async function() { // Enable async/await in JS [part 1]

  // Locate the planes and materials in the project
  const [plane0, plane1, material, customMaterial] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1'),
    Materials.findFirst('material0'),
    Materials.findFirst('material1')
  ]);

  // Move the planes so they are both visible in the Scene
  plane0.transform.x = -0.05;
  plane1.transform.x = 0.05;

  // Bind materials to the planes' material properties
  plane0.material = material;
  plane1.material = customMaterial;

  // Create a new RgbaSignal with four 0 to 1 scalar values
  const diffuseColor = Reactive.RGBA(0.98, 0.09, 0.51, 1.0);

  // Set the diffuse color factor of the built-in material
  material.diffuseColorFactor = diffuseColor;

  // Convert the RgbaSignal to a Vec4Signal
  const color1 = diffuseColor.toVec4();

  // Assign the signal to a color parameter of the patch asset material
  customMaterial.setParameter('color1', color1);

})(); // Enable async/await in JS [part 2]

*/