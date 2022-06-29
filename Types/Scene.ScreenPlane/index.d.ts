/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Scene.WorldTransform/index.d.ts" />

/**
The `ScreenPlane` class describes a screen plane.
*/
declare interface ScreenPlane extends SceneObjectBase {

/**
```
(get) worldTransform: WorldTransform
(set) worldTransform: TransformSignal
```

Specifies a `TransformSignal` object describing the object's transformation relative to world coordinate system.
World transform in not supported for ScreenPlane. Accessing this property from such objects or any of their children is not allowed.
*/
worldTransform: WorldTransform

}
