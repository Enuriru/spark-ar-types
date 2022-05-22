/// <reference path="../TouchGestures.Gesture/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
declare interface RotateGesture extends Gesture {
/**
* ```
(get) location: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the center point between the two touch touches of the rotation gesture, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the rotatation gesture method call, for example: `TouchGestures.onRotate(plane)`.
*/
location: Vec2Signal;
/**
* ```
(get) rotation: ScalarSignal
(set) (Not Available)
```

The rotation of the gesture in radians, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
rotation: ScalarSignal;
}
