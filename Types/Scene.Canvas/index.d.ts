/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Scene.WorldTransform/index.d.ts" />

/**
The `Canvas` class describes a scene canvas.
*/
declare interface Canvas extends SceneObjectBase {

/**
```
(get) bounds: Box2DSignal
(set) (Not Available)
```

Represents the current 2D bounds relative to the parent element. This is the result of the layout calculation. Values are measured in 3D units.
**Note**: The `Canvas.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
bounds: Box2DSignal

/**
```
(get) height: ScalarSignal
(set) height: ScalarSignal
```

Specifies the vertical size, in 3D units.
**Note:** this is only effective when `renderMode` property is set to WORLD_SPACE.
*/
height: ScalarSignal

/**
```
(get) mode: StringSignal<SceneModule.RenderMode>
(set) mode: StringSignal<SceneModule.RenderMode>
```

Specifies how Canvas should be rendered.
In SCREEN_SPACE mode, Canvas is automatically placed and sized to fit the screen, `width` and `height` properties are ignored. `transform` property is still used, it is applied on top of the focal plane transform.
In WORLD_SPACE Canvas behaves as regular 3D object and is sized according to `width` and `height` properties.
**Note:** on invalid value provided in setter, the mode will default to SCREEN_SPACE. Use `setMode` method to specify custom fallback value.

**See Also**: `Canvas.setMode`.
*/
mode: StringSignal<SceneModule.RenderMode>

/**
```
(get) useSafeAreaMargins: BoolSignal
(set) useSafeAreaMargins: BoolSignal
```

Specifies if Canvas should automatically include SafeArea margin to its content.
**Note:** this is only effective when `renderMode` property is set to SCREEN_SPACE.
*/
useSafeAreaMargins: BoolSignal

/**
```
(get) width: ScalarSignal
(set) width: ScalarSignal
```

Specifies the horizontal size, in 3D units.
**Note:** this is only effective when `renderMode` property is set to WORLD_SPACE.
*/
width: ScalarSignal

/**
```
(get) worldTransform: WorldTransform
(set) worldTransform: TransformSignal
```

Specifies a `TransformSignal` object describing the object's transformation relative to world coordinate system.
World transform in not supported for Canvas. Accessing this property from such objects or any of their children is not allowed.
*/
worldTransform: WorldTransform

/**
```
setMode(v: StringSignal<SceneModule.RenderMode>, config?: {fallback: SceneModule.RenderMode}): void
```

Specifies how Canvas should be rendered.
In SCREEN_SPACE mode, Canvas is automatically placed and sized to fit the screen, `width` and `height` properties are ignored. `transform` property is still used, it is applied on top of the focal plane transform.
In WORLD_SPACE Canvas behaves as regular 3D object and is sized according to `width` and `height` properties.
**Note:** on invalid value provided in setter, the mode will default to `fallback` (or SCREEN_SPACE if fallback is not specified).

**See Also**: `Canvas.mode`.
*/
setMode(v: StringSignal<SceneModule.RenderMode>, config?: {fallback: SceneModule.RenderMode}): void

}



/**

//==============================================================================
// The following example demonstrates how to create a Canvas scene object,
// attach a Planar Object (e.g. 2D Plane) and modify the Canvas properties.
//
// Project setup:
// - Add the Scripting Dynamic Instantiation capability
//==============================================================================

// Load in the required modules
const Scene = require('Scene');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Focal Distance Scene element
  const focalDistance = await Scene.root.findFirst('Focal Distance');

  // Create a Canvas and a Planar Object (2D Plane)
  const [canvas, plane2d] = await Promise.all([
    await Scene.create("Canvas", {
      "name": "Canvas",
      "hidden": false,
    }),
    await Scene.create("Plane", {
      "name": "Plane",
      "height": 0.1,
      "width": 0.1,
      "hidden": false,
    }),
  ]);

  // Add the Canvas as a child object of the Focal Distance object
  // and plane2d as a child object of the Canvas
  focalDistance.addChild(canvas);
  canvas.addChild(plane2d);

  // Specify how Canvas should be rendered.
  canvas.mode = Scene.RenderMode.WORLD_SPACE;
  // In WORLD_SPACE Canvas behaves as regular 3D object
  // and is sized according to `width` and `height` properties.
  canvas.width = 700;
  canvas.height = 500;

})(); // Enable async/await in JS [part 2]

*/