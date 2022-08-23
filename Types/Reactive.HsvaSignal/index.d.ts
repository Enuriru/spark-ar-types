/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />

/**
The `HsvaSignal` class monitors a HSVA color value.
*/
declare interface HsvaSignal extends ColorSignal {

/**
```
(get) alpha: ScalarSignal
(set) (Not Available)
```

Returns the value of the `alpha` channel of this signal.
*/
alpha: ScalarSignal

/**
```
(get) brightness: ScalarSignal
(set) (Not Available)
```

Returns the value of the `brightness`(`value`) channel of this signal.
*/
brightness: ScalarSignal

/**
```
(get) hue: ScalarSignal
(set) (Not Available)
```

Returns the value of the `hue` channel of this signal.
*/
hue: ScalarSignal

/**
```
(get) saturation: ScalarSignal
(set) (Not Available)
```

Returns the value of the `saturation` channel of this signal.
*/
saturation: ScalarSignal

/**
```
pinLastValue(): HsvaSignal
```

Returns a new `HsvaSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): HsvaSignal

/**
```
toRGBA(): RgbaSignal
```

Convert this signal into RGBA color space.
Be aware, that there is a potential loss of data, when converting HSVA values with `Saturation` set to 0.
*/
toRGBA(): RgbaSignal

/**
```
toVec4(): Vec4Signal
```

Convert this signal to Vector signal, using H, S, V, A for four components of vector respectively.
*/
toVec4(): Vec4Signal

}



/**

//=========================================================================
// The following example demonstrates how to modify a color value on a
// material using an HsvaSignal.
//
// Project setup:
// - Insert a Plane into the Scene
// - Insert a Material into Assets
//=========================================================================

// Load in the required modules
const Materials = require('Materials');
const Reactive = require('Reactive');
const Scene = require('Scene');
const Time = require('Time');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane and material in the project
  const [plane, material] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Materials.findFirst('material0')
  ]);

  // Bind the material to the plane's material property
  plane.material = material;

  // Get the current runtime in seconds
  const timeSeconds = Time.ms.mul(0.001);

  // Create a signal that changes over time
  const progress = timeSeconds.mul(0.25).mod(1.0);

  // Create a color signal with hue that animates over time
  const color = Reactive.HSVA(progress, 0.5, 0.5, 1.0);

  // Assign the color as the diffuse color factor of the material
  material.diffuseColorFactor = color;

})(); // Enable async/await in JS [part 2]

*/