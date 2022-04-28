/// <reference path="../ObjectCapture.ObjectCapturePrefabBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":3434457779},{"kind":"capability","capability":"objectCapture","orCapability":""}]
*/


/**
The `CapturedObjectPrefab` class encapsulates a prefab of an object that was captured from camera.
*/
declare interface CapturedObjectPrefab extends ObjectCapturePrefabBase {

/**
```
(get) wireframe: BoolSignal
(set) wireframe: BoolSignal
```

Specifies the wireframe mode
*/
wireframe: BoolSignal

/**
```
crop(pointOnPlane: PointSignal, planeNormal: VectorSignal, cropBelow?: false | true): Promise<void>
```

Crops the mesh by the plane defined by pointOnPlane and planeNormal given in localSpace coordinates
*/
crop(pointOnPlane: PointSignal, planeNormal: VectorSignal, cropBelow?: false | true): Promise<void>

/**
```
reset(): Promise<void>
```

Undoes all edits to the mesh, reverting to original scanned model
*/
reset(): Promise<void>

/**
```
undoLastEdit(): Promise<void>
```

Undoes the last edit to the mesh
*/
undoLastEdit(): Promise<void>

}
