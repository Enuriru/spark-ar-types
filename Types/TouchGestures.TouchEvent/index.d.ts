/// <reference path="../Reactive.Point2D/index.d.ts" />


/**
[{"kind":"capability","capability":"rawTouchGestures","orCapability":""},{"kind":"introducedBy","version":838493353}]
*/


/**
The TouchEvent class encapsulates detailed information regarding a touch on the screen.
*/
declare interface TouchEvent {

/**
```
(get) id: number
(set) (Not Available)
```

Specifies the unique identifier of the touch event.
*/
id: number

/**
```
(get) location: Point2D
(set) (Not Available)
```

Specifies a `Point2D` that represents the location of the gesture in screen coordinates.
**Note**: The location is always specified in the screen coordinates.
*/
location: Point2D

/**
```
(get) time: number
(set) (Not Available)
```

The timestamp of the current touch event.
*/
time: number

/**
```
(get) type: TouchEventType
(set) (Not Available)
```

The type of the touch event, as a [`TouchEventType`](/enums/touchgesturesmodule.touchevnettype) enum value.
*/
type: TouchEventType

}
