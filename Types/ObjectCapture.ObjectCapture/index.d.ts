/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />


/**
[{"kind":"capability","capability":"objectCapture","orCapability":""},{"kind":"introducedBy","version":3434457779}]
*/


/**
The `ObjectCapture` class encapsulates a mesh created by ObjectCaptureAlgorithm.
*/
declare interface ObjectCapture extends SceneObjectBase {

/**
```
(get) firstCameraTransform: TransformSignal
(set) (Not Available)
```

Specifies the transform of first camera when tracking started
*/
firstCameraTransform: TransformSignal

/**
```
(get) wireframe: boolean
(set) wireframe: boolean
```

Specifies the wireframe mode
*/
wireframe: boolean

/**
```
crop(pointOnPlane: PointSignal, planeNormal: VectorSignal): boolean
```

Crops the mesh by the plane defined by pointOnPlane and planeNormal given in worldSpace coordinates
*/
crop(pointOnPlane: PointSignal, planeNormal: VectorSignal): boolean

/**
```
reset(): void
```

*/
reset(): void

/**
```
undoLastEdit(): void
```

*/
undoLastEdit(): void

}
