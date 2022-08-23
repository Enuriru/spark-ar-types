/// <reference path="../Reactive.SignalHistory/index.d.ts" />

/**
The `ShaderSignal` represents a shader signal. Scalar and Vector signals can be automatically converted to a ShaderSignal.
*/
declare interface ShaderSignal {

/**
```
(get) w: ShaderSignal
(set) (Not Available)
```

Gets the W component.
*/
w: ShaderSignal

/**
```
(get) x: ShaderSignal
(set) (Not Available)
```

Gets the X component.
*/
x: ShaderSignal

/**
```
(get) y: ShaderSignal
(set) (Not Available)
```

Gets the Y component.
*/
y: ShaderSignal

/**
```
(get) z: ShaderSignal
(set) (Not Available)
```

Gets the Z component.
*/
z: ShaderSignal

/**
```
history(framesCount: number): SignalHistory<Shader>
```

Returns an object used to access signal values from past frames.
Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.

* `framesCount` - the number of frames to track.
*/
history(framesCount: number): SignalHistory<Shader>

}
