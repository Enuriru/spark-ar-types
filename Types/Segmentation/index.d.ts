/// <reference path="../PersonSegmentation/index.d.ts" />
/// <reference path="../Segmentation.HairSegmentation/index.d.ts" />
/// <reference path="../Segmentation.PersonSegmentation/index.d.ts" />
/// <reference path="../Segmentation.SkinSegmentation/index.d.ts" />

/**
The `SegmentationModule` class enables the separation of a person or hair or skin from a scene.
*/
declare interface Segmentation extends Module {

/**
```
(get) hair: HairSegmentation
(set) (Not Available)
```

Specifies an instance of a `HairSegmentation` object.
*/
hair: HairSegmentation

/**
```
(get) person: PersonSegmentation
(set) (Not Available)
```

Specifies an instance of a `PersonSegmentation` object.
*/
person: PersonSegmentation

/**
```
(get) skin: SkinSegmentation
(set) (Not Available)
```

Specifies an instance of a `SkinSegmentation` object.
*/
skin: SkinSegmentation

}



/**

//==============================================================================
// The following example demonstrates how to enable and disable segmentation
// when detecting a person's hair in the camera view as well as changing the opacity of
// a material depending on how close the person's hair is to the camera.
//
// Project setup:
// - Follow the segmentation steps here (www.fb.me/spark-ar-using-segmentation)
//==============================================================================

// Load in the required modules
const Materials = require('Materials');
const Segmentation = require('Segmentation');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the rectangle, rednessMeter and material in the Scene and Assets
  const [rectangle, rectangleMaterial, rednessMeter] = await Promise.all([
    Scene.root.findFirst('rectangle0'),
    Materials.findFirst('defaultMaterial0'),
    Scene.root.findFirst('rednessMeter')
  ]);

  // Bind the foregroundPercent scalar signal to the opacity of the material.
  rectangleMaterial.opacity = Segmentation.hair.foregroundPercent;

  // Bind the inverse of the hasForeground boolean signal to the hidden property
  // of the rectangle.
  rectangle.hidden = Segmentation.hair.hasForeground.not();

  // Bind the rednessMeter's y to the red value of the the averageColor
  rednessMeter.transform.y = Segmentation.hair.averageColor.red;
// Enable async/await in JS [part 2]
})();

*/