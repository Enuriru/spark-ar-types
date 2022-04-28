/// <reference path="../Reactive.SignalHistory/index.d.ts" />

/**
The `PrimitiveOrShader` represents a primitive or shader signal.
*/
declare interface PrimitiveOrShaderSignal {

/**
```
history(framesCount: number): SignalHistory<PrimitiveOrShader>
```

Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
*/
history(framesCount: number): SignalHistory<PrimitiveOrShader>

}
