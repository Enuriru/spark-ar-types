/// <reference path="../CustomHandGestures.GestureEvent/index.d.ts" />
/// <reference path="../CustomHandGestures.GestureType/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../TouchGestures.GestureType/index.d.ts" />


/**
[{"kind":"introducedBy","version":1835294548},{"kind":"capability","capability":"customHandGestures","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


declare interface CustomHandGestures extends Module {

/**
```
isHandGestureDetected(gestureType: GestureType): boolean
```

*/
isHandGestureDetected(gestureType: GestureType): boolean

/**
```
onHandGesture(gestureType: GestureType): EventSource<GestureEvent>
```

Returns an EventSource with the gesture state of the provided gestureType.
* `gestureType` - The custom gesture type to detect.
*/
onHandGesture(gestureType: GestureType): EventSource<GestureEvent>

}
