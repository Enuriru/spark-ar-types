/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.ISignal/index.d.ts" />

/**
The `ComposedMaterial` class encapsulates patch asset materials.
*/
declare interface ComposedMaterial extends MaterialBase {

/**
```
setParameter(parameterName: string, signal: ISignal): void
```

Assigns a signal to the specified patch asset parameter.
*/
setParameter(parameterName: string, signal: ISignal): void

}
