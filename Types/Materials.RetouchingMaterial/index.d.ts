/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `RetouchingMaterial` class encapsulates parameters which define the extend of certain beautification techniques.
*/
declare interface RetouchingMaterial extends MaterialBase {

/**
```
(get) eyeBrighteningFactor: ScalarSignal
(set) eyeBrighteningFactor: ScalarSignal
```

Specifies the simulated eye brightening factor.
*/
eyeBrighteningFactor: ScalarSignal

/**
```
(get) fullScreen: BoolSignal
(set) fullScreen: BoolSignal
```

Specifies whether effect should be full-screen.
*/
fullScreen: BoolSignal

/**
```
(get) skinSmoothingFactor: ScalarSignal
(set) skinSmoothingFactor: ScalarSignal
```

Specifies the simulated skin smoothness factor.
*/
skinSmoothingFactor: ScalarSignal

/**
```
(get) teethWhiteningFactor: ScalarSignal
(set) teethWhiteningFactor: ScalarSignal
```

Specifies the simulated teeth whitening factor.
*/
teethWhiteningFactor: ScalarSignal

}
