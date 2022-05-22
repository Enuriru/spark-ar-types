/// <reference path="../BodyTracking.Body2DPose/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface Body {
/**
* ```
(get) boundingBox: Box2DSignal
(set) (Not Available)
```

Returns a `Box2DSignal` object.
*/
boundingBox: Box2DSignal;
/**
* ```
(get) id: StringSignal
(set) (Not Available)
```

Returns a `StringSignal` object.
*/
id: StringSignal;
/**
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Returns a `BoolSignal` object.
*/
isTracked: BoolSignal;
/**
* ```
(get) pose2D: Body2DPose
(set) (Not Available)
```

Returns a `Body2DPose` object.
*/
pose2D: Body2DPose;
}
