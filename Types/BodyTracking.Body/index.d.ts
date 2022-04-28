/// <reference path="../BodyTracking.Body2DPose/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
The `Body` class exposes details of a tracked body.
*/
declare interface Body {

/**
```
(get) boundingBox: BoundingBoxSignal
(set) (Not Available)
```

Returns a `BoundingBoxSignal` object.
*/
boundingBox: BoundingBoxSignal

/**
```
(get) id: StringSignal
(set) (Not Available)
```

Returns a `StringSignal` object.
*/
id: StringSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Returns a `BoolSignal` object.
*/
isTracked: BoolSignal

/**
```
(get) isTracking: BoolSignal
(set) (Not Available)
```

Returns a `BoolSignal` object.
*/
isTracking: BoolSignal

/**
```
(get) pose2D: Body2DPose
(set) (Not Available)
```

Returns a `Body2DPose` object.
*/
pose2D: Body2DPose

}
