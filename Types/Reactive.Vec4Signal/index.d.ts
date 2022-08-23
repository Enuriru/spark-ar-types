/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />

/**
The `Vec4Signal` class monitors a 4D coordinate.
*/
declare interface Vec4Signal {

/**
```
(get) bottom: ScalarSignal
(set) (Not Available)
```

Represents the bottom component of the `Insets`, the third element of the vector.
*/
bottom: ScalarSignal

/**
```
(get) left: ScalarSignal
(set) (Not Available)
```

Represents the left component of the `Insets`, the second element of the vector.
*/
left: ScalarSignal

/**
```
(get) right: ScalarSignal
(set) (Not Available)
```

Represents the bottom component of the `Insets`, the fourth element of the vector.
*/
right: ScalarSignal

/**
```
(get) top: ScalarSignal
(set) (Not Available)
```

Represents the top component of the `Insets`, the first element of the vector.
*/
top: ScalarSignal

/**
```
(get) w: ScalarSignal
(set) (Not Available)
```

Represents the W component, the fourth element of the vector.
*/
w: ScalarSignal

/**
```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X coordinate, the first element of the vector.
*/
x: ScalarSignal

/**
```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y coordinate, the second elemnt of the vector.
*/
y: ScalarSignal

/**
```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the Z component, the third element of the vector.
*/
z: ScalarSignal

/**
```
history(framesCount: number): SignalHistory<Point4D>
```

Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
* `framesCount` - the number of frames to track.
* `initialValues` - an optional initial value to assign to the signal.
*/
history(framesCount: number): SignalHistory<Point4D>

/**
```
pinLastValue(): Vec4Signal
```

Returns a new `Vec4Signal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): Vec4Signal

/**
```
toHSVA(): HsvaSignal
```

Convert this signal to HSVA signal, using H, S, V, A from four components of vector respectively.
*/
toHSVA(): HsvaSignal

/**
```
toRGBA(): RgbaSignal
```

Convert this signal to RGBA signal, using R, G, B, A from four components of vector respectively.
*/
toRGBA(): RgbaSignal

}
