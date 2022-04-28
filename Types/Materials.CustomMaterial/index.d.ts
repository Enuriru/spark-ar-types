/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `CustomMaterial` class describes a custom material shader.
*/
declare interface CustomMaterial extends MaterialBase {

/**
```
boolParameter(paramName: string): BoolValue
```

Returns the Boolean value indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
**See Also**: `CustomMaterial.setBoolParameter`.
*/
boolParameter(paramName: string): BoolValue

/**
```
floatParameter(paramName: string): ScalarValue
```

Returns the `ScalarValue` value representing the shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
**See Also**: `CustomMaterial.setFloatParameter`.
*/
floatParameter(paramName: string): ScalarValue

/**
```
getAllParameters(): Promise<{[key: string]: BoolSignal | ScalarSignal}>
```

Get all parameters that are currently set on this custom material.
The result in a promise only contains float and boolean parameters that were set before on this material.
*/
getAllParameters(): Promise<{[key: string]: BoolSignal | ScalarSignal}>

/**
```
getBoolParameter(paramName: string): Promise<BoolSignal>
```

Returns a promise that is resolved with the `BoolSignal` associated with a given `paramName` or error if the param is not found in the material.
**See Also**: `CustomMaterial.getBoolParameterOrFallback`, `CustomMaterial.setBoolParameter`.
*/
getBoolParameter(paramName: string): Promise<BoolSignal>

/**
```
getBoolParameterOrFallback(paramName: string, fallback: BoolSignal): BoolSignal
```

Returns a `BoolSignal` associated with a given `paramName` or `fallback` if the param is not found in the material.
**See Also**: `CustomMaterial.getBoolParameter`, `CustomMaterial.setBoolParameter`.
*/
getBoolParameterOrFallback(paramName: string, fallback: BoolSignal): BoolSignal

/**
```
getFloatParameter(paramName: string): Promise<ScalarSignal>
```

Returns a promise that is resolved with the `ScalarSignal` associated with a given `paramName` or error if the param is not found in the material.
**See Also**: `CustomMaterial.getFloatParameterOrFallback`, `CustomMaterial.setFloatParameter`.
*/
getFloatParameter(paramName: string): Promise<ScalarSignal>

/**
```
getFloatParameterOrFallback(paramName: string, fallback: ScalarSignal): ScalarSignal
```

Returns a `ScalarSignal` associated with a given `paramName` or `fallback` if the param is not found in the material.
**See Also**: `CustomMaterial.getFloatParameter`, `CustomMaterial.setFloatParameter`.
*/
getFloatParameterOrFallback(paramName: string, fallback: ScalarSignal): ScalarSignal

/**
```
getTexture(paramName: string): Promise<TextureBase | null>
```

Returns a promise that is resolved with the `TextureBase` associated with a given `paramName` or error if the param is not found in the material.
**See Also**: `CustomMaterial.setTexture`.
*/
getTexture(paramName: string): Promise<TextureBase | null>

/**
```
setBoolParameter(paramName: string, source: BoolSignal): Promise<void>
```

Specifies the value of the shader parameter indicated by the `paramName` argument.
Returns promise resolved with error if param for given `paramName` is not found in the material.
**See Also**: `CustomMaterial.getBoolParameter`, `CustomMaterial.getBoolParameterOrFallback`.
*/
setBoolParameter(paramName: string, source: BoolSignal): Promise<void>

/**
```
setFloatParameter(paramName: string, source: ScalarSignal): Promise<void>
```

Specifies the value of the shader parameter indicated by the `paramName` argument.
Returns promise resolved with error if param for given `paramName` is not found in the material.
**See Also**: `CustomMaterial.getFloatParameter`, `CustomMaterial.getFloatParameterOrFallback`.
*/
setFloatParameter(paramName: string, source: ScalarSignal): Promise<void>

/**
```
setParameters(params: {[key: string]: BoolSignal | ScalarSignal}): Promise<void>
```

Set multiple shader parameters on this custom material.
The result in a promise that is resolved successfully if all parameters were set.
Trying to set empty set of parameters is valid, results in a no-op.
*/
setParameters(params: {[key: string]: BoolSignal | ScalarSignal}): Promise<void>

/**
```
setTexture(paramName: string, texture: TextureBase): Promise<void>
```

Specifies the value of the shader parameter indicated by the `paramName` argument.
Returns promise resolved with error if param for given `paramName` is not found in the material.
**See Also**: `CustomMaterial.getTexture`.
*/
setTexture(paramName: string, texture: TextureBase): Promise<void>

}
