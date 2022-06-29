/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />

/**
The `RgbaSignal` class monitors a RGBA color value.
*/
declare interface RgbaSignal extends ColorSignal {

/**
```
(get) alpha: ScalarSignal
(set) alpha: ScalarSignal
```

Returns the value of the alpha channel between 0 and 1.0.
*/
alpha: ScalarSignal

/**
```
(get) blue: ScalarSignal
(set) blue: ScalarSignal
```

Returns the value of the blue channel between 0 and 1.0.
*/
blue: ScalarSignal

/**
```
(get) green: ScalarSignal
(set) green: ScalarSignal
```

Returns the value of the green channel between 0 and 1.0.
*/
green: ScalarSignal

/**
```
(get) red: ScalarSignal
(set) red: ScalarSignal
```

Returns the value of the red channel between 0 and 1.0.
*/
red: ScalarSignal

/**
```
pinLastValue(): RgbaSignal
```

Returns a new `RgbaSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): RgbaSignal

/**
```
toHSVA(): HsvaSignal
```

Convert this signal into HSVA color space.
*/
toHSVA(): HsvaSignal

/**
```
toVec4(): Vec4Signal
```

Convert this signal to Vector signal, using R, G, B, A for four components of vector respectively.
*/
toVec4(): Vec4Signal

}
