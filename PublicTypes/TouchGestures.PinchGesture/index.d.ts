/// <reference path="../TouchGestures.Gesture/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
declare interface PinchGesture extends Gesture {
/**
* ```
(get) location: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the center point between the two touch touches of the pinch gesture, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the pinch gesture method call, for example: `TouchGestures.onPinch(plane)`.
*/
location: Vec2Signal;
/**
* ```
(get) scale: ScalarSignal
(set) (Not Available)
```

The scale factor indicated by the pinch gesture, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
scale: ScalarSignal;
}
