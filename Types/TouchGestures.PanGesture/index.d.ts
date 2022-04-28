/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"panGestures","orCapability":""}]
*/


/**
The `PanGesture` class contains the details of a detected pan gesture.
*/
declare interface PanGesture extends Gesture {

/**
```
(get) location: Vec2Signal
(set) (Not Available)
```

Specifies a `Vec2Signal` that represents the location of the gesture in screen coordinates.
**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of panning on a specific object.
*/
location: Vec2Signal

/**
```
(get) translation: Vec2Signal
(set) (Not Available)
```

Specifies a `Vec2Signal` indicating the position of the gesture, in screen coordinates, relative to the start point.
**Note**: The translation is always specified in the screen coordinates, even if the event was emitted as a result of panning on a specific object.
*/
translation: Vec2Signal

}
