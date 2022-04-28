/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../ObjectCapture.CapturedObjectPrefab/index.d.ts" />
/// <reference path="../ObjectCapture.ObjectCaptureLivePreviewPrefab/index.d.ts" />
/// <reference path="../ObjectCapture.ObjectCapturePrefabBase/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />


/**
[{"kind":"capability","capability":"objectCapture","orCapability":""},{"kind":"introducedBy","version":3434457779}]
*/


/**
The `ObjectCapture` class encapsulates a mesh created by ObjectCaptureAlgorithm.
*/
declare interface CapturedObject extends SceneObjectBase {

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
(get) (Not Available)
(set) material: MaterialBase | null
```

Specifies the material of the scene object.
*/
material: MaterialBase | null

/**
```
(get) (Not Available)
(set) prefab: ObjectCapturePrefabBase | null
```
*/
prefab: ObjectCapturePrefabBase | null

/**
```
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

/**
```
getPrefab(): Promise<CapturedObjectPrefab | ObjectCaptureLivePreviewPrefab | null>
```

*/
getPrefab(): Promise<CapturedObjectPrefab | ObjectCaptureLivePreviewPrefab | null>

}
