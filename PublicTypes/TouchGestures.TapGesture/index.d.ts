/// <reference path="../TouchGestures.Gesture/index.d.ts" />
/// <reference path="../Reactive.Point2D/index.d.ts" />
declare interface TapGesture extends Gesture {
/**
* ```
(get) location: Point2D
(set) (Not Available)
```

The screen space coordinates of the location that the tap gesture was detected, as a [`Point2D`](/classes/ReactiveModule.Point2D) object.
Coordinates are always returned in screen space, even if an object was specified in the touch gesture method call, for example: `TouchGestures.onTap(plane)`.
*/
location: Point2D;
/**
* ```
(get) objectDepthDistance: number
(set) (Not Available)
```

The distance from the 3D location of the tap gesture to the camera, as a `number`.
This requires an object to have been specified in the touch gesture method call, for example: `TouchGestures.onTap(plane)`. Otherwise, a value of `infinity` is returned.
*/
objectDepthDistance: number;
}
