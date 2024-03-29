/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../RecognitionTracking.Recognition/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


declare interface RecognitionTracking extends Module {

/**
```
(get) onTargetRecognized: EventSource<Recognition>
(set) (Not Available)
```
*/
onTargetRecognized: EventSource<Recognition>

}
