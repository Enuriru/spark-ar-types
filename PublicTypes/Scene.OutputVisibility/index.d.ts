/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface OutputVisibility {
/**
* ```
(get) forCaptureOutput: BoolSignal
(set) forCaptureOutput: BoolSignal
```

Specifies whether the object is visible on the capture output.
*/
forCaptureOutput: BoolSignal;
/**
* ```
(get) forPeerOutput: BoolSignal
(set) forPeerOutput: BoolSignal
```

Specifies whether the object is visible on the 'Peer output.
*/
forPeerOutput: BoolSignal;
/**
* ```
(get) forPreviewOutput: BoolSignal
(set) forPreviewOutput: BoolSignal
```

Specifies whether the object is visible on the preview output.
*/
forPreviewOutput: BoolSignal;
}
