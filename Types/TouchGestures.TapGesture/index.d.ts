/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"tapGestures","orCapability":""}]
*/


/**
The `TapGesture` class contains the details of a detected tap gesture.
*/
declare interface TapGesture extends Gesture {

/**
```
(get) location: Point2D
(set) (Not Available)
```

Specifies a `Point2D` representing the location of the tap, in pixels screen coordinates.
**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of tapping on a specific object.
*/
location: Point2D

/**
```
(get) objectDepthDistance: number
(set) (Not Available)
```

Specifies a `number` representing the distance from the 3D tapped point on the object to the camera.
**Note**: The distance is only specified if the event was emitted as a result of tapping on a specific object (eg. `TouchGestures.onTap(plane)`). Otherwise `Infinity` is returned.
*/
objectDepthDistance: number

}
