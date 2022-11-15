/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"segmentation","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Any"},{"kind":"deprecatedBy","version":3623664000},{"kind":"removedBy","version":2353946659}]
*/


/**
The `PersonSegmentationModule` class enables the separation of a person from a scene.
*/
declare interface PersonSegmentation extends Module {

/**
```
(get) foregroundPercent: ScalarSignal
(set) (Not Available)
```

Represents the percentage of screen space occupied by a person/people.
*/
foregroundPercent: ScalarSignal

/**
```
(get) hasForeground: BoolSignal
(set) (Not Available)
```

Represents whether there is anybody in the scene (`true`/`false`), based on whether the percentage of foreground is larger than a threshold.
*/
hasForeground: BoolSignal

/**
```
(get) (Not Available)
(set) isEnabled: BoolSignal | boolean
```

Specifies whether the segmentation should be enabled. Default value is 'true'.
*/
isEnabled: BoolSignal | boolean

}



/**

//==============================================================================
// The following example demonstrates how to enable and disable segementation
// when detecting a person in the camera view as well as changing the opacity of
// a material depending on how close the person is to the camera.
//
// Project setup:
// - Follow the segmentation steps here (www.fb.me/spark-ar-using-segmentation)
//==============================================================================

// Load in the required modules
const Materials = require('Materials');
const PersonSegmentation = require('PersonSegmentation');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the rectangle and material in the Scene and Assets
  const [rectangle, rectangleMaterial] = await Promise.all([
    Scene.root.findFirst('rectangle0'),
    Materials.findFirst('defaultMaterial0')
  ]);

  // Bind the foregroundPercent scalar signal to the opacity of the material
  rectangleMaterial.opacity = PersonSegmentation.foregroundPercent;

  // Bind the inverse of the hasForeground boolean signal to the hidden property
  // of the rectangle
  rectangle.hidden = PersonSegmentation.hasForeground.not();
// Enable async/await in JS [part 2]
})();

*/