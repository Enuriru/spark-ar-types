/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"frameBrightness","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect"]}]
*/


/**
The `LightingEstimation` module encapsulates access to estimations of lighting in the scene.
*/
declare interface LightingEstimation extends Module {

/**
```
(get) directionalLightColor: RgbaSignal
(set) (Not Available)
```
*/
directionalLightColor: RgbaSignal

/**
```
(get) directionalLightIntensity: ScalarSignal
(set) (Not Available)
```
*/
directionalLightIntensity: ScalarSignal

/**
```
(get) directionalLightTransform: TransformSignal
(set) (Not Available)
```
*/
directionalLightTransform: TransformSignal

/**
```
(get) frameBrightness: ScalarSignal
(set) (Not Available)
```

Returns a number that represents the brightness of the frame.
*/
frameBrightness: ScalarSignal

/**
```
(get) isDirectionalLightAvailable: BoolSignal
(set) (Not Available)
```

Gets whether the information about Estimated Directional Light available.
If isAvailable is false at any frame, the data returned will be unreliable.
You may need to make the relevant assets invisible.
*/
isDirectionalLightAvailable: BoolSignal

}



/**

//==============================================================================
// The following example demonstrates how to bind the frame brightness property
// to the intensity of a light.
//
// Project setup:
// - Insert a plane
// - Add the 'Frame Brightness' capability
// - (Recommended) Remove the directional light
//==============================================================================

// Load in the required modules
const LightingEstimation = require('LightingEstimation');
const Reactive = require('Reactive');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the ambientLight in the Scene
  const [ambientLight] = await Promise.all([
    Scene.root.findFirst('ambientLight0')
  ]);

  // Calculate light intensity by subtracting the frame brightness from 1, the
  // darker the frame brightness, the greater the light intensity
  const lightIntensity = Reactive.sub(1,LightingEstimation.frameBrightness);

  // Bind the light intensity to the intensity of the ambient light
  ambientLight.intensity = lightIntensity;
// Enable async/await in JS [part 2]
})();

*/