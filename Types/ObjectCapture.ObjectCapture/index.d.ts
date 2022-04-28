/// <reference path="../ObjectCapture.CapturedObjectInfo/index.d.ts" />
/// <reference path="../ObjectCapture.CapturedObjectPrefab/index.d.ts" />
/// <reference path="../ObjectCapture.CapturedObjectType/index.d.ts" />
/// <reference path="../ObjectCapture.ObjectCaptureLivePreviewPrefab/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"objectCapture","orCapability":""},{"kind":"introducedBy","version":3434457779}]
*/


declare interface ObjectCapture extends Module {

/**
```
(get) livePreviewPrefab: Promise<ObjectCaptureLivePreviewPrefab>
(set) (Not Available)
```
*/
livePreviewPrefab: Promise<ObjectCaptureLivePreviewPrefab>

/**
```
(get) pipelineStatus: StringSignal
(set) (Not Available)
```
*/
pipelineStatus: StringSignal

/**
```
(get) status: StringSignal
(set) (Not Available)
```
*/
status: StringSignal

/**
```
endCapture(): Promise<CapturedObjectInfo>
```

*/
endCapture(): Promise<CapturedObjectInfo>

/**
```
onNewCapturedObject(): EventSource<CapturedObjectInfo>
```

*/
onNewCapturedObject(): EventSource<CapturedObjectInfo>

/**
```
pauseCapture(): void
```

*/
pauseCapture(): void

/**
```
restart(): void
```

*/
restart(): void

/**
```
saveModel(config: {prefab: CapturedObjectPrefab, texture: CapturedObjectTexture}): Promise<void>
```

*/
saveModel(config: {prefab: CapturedObjectPrefab, texture: CapturedObjectTexture}): Promise<void>

/**
```
setObjectType(type: CapturedObjectType): void
```

*/
setObjectType(type: CapturedObjectType): void

/**
```
shareModel(config: {prefab: CapturedObjectPrefab, texture: CapturedObjectTexture}): Promise<void>
```

*/
shareModel(config: {prefab: CapturedObjectPrefab, texture: CapturedObjectTexture}): Promise<void>

/**
```
startCapture(): void
```

*/
startCapture(): void

}
