/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />

/**
The `Vec2Signal` class monitors a 2D coordinate.
*/
declare interface Vec2Signal {

/**
```
(get) height: ScalarSignal
(set) (Not Available)
```

Represents the width of the size, or the second element of the vector.
*/
height: ScalarSignal

/**
```
(get) width: ScalarSignal
(set) (Not Available)
```

Represents the width of the size, or the first element of the vector.
*/
width: ScalarSignal

/**
```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X coordinate of the point, or the first element of the vector.
*/
x: ScalarSignal

/**
```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y coordinate of the point, or the second element of the vector.
*/
y: ScalarSignal

/**
```
history(framesCount: number, initialValues?: Array<Point2D>): SignalHistory<Point2D>
```

Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
* `framesCount` - the number of frames to track.
* `initialValues` - an optional initial value to assign to the signal.
*/
history(framesCount: number, initialValues?: Array<Point2D>): SignalHistory<Point2D>

/**
```
pinLastValue(): Vec2Signal
```

Returns a new `Vec2Signal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): Vec2Signal

}
