/// <reference path="../Reactive.SignalHistory/index.d.ts" />

/**
The `PrimitiveOrShader` represents a primitive or shader signal.
*/
declare interface PrimitiveOrShaderSignal {

/**
```
history(framesCount: number): SignalHistory<PrimitiveOrShader>
```

Returns an object used to access signal values from past frames.
Historical signal values are going to be initialized with signal value at call time.

* `framesCount` - the number of frames to track.
*/
history(framesCount: number): SignalHistory<PrimitiveOrShader>

}
