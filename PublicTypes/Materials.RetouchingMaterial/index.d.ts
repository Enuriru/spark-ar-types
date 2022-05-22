/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface RetouchingMaterial extends MaterialBase {
/**
* ```
(get) fullScreen: BoolSignal
(set) fullScreen: BoolSignal
```

Specifies whether effect should be full-screen.
*/
fullScreen: BoolSignal;
/**
* ```
(get) skinSmoothingFactor: ScalarSignal
(set) skinSmoothingFactor: ScalarSignal
```

Specifies the simulated skin smoothness factor.
*/
skinSmoothingFactor: ScalarSignal;
}
