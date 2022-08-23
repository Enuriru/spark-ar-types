/// <reference path="../ObjectCapture.CapturedObjectInfo/index.d.ts" />
/// <reference path="../Prefabs.ObjectCaptureLivePreviewPrefab/index.d.ts" />
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
(get) status: StringSignal
(set) (Not Available)
```
*/
status: StringSignal

/**
```
onNewCapturedObject(): EventSource<CapturedObjectInfo>
```

*/
onNewCapturedObject(): EventSource<CapturedObjectInfo>

}
