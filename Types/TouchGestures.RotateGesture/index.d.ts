/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"rotateGestures","orCapability":""}]
*/


/**
The `RotateGesture` class contains the details of a detected Rotate gesture.
*/
declare interface RotateGesture extends Gesture {

/**
```
(get) location: Vec2Signal
(set) (Not Available)
```

Specifies a `Vec2Signal` that represents the current center point between two touches of the rotate gesture in screen coordinates.
**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of Rotateing on a specific object.
*/
location: Vec2Signal

/**
```
(get) rotation: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` representing the rotation indicated by the gesture, in radians.
*/
rotation: ScalarSignal

}
