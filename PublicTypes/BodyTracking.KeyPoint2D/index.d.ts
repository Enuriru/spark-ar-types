/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
declare interface KeyPoint2D {
/**
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Boolean signal representing whether this body key point is being tracked right now or not.
*/
isTracked: BoolSignal;
/**
* ```
(get) keyPoint: Vec2Signal
(set) (Not Available)
```

Point signal representing the key point
*/
keyPoint: Vec2Signal;
}
