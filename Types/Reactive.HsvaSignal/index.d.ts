/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />

/**
The `HsvaSignal` class monitors a HSVA color value.
*/
declare interface HsvaSignal extends ColorSignal {

/**
```
(get) alpha: ScalarSignal
(set) (Not Available)
```

Returns the value of the `alpha` channel of this signal.
*/
alpha: ScalarSignal

/**
```
(get) brightness: ScalarSignal
(set) (Not Available)
```

Returns the value of the `brightness`(`value`) channel of this signal.
*/
brightness: ScalarSignal

/**
```
(get) hue: ScalarSignal
(set) (Not Available)
```

Returns the value of the `hue` channel of this signal.
*/
hue: ScalarSignal

/**
```
(get) saturation: ScalarSignal
(set) (Not Available)
```

Returns the value of the `saturation` channel of this signal.
*/
saturation: ScalarSignal

/**
```
pinLastValue(): HsvaSignal
```

Returns a new `HsvaSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): HsvaSignal

/**
```
toRGBA(): RgbaSignal
```

Convert this signal into RGBA color space.
Be aware, that there is a potential loss of data, when converting HSVA values with `Saturation` set to 0.
*/
toRGBA(): RgbaSignal

/**
```
toVec4(): Vec4Signal
```

Convert this signal to Vector signal, using H, S, V, A for four components of vector respectively.
*/
toVec4(): Vec4Signal

}
