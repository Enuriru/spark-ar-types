/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `AmbientLightSource` class describes an ambient lighting source.
*/
declare interface AmbientLightSource extends SceneObjectBase {

/**
```
(get) (Not Available)
(set) color: ColorSignal
```

Specifies the color of this light source.
*/
color: ColorSignal

/**
```
(get) intensity: ScalarSignal
(set) intensity: ScalarSignal
```

Specifies the intensity of this light source, usually between 0.0 and 1.0.
*/
intensity: ScalarSignal

}