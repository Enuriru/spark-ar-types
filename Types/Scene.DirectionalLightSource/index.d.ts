/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec4/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `DirectionalLightSource` class describes a directional light source.
*/
declare interface DirectionalLightSource extends SceneObjectBase {

/**
```
(get) (Not Available)
(set) color: ColorSignal
```

Specifies the color of this light source.
*/
color: ColorSignal

/**
```
(get) colorRGBAValue: Vec4
(set) colorRGBAValue: Vec4
```

Specifies the color (RGBA format) of this light source.
*/
colorRGBAValue: Vec4

/**
```
(get) intensity: ScalarSignal
(set) intensity: ScalarSignal
```

Specifies the intensity of this light source, usually between 0.0 and 1.0.
*/
intensity: ScalarSignal

/**
```
(get) intensityValue: number
(set) intensityValue: number
```

Specifies the intensity of this light source, usually between 0.0 and 1.0.
*/
intensityValue: number

}



/**

//==============================================================================
// The following example demonstrates how to modify properties of a DirectionalLightSource
//
// Project setup:
// - Make sure there is a Directional Light with the name 'directionalLight0' in your scene
// - Add in a 3D object in your scene to visualize the results
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Reactive = require('Reactive');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Directional Light from the Scene
  const directionalLight = await Scene.root.findFirst('directionalLight0');

  // Set the color of this light source
  directionalLight.color = directionalLight.color = Reactive.RGBA(0,0.5,0.5,1);
  // Set the intensity of this light source, between 0.0 and 1.0.
  directionalLight.intensity = 0.5;

})(); // Enable async/await in JS [part 2]

*/