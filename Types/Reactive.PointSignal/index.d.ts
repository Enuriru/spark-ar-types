/// <reference path="../Reactive.Point3D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />

/**
The `PointSignal` class monitors a 3D coordinate.
*/
declare interface PointSignal {

/**
```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X coordinate of the point.
*/
x: ScalarSignal

/**
```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y coordinate of the point.
*/
y: ScalarSignal

/**
```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the Z coordinate of the point.
*/
z: ScalarSignal

/**
```
expSmooth(dampFactor: number): PointSignal
```

Smoothes a variable signal using exponential averaging over time. The argument specifies the dampening time constant in milliseconds.
**Note**: See also `ReactiveModule.expSmooth`.

* `dampFactor` - the dampening time constant, in milliseconds.
*/
expSmooth(dampFactor: number): PointSignal

/**
```
history(framesCount: number, initialValues?: Array<Point3D>): SignalHistory<Point3D>
```

Returns an object used to access signal values from past frames.
Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.

* `framesCount` - the number of frames to track.
* `initialValues` - an optional initial value to assign to the signal.
*/
history(framesCount: number, initialValues?: Array<Point3D>): SignalHistory<Point3D>

/**
```
pinLastValue(): PointSignal
```

Returns a new `PointSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): PointSignal

}
