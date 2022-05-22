/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
declare interface PlanarObject extends SceneObjectBase {
/**
* ```
(get) bounds: Box2DSignal
(set) (Not Available)
```

Represents the current 2D bounds relative to the parent element. This is the result of the layout calculation. Values are measured in 3D units.
**Note**: The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
bounds: Box2DSignal;
/**
* ```
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
height: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) horizontalAlignment: SceneModule.HorizontalAlignment
```

Specifies the horizontal alignment.
*/
horizontalAlignment: HorizontalAlignment;
/**
* ```
(get) (Not Available)
(set) marginBottom: number
```

Specifies the size of the bottom margin.
**Note**: it behaves in a similar way to the `margin-bottom` CSS property.
*/
marginBottom: number;
/**
* ```
(get) (Not Available)
(set) marginEnd: number
```

Specifies the size of the right margin.
**Note**: it behaves in a similar way to the `margin-right` CSS property.
*/
marginEnd: number;
/**
* ```
(get) (Not Available)
(set) marginStart: number
```

Specifies the size of the left margin.
**Note**: it behaves in a similar way to the `margin-left` CSS property.
*/
marginStart: number;
/**
* ```
(get) (Not Available)
(set) marginTop: number
```

Specifies the size of the top margin.
**Note**: it behaves in a similar way to the `margin-top` CSS property.
*/
marginTop: number;
/**
* ```
(get) (Not Available)
(set) scalingOption: SceneModule.ScalingOption
```

Specifies the size adjustment relative to parent.
*/
scalingOption: ScalingOption;
/**
* ```
(get) (Not Available)
(set) verticalAlignment: SceneModule.VerticalAlignment
```

Specifies the vertical alignment.
*/
verticalAlignment: VerticalAlignment;
/**
* ```
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
width: ScalarSignal;
/**
* ```
(get) xCenterOffset: ScalarSignal
(set) xCenterOffset: ScalarSignal
```

Specifies the horizontal center offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xCenterOffset: ScalarSignal;
/**
* ```
(get) xEndOffset: ScalarSignal
(set) xEndOffset: ScalarSignal
```

Specifies the horizontal end offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xEndOffset: ScalarSignal;
/**
* ```
(get) xOffset: ScalarSignal
(set) xOffset: ScalarSignal
```

Specifies the horizontal offset of the object. Which offset to apply depends on horizontalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
xOffset: ScalarSignal;
/**
* ```
(get) yCenterOffset: ScalarSignal
(set) yCenterOffset: ScalarSignal
```

Specifies the vertical center offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yCenterOffset: ScalarSignal;
/**
* ```
(get) yEndOffset: ScalarSignal
(set) yEndOffset: ScalarSignal
```

Specifies the vertical end offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yEndOffset: ScalarSignal;
/**
* ```
(get) yOffset: ScalarSignal
(set) yOffset: ScalarSignal
```

Specifies the vertical offset of the object. Which offset to apply depends on verticalAlignment.
**Note**: the specific measurement unit used depends on the context. It will be regular 3D units unless the object is a descendant of a Screen Plane object (2D Canvas) when it will be density-independent pixels.

**Note**: this parameter is used as an input to the layout algorithm. The layout-calculated size and location of the object is available via `PlanarObject.bounds` property. The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
yOffset: ScalarSignal;
}
