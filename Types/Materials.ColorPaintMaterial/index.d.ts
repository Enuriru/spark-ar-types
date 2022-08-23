/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `ColorPaintMaterial` class encapsulates a face-paint material.
*/
declare interface ColorPaintMaterial extends MaterialBase {

/**
```
(get) backgroundInfluence: ScalarSignal
(set) backgroundInfluence: ScalarSignal
```

Specifies the influence of the background face on the paint texture.
*/
backgroundInfluence: ScalarSignal

/**
```
(get) paintBrightness: ScalarSignal
(set) paintBrightness: ScalarSignal
```

Specifies the simulated paint brightness.
*/
paintBrightness: ScalarSignal

}
