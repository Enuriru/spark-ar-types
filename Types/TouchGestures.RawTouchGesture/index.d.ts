/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"rawTouchGestures","orCapability":""}]
*/


/**
The RawTouchGesture class encapsulates raw touch data.
*/
declare interface RawTouchGesture extends Gesture {

/**
```
(get) gestureId: number
(set) (Not Available)
```

Specifies a `number` that represents the unique identifier of the touch gesture.
*/
gestureId: number

/**
```
(get) location: Vec2Signal
(set) (Not Available)
```

Specifies a `Vec2Signal` that represents the location of the gesture in screen coordinates.
**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of LongPressing on a specific object.
*/
location: Vec2Signal

/**
```
(get) translation: Vec2Signal
(set) (Not Available)
```

Specifies a `Vec2Signal` that represents the translation of the raw touch with respect to the initial location.
**Note**: The translation is specified in the screen coordinates by default.
*/
translation: Vec2Signal

}
