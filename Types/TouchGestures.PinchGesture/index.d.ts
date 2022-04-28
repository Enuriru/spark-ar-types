/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"pinchGestures","orCapability":""}]
*/


/**
The `PinchGesture` class contains the details of a detected pinch gesture.
*/
declare interface PinchGesture extends Gesture {

/**
```
(get) location: Vec2Signal
(set) (Not Available)
```

Specifies a `Vec2Signal` that represents the current center point between two touches of the pinch gesture in screen coordinates.
**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of pinching on a specific object.
*/
location: Vec2Signal

/**
```
(get) scale: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` representing the scale factor indicated by the gesture.
*/
scale: ScalarSignal

}
