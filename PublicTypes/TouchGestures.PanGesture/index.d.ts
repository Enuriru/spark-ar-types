/// <reference path="../TouchGestures.Gesture/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
declare interface PanGesture extends Gesture {
/**
* ```
(get) location: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the gesture's start point, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the pan gesture method call, for example: `TouchGestures.onPan(plane)`.
*/
location: Vec2Signal;
/**
* ```
(get) translation: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the gesture's position relative to the start point, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the pan gesture method call, for example: `TouchGestures.onPan(plane)`.
*/
translation: Vec2Signal;
}
