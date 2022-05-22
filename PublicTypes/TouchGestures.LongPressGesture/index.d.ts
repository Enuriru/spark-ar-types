/// <reference path="../TouchGestures.Gesture/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
declare interface LongPressGesture extends Gesture {
/**
* ```
(get) location: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the gesture's location, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the long press gesture method call, for example: `TouchGestures.onLongPress(plane)`.
*/
location: Vec2Signal;
}
