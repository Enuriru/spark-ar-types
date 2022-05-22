/// <reference path="../Scene.FocalPlane/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
declare interface Camera extends SceneObjectBase {
/**
* ```
(get) focalPlane: FocalPlane
(set) (Not Available)
```

Returns focal plane info.
Focal Plane is a virtual plane placed in 3D space in front of camera, it will exactly match output size when rendered.
This can be used to convert points between screen and world space.
*/
focalPlane: FocalPlane;
}
