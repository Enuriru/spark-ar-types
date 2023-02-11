/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec4/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `SpotLightSource` class describes a spot light source.
*/
declare interface SpotLightSource extends SceneObjectBase {

/**
```
(get) angleInner: ScalarSignal
(set) angleInner: ScalarSignal
```

Specifies the inner angle of the spotlight cone, everything inside is fully illuminated. In radians.
*/
angleInner: ScalarSignal

/**
```
(get) angleInnerValue: number
(set) angleInnerValue: number
```

Specifies the inner angle of the spotlight cone, everything inside is fully illuminated. In radians.
*/
angleInnerValue: number

/**
```
(get) angleOuter: ScalarSignal
(set) angleOuter: ScalarSignal
```

Specifies the outer angle of the spotlight cone, everything outside is not illuminated. In radians.
*/
angleOuter: ScalarSignal

/**
```
(get) angleOuterValue: number
(set) angleOuterValue: number
```

Specifies the outer angle of the spotlight cone, everything outside is not illuminated. In radians.
*/
angleOuterValue: number

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
// The following example demonstrates how to modify properties of a SpotLightSource
//
// Project setup:
// - Add in a Spot Light with the name 'spotLight0' in your scene
// - Add in a 3D object in your scene to visualize the results
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Reactive = require('Reactive');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Spot Light from the Scene
  const spotLight = await Scene.root.findFirst('spotLight0');

  // Set the color of this light source
  spotLight.color = Reactive.RGBA(0,0.5,0.5,0.5);
  // Set the intensity of this light source, between 0.0 and 1.0.
  spotLight.intensity = 0.5;
  // Set the inner angle of the spotlight cone, in radians.
  spotLight.angleInner = 1;
  // Set the outer angle of the spotlight cone, in radians.
  spotLight.angleOuter = 1.5;

})(); // Enable async/await in JS [part 2]

*/