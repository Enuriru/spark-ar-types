/// <reference path="../Prefabs.CapturedObjectPrefab/index.d.ts" />
/// <reference path="../Prefabs.ObjectCaptureLivePreviewPrefab/index.d.ts" />
/// <reference path="../Prefabs.ObjectCapturePrefabBase/index.d.ts" />
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
(set) prefab: ObjectCapturePrefabBase | null
```
*/
prefab: ObjectCapturePrefabBase | null

/**
```
getPrefab(): Promise<CapturedObjectPrefab | ObjectCaptureLivePreviewPrefab | null>
```

*/
getPrefab(): Promise<CapturedObjectPrefab | ObjectCaptureLivePreviewPrefab | null>

}
