/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `PlanarObject` class describes an object on a plane.
*/
declare interface PlanarObject extends SceneObjectBase {

/**
```
(get) bounds: Box2DSignal
(set) (Not Available)
```

Represents the current 2D bounds relative to the parent element. This is the result of the layout calculation. Values are measured in 3D units.
**Note**: The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
bounds: Box2DSignal

/**
```
(get) (Not Available)
(set) horizontalAlignment: SceneModule.HorizontalAlignment
```

Specifies the horizontal alignment.
*/
horizontalAlignment: SceneModule.HorizontalAlignment

/**
```
(get) (Not Available)
(set) marginBottom: number
```

Specifies the size of the bottom margin.
**Note**: it behaves in a similar way to the `margin-bottom` CSS property.
*/
marginBottom: number

/**
```
(get) (Not Available)
(set) marginEnd: number
```

Specifies the size of the right margin.
**Note**: it behaves in a similar way to the `margin-right` CSS property.
*/
marginEnd: number

/**
```
(get) (Not Available)
(set) marginStart: number
```

Specifies the size of the left margin.
**Note**: it behaves in a similar way to the `margin-left` CSS property.
*/
marginStart: number

/**
```
(get) (Not Available)
(set) marginTop: number
```

Specifies the size of the top margin.
**Note**: it behaves in a similar way to the `margin-top` CSS property.
*/
marginTop: number

/**
```
(get) (Not Available)
(set) scalingOption: SceneModule.ScalingOption
```

Specifies the size adjustment relative to parent.
*/
scalingOption: SceneModule.ScalingOption

/**
```
(get) (Not Available)
(set) verticalAlignment: SceneModule.VerticalAlignment
```

Specifies the vertical alignment.
*/
verticalAlignment: SceneModule.VerticalAlignment

}



/**

//==============================================================================
// The following example demonstrates how to create a Planar Object
// (for e.g Planar Image) and modify its properties.
//
// Project setup:
// - Add the Scripting Dynamic Instantiation capability
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Materials = require('Materials');
const Reactive = require('Reactive');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Focal Distance Scene element
  const focalDistance = await Scene.root.findFirst('Focal Distance');

  // Create a Planar Object - Planar Image
  const dynamicRectangle = await Scene.create("PlanarImage", {
    "name": "Rectangle",
    "hidden": false,
  });

  // Create a default material with red diffuse color
  const defaultMaterial = await Materials.create("DefaultMaterial", {
    "name": "Default Material",
    "blendMode": "ALPHA",
    "opacity": 1.0,
    "diffuseColorFactor": Reactive.RGBA(1,0,0,1),
  });

  // Set the default material created above
  dynamicRectangle.material = defaultMaterial;

  // Add the Dynamic Rec as a child object of the Focal Distance object
  // in the Scene panel so that it is rendered in the effect
  focalDistance.addChild(dynamicRectangle);

  // Set Planar Object (2D Rectange) sizing
  dynamicRectangle.height = 700;
  dynamicRectangle.width = 700;

  // Set Planar Object (2D Rectange) margin
  dynamicRectangle.marginStart = 100;
  dynamicRectangle.marginEnd = 100;
  dynamicRectangle.marginTop = 50;
  dynamicRectangle.marginBottom = 50;

  // Set other properties like Scaling type
  dynamicRectangle.scalingOption = Scene.ScalingOption.FILL;

})(); // Enable async/await in JS [part 2]

*/