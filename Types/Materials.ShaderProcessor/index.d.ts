/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"shaders","orCapability":""}]
*/


/**
The `ShaderProcessor` class encapsulates the pre and post processors.
*/
declare interface ShaderProcessor {

/**
```
getBoolParameter(paramName: string): Promise<BoolSignal>
```

Returns a promise that is resolved with the `BoolSignal` associated with a given `paramName` or error if the param is not found in the material.
**See Also**: `ShaderProcessor.getBoolParameterOrFallback`, `ShaderProcessor.setBoolParameter`.
*/
getBoolParameter(paramName: string): Promise<BoolSignal>

/**
```
getBoolParameterOrFallback(paramName: string, fallback: BoolSignal | boolean): BoolSignal
```

Returns a `BoolSignal` associated with a given `paramName` or `fallback` if the param is not found in the material.
**See Also**: `ShaderProcessor.getBoolParameter`, `ShaderProcessor.setBoolParameter`.
*/
getBoolParameterOrFallback(paramName: string, fallback: BoolSignal | boolean): BoolSignal

/**
```
getFloatParameter(paramName: string): Promise<ScalarSignal>
```

Returns a promise that is resolved with the `ScalarSignal` associated with a given `paramName` or error if the param is not found in the material.
**See Also**: `ShaderProcessor.getFloatParameterOrFallback`, `ShaderProcessor.setFloatParameter`.
*/
getFloatParameter(paramName: string): Promise<ScalarSignal>

/**
```
getFloatParameterOrFallback(paramName: string, fallback: ScalarSignal | number): ScalarSignal
```

Returns a `ScalarSignal` associated with a given `paramName` or `fallback` if the param is not found in the material.
**See Also**: `ShaderProcessor.getFloatParameter`, `ShaderProcessor.setFloatParameter`.
*/
getFloatParameterOrFallback(paramName: string, fallback: ScalarSignal | number): ScalarSignal

/**
```
setBoolParameter(paramName: string, source: BoolSignal | boolean): Promise<void>
```

Specifies the value of the shader parameter indicated by the `paramName` argument.
Returns promise resolved with error if param for given `paramName` is not found in the material.
**See Also**: `ShaderProcessor.getBoolParameter`, `ShaderProcessor.getBoolParameterOrFallback`.
*/
setBoolParameter(paramName: string, source: BoolSignal | boolean): Promise<void>

/**
```
setFloatParameter(paramName: string, source: ScalarSignal | number): Promise<void>
```

Specifies the value of the shader parameter indicated by the `paramName` argument.
Returns promise resolved with error if param for given `paramName` is not found in the material.
**See Also**: `ShaderProcessor.getFloatParameter`, `ShaderProcessor.getFloatParameterOrFallback`.
*/
setFloatParameter(paramName: string, source: ScalarSignal | number): Promise<void>

}
