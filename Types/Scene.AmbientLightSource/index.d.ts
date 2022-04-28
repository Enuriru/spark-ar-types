/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `AmbientLightSource` class describes an ambient lighting source.
*/
declare interface AmbientLightSource extends SceneObjectBase {

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
(get) intensity: ScalarSignal
(set) intensity: ScalarSignal
```

Specifies the intensity of this light source, usually between 0.0 and 1.0.
*/
intensity: ScalarSignal

}



/**

//==============================================================================
// The following example demonstrates how to modify properties of a AmbientLightSource
//
// Project setup:
// - Add in a Ambient Light with the name 'ambientLight0' in your scene
// - Add in a 3D object in your scene to visualize the results
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Reactive = require('Reactive');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Ambient Light from the Scene
  const ambientLight = await Scene.root.findFirst('ambientLight0');

  // Set the color of this light source
  ambientLight.color = Reactive.RGBA(0,0.5,0.5,0.5);
  // Set the intensity of this light source, between 0.0 and 1.0.
  ambientLight.intensity = 0.5;

})(); // Enable async/await in JS [part 2]

*/