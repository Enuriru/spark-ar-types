/// <reference path="../Reactive.SignalHistory/index.d.ts" />

/**
The `ShaderSignal` represents a shader signal. Scalar and Vector signals can be automatically converted to a ShaderSignal.
*/
declare interface ShaderSignal {

/**
```
(get) w: ShaderSignal
(set) (Not Available)
```

Gets the W component.
*/
w: ShaderSignal

/**
```
(get) x: ShaderSignal
(set) (Not Available)
```

Gets the X component.
*/
x: ShaderSignal

/**
```
(get) y: ShaderSignal
(set) (Not Available)
```

Gets the Y component.
*/
y: ShaderSignal

/**
```
(get) z: ShaderSignal
(set) (Not Available)
```

Gets the Z component.
*/
z: ShaderSignal

/**
```
history(framesCount: number): SignalHistory<Shader>
```

Returns an object used to access signal values from past frames.
Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.

* `framesCount` - the number of frames to track.
*/
history(framesCount: number): SignalHistory<Shader>

}



/**

//=========================================================================
// The following example demonstrates how to modify the color values of a
// texture before assigning it to a material's texture slot.
//
// Project setup:
// - Insert a Plane into the Scene
// - Insert a Material into Assets
// - Extract the Camera texture into Assets
//=========================================================================

// Load in the required modules
const Materials = require('Materials');
onst Reactive = require('Reactive');
const Scene = require('Scene');
const Textures = require('Textures');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane and material in the project
  const [plane, material, texture] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Materials.findFirst('material0'),
    Textures.findFirst('cameraTexture0')
  ]);

  // Bind the material to the plane's material property
  plane.material = material;

  // Modify the texture signal's x value
  const x = texture.signal.x.add(0.25).min(1.0);

  // Modify the texture signal's y value
  const y = texture.signal.y.clamp(0.25, 0.75);

  // Modify the texture signal's z value
  const z = texture.signal.z.max(0.5);

  // Pack modified texture signal values into a new signal
  const color = Reactive.pack4(x, y, z, 1.0);

  // Assign the new signal to the diffuse texture slot of the material
  material.setTextureSlot('DIFFUSE', color);

})(); // Enable async/await in JS [part 2]

*/