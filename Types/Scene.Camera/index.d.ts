/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.FocalPlane/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `Camera` class exposes details about the device camera focal area.
*/
declare interface Camera extends SceneObjectBase {

/**
```
(get) fieldOfView: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` that returns the current field of view in radians.
*/
fieldOfView: ScalarSignal

/**
```
(get) focalPlane: FocalPlane
(set) (Not Available)
```

Returns focal plane info.
Focal Plane is a virtual plane placed in 3D space in front of camera, it will exactly match output size when rendered.
This can be used to convert points between screen and world space.
*/
focalPlane: FocalPlane

/**
```
(get) (Not Available)
(set) overrideFieldOfView: ScalarSignal | null
```

Sets an override field of view in radians.
If there is any other inference component that requires a different
"Field of View", this overridden value still applies.

A negative field of view value will be ignored.

To clear the request, pass null.
*/
overrideFieldOfView: ScalarSignal | null

/**
```
(get) (Not Available)
(set) preferredFieldOfView: ScalarSignal | null
```

Sets a preferred field of view in radians.
If there is any other inference component that requires a different
"Field of View", the preferred value will be ignored.

A negative field of view value will be ignored.

To clear the request, pass null.
*/
preferredFieldOfView: ScalarSignal | null

}
