/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
`ObjectCaptureScript` encapsulates functions and props controlling Ojbect Capture
Example usage in script:
------------------------

const Wolf = require('Wolf');

function startCaptureCallback() {
  Wolf.objectCapture.startCapture();
}
*/
declare interface ObjectCaptureScript {

/**
```
(get) modelReady: BoolSignal
(set) (Not Available)
```
*/
modelReady: BoolSignal

/**
```
(get) status: StringSignal
(set) (Not Available)
```
*/
status: StringSignal

/**
```
endCapture(): void
```

*/
endCapture(): void

/**
```
shareModel(): void
```

*/
shareModel(): void

/**
```
startCapture(): void
```

*/
startCapture(): void

}
