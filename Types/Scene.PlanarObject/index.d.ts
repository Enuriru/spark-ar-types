/// <reference path="../Reactive.Box2D/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
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
(get) boundsValue: Box2D
(set) (Not Available)
```
*/
boundsValue: Box2D

/**
```
(get) height: ScalarSignal
(set) height: ScalarSignal
```

Specifies the height of the object.
**Note**: the specific measurement unit used depends on the context.
If the object is a descendant of a Screen Plane object (2D Canvas),
then these units will be in density-independent pixels if the object is set to use "Fixed" positioning,
or a percentage if set to "Relative".
Objects that are not a descendant of a Screen Plane will be in meters.
Dynamically-instantiated planar objects will always act as if set to "Fixed" positioning.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.

**Note**: You can use -1 if you want height to be automatically decided by layout constrains e.g. having both yOffset and yEndOffset. It will fallback to 0 if no constrains applied.
*/
height: ScalarSignal

/**
```
(get) heightValue: number
(set) heightValue: number
```

Specifies the height of the object.
**Note**: the specific measurement unit used depends on the context.
If the object is a descendant of a Screen Plane object (2D Canvas),
then these units will be in density-independent pixels if the object is set to use "Fixed" positioning,
or a percentage if set to "Relative".
Objects that are not a descendant of a Screen Plane will be in meters.
Dynamically-instantiated planar objects will always act as if set to "Fixed" positioning.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.

**Note**: You can use -1 if you want height to be automatically decided by layout constrains e.g. having both yOffset and yEndOffset. It will fallback to 0 if no constrains applied.
*/
heightValue: number

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

/**
```
(get) width: ScalarSignal
(set) width: ScalarSignal
```

Specifies the width of the object.
**Note**: the specific measurement unit used depends on the context.
If the object is a descendant of a Screen Plane object (2D Canvas),
then these units will be in density-independent pixels if the object is set to use "Fixed" positioning,
or a percentage if set to "Relative".
Objects that are not a descendant of a Screen Plane will be in meters.
Dynamically-instantiated planar objects will always act as if set to "Fixed" positioning.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.

**Note**: You can use -1 if you want width to be automatically decided by layout constrains e.g. having both xOffset and xEndOffset. It will fallback to 0 if no constrains applied.
*/
width: ScalarSignal

/**
```
(get) widthValue: number
(set) widthValue: number
```

Specifies the width of the object.
**Note**: the specific measurement unit used depends on the context.
If the object is a descendant of a Screen Plane object (2D Canvas),
then these units will be in density-independent pixels if the object is set to use "Fixed" positioning,
or a percentage if set to "Relative".
Objects that are not a descendant of a Screen Plane will be in meters.
Dynamically-instantiated planar objects will always act as if set to "Fixed" positioning.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.

**Note**: You can use -1 if you want width to be automatically decided by layout constrains e.g. having both xOffset and xEndOffset. It will fallback to 0 if no constrains applied.
*/
widthValue: number

/**
```
(get) xCenterOffset: ScalarSignal
(set) xCenterOffset: ScalarSignal
```

Specifies the horizontal center offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xCenterOffset: ScalarSignal

/**
```
(get) xCenterOffsetValue: number
(set) xCenterOffsetValue: number
```

Specifies the horizontal center offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xCenterOffsetValue: number

/**
```
(get) xEndOffset: ScalarSignal
(set) xEndOffset: ScalarSignal
```

Specifies the horizontal end offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xEndOffset: ScalarSignal

/**
```
(get) xEndOffsetValue: number
(set) xEndOffsetValue: number
```

Specifies the horizontal end offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xEndOffsetValue: number

/**
```
(get) xOffset: ScalarSignal
(set) xOffset: ScalarSignal
```

Specifies the horizontal offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xOffset: ScalarSignal

/**
```
(get) xOffsetValue: number
(set) xOffsetValue: number
```

Specifies the horizontal offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xOffsetValue: number

/**
```
(get) yCenterOffset: ScalarSignal
(set) yCenterOffset: ScalarSignal
```

Specifies the vertical center offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yCenterOffset: ScalarSignal

/**
```
(get) yCenterOffsetValue: number
(set) yCenterOffsetValue: number
```

Specifies the vertical center offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yCenterOffsetValue: number

/**
```
(get) yEndOffset: ScalarSignal
(set) yEndOffset: ScalarSignal
```

Specifies the vertical end offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yEndOffset: ScalarSignal

/**
```
(get) yEndOffsetValue: number
(set) yEndOffsetValue: number
```

Specifies the vertical end offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yEndOffsetValue: number

/**
```
(get) yOffset: ScalarSignal
(set) yOffset: ScalarSignal
```

Specifies the vertical offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yOffset: ScalarSignal

/**
```
(get) yOffsetValue: number
(set) yOffsetValue: number
```

Specifies the vertical offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yOffsetValue: number

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